-- Add RLS policies for progress and gamification tables
-- Fixes 406 errors when querying user_progress

-- ============================================================================
-- ENABLE RLS
-- ============================================================================

ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.module_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.badges ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- USER_PROGRESS POLICIES
-- ============================================================================

-- Users can read their own progress
CREATE POLICY "Users can view own progress"
ON public.user_progress
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Users can insert their own progress (auto-created on first use)
CREATE POLICY "Users can create own progress"
ON public.user_progress
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Users can update their own progress
CREATE POLICY "Users can update own progress"
ON public.user_progress
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- ============================================================================
-- MODULE_PROGRESS POLICIES
-- ============================================================================

-- Users can read their own module progress
CREATE POLICY "Users can view own module progress"
ON public.module_progress
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Users can insert their own module progress
CREATE POLICY "Users can create own module progress"
ON public.module_progress
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Users can update their own module progress
CREATE POLICY "Users can update own module progress"
ON public.module_progress
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- ============================================================================
-- LESSON_PROGRESS POLICIES
-- ============================================================================

-- Users can read their own lesson progress
CREATE POLICY "Users can view own lesson progress"
ON public.lesson_progress
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Users can insert their own lesson progress
CREATE POLICY "Users can create own lesson progress"
ON public.lesson_progress
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Users can update their own lesson progress
CREATE POLICY "Users can update own lesson progress"
ON public.lesson_progress
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- ============================================================================
-- BADGES POLICIES (read-only for all users)
-- ============================================================================

-- All authenticated users can view active badges
CREATE POLICY "Users can view active badges"
ON public.badges
FOR SELECT
TO authenticated
USING (is_active = true);

-- Admins can manage badges (for future)
-- CREATE POLICY "Admins can manage badges"
-- ON public.badges
-- FOR ALL
-- TO authenticated
-- USING (EXISTS (
--   SELECT 1 FROM public.profiles
--   WHERE id = auth.uid() AND role = 'admin'
-- ));

-- ============================================================================
-- USER_BADGES POLICIES
-- ============================================================================

-- Users can read their own badges
CREATE POLICY "Users can view own badges"
ON public.user_badges
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Users can insert their own badges (earned through system)
CREATE POLICY "Users can earn badges"
ON public.user_badges
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Users can update their own badge display settings (pinning)
CREATE POLICY "Users can update own badge display"
ON public.user_badges
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON POLICY "Users can view own progress" ON public.user_progress IS 'Users can only see their own progress data';
COMMENT ON POLICY "Users can view active badges" ON public.badges IS 'All users can see available badges to earn';
