-- Fix profile creation trigger with better error handling
-- This replaces the existing function with error logging

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Improved function with error handling
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
    user_first_name TEXT;
    user_role user_role;
BEGIN
    -- Extract metadata with defaults
    user_first_name := COALESCE(NEW.raw_user_meta_data->>'first_name', 'User');
    user_role := COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'student');

    -- Insert profile
    INSERT INTO public.profiles (
        id,
        email,
        first_name,
        role,
        email_verified_at
    )
    VALUES (
        NEW.id,
        NEW.email,
        user_first_name,
        user_role,
        NEW.email_confirmed_at
    );

    RETURN NEW;
EXCEPTION WHEN OTHERS THEN
    -- Log error but don't block user creation
    RAISE WARNING 'Error creating profile for user %: % %', NEW.id, SQLERRM, SQLSTATE;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate trigger
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

COMMENT ON FUNCTION public.handle_new_user() IS 'Automatically creates profile when new user signs up. Includes error handling to prevent blocking signup.';
