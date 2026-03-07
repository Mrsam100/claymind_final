-- Contact Submissions Table
-- Description: Stores contact form submissions for tracking and admin review
-- Date: 2026-01-13

-- ============================================================================
-- CONTACT SUBMISSIONS TABLE
-- ============================================================================

CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'sent' CHECK (status IN ('sent', 'failed', 'replied')),
  sent_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  replied_at TIMESTAMPTZ,
  replied_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Constraints
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT valid_name CHECK (length(name) >= 2 AND length(name) <= 100),
  CONSTRAINT valid_message CHECK (length(message) >= 10 AND length(message) <= 2000)
);

-- ============================================================================
-- INDEXES
-- ============================================================================

-- Index for admin queries (most recent first)
CREATE INDEX idx_contact_submissions_sent_at ON public.contact_submissions(sent_at DESC);

-- Index for filtering by status
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);

-- Index for email lookups (rate limiting)
CREATE INDEX idx_contact_submissions_email_sent_at ON public.contact_submissions(email, sent_at DESC);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================================

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Admins can view all contact submissions
CREATE POLICY "Admins can view contact submissions"
  ON public.contact_submissions FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Policy: Admins can update submissions (mark as replied)
CREATE POLICY "Admins can update contact submissions"
  ON public.contact_submissions FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Policy: Service role can insert (Edge Functions use service role)
-- No RLS policy needed for service role - it bypasses RLS

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON TABLE public.contact_submissions IS 'Stores contact form submissions for tracking and admin review';
COMMENT ON COLUMN public.contact_submissions.status IS 'Email delivery status: sent, failed, or replied';
COMMENT ON COLUMN public.contact_submissions.sent_at IS 'Timestamp when the email was sent';
COMMENT ON COLUMN public.contact_submissions.replied_at IS 'Timestamp when admin replied to this submission';
COMMENT ON COLUMN public.contact_submissions.replied_by IS 'Admin user who replied to this submission';

-- ============================================================================
-- SUCCESS MESSAGE
-- ============================================================================

DO $$
BEGIN
  RAISE NOTICE 'Contact submissions table created successfully!';
  RAISE NOTICE 'This table will store all contact form submissions.';
  RAISE NOTICE 'Admins can view and manage submissions through the dashboard.';
END $$;
