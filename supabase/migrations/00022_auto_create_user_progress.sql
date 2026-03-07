-- Auto-create user_progress when profile is created
-- Fixes 406 errors when new users try to access dashboard

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS on_profile_created_create_progress ON public.profiles;
DROP FUNCTION IF EXISTS create_user_progress_on_signup();

-- Create function to auto-create user_progress
CREATE OR REPLACE FUNCTION create_user_progress_on_signup()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  -- Create user_progress entry for new profile
  INSERT INTO public.user_progress (
    user_id,
    current_level,
    current_xp,
    total_xp_earned,
    current_streak_days,
    longest_streak_days,
    total_lessons_completed,
    total_modules_completed,
    total_time_spent_minutes,
    total_ai_creations
  ) VALUES (
    NEW.id,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  )
  ON CONFLICT (user_id) DO NOTHING;

  RETURN NEW;
END;
$$;

-- Create trigger on profile insert
CREATE TRIGGER on_profile_created_create_progress
  AFTER INSERT ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION create_user_progress_on_signup();

-- Backfill: Create user_progress for existing users who don't have it
INSERT INTO public.user_progress (
  user_id,
  current_level,
  current_xp,
  total_xp_earned,
  current_streak_days,
  longest_streak_days,
  total_lessons_completed,
  total_modules_completed,
  total_time_spent_minutes,
  total_ai_creations
)
SELECT
  p.id,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
FROM public.profiles p
LEFT JOIN public.user_progress up ON up.user_id = p.id
WHERE up.user_id IS NULL
ON CONFLICT (user_id) DO NOTHING;

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT ALL ON public.user_progress TO authenticated;
GRANT ALL ON public.module_progress TO authenticated;
GRANT ALL ON public.lesson_progress TO authenticated;

-- Add comment
COMMENT ON FUNCTION create_user_progress_on_signup IS 'Auto-creates user_progress entry when a new profile is created';
