-- Add Prompt Engineering and Ethics & Safety Modules
-- Description: Creates the prompt-engineering and ethics-safety modules
-- Date: 2026-01-11
-- Note: This must run AFTER 00009_backfill_existing_users.sql (alphabetically sorted with z prefix)

INSERT INTO public.modules (id, title, description, long_description, difficulty, color, icon_name, display_order, is_published, total_lessons, estimated_duration_minutes, tags, learning_objectives) VALUES
('prompt-engineering', 'Prompt Engineering', 'Master the art of talking to AI', 'Learn how to communicate effectively with AI systems! Discover the secrets of writing great prompts that get amazing results. From basic instructions to advanced techniques, become a prompt engineering expert!', 'intermediate', 'blue', 'MessageSquare', 4, TRUE, 10, 220, ARRAY['prompting', 'communication', 'intermediate'], ARRAY['Write effective AI prompts', 'Master prompt techniques', 'Get better AI responses']),

('ethics-safety', 'Ethics & Safety AI', 'Use AI responsibly and safely', 'Learn how to use AI ethically and safely! Understand important topics like privacy, fairness, bias, and responsible AI use. Become an AI Guardian and help create a better future for everyone!', 'intermediate', 'red', 'Shield', 5, TRUE, 8, 155, ARRAY['ethics', 'safety', 'responsibility'], ARRAY['Use AI ethically', 'Protect privacy and data', 'Recognize bias and misinformation', 'Be an AI Guardian']);
