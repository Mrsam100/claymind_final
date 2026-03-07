SELECT name, email, subject, status, sent_at 
FROM public.contact_submissions 
ORDER BY sent_at DESC 
LIMIT 5;
