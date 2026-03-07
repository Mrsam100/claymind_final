-- Add missing INSERT policy for profiles table
-- This was blocking the trigger from creating profiles during signup

-- Allow the trigger function to insert profiles for new users
CREATE POLICY "Allow profile creation during signup"
    ON public.profiles FOR INSERT
    WITH CHECK (true);

-- Alternative: More restrictive policy (users can only insert their own profile)
-- CREATE POLICY "Users can create own profile"
--     ON public.profiles FOR INSERT
--     WITH CHECK (auth.uid() = id);

COMMENT ON POLICY "Allow profile creation during signup" ON public.profiles
IS 'Allows automatic profile creation via trigger when new users sign up. Required for handle_new_user() trigger to work.';
