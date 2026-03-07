-- Add Missing Modules (ai-basics, ml-mini, build-app)
-- These modules are referenced in the UI but do not have full lessons yet

INSERT INTO public.modules (id, title, description, long_description, difficulty, color, icon_name, display_order, is_published, total_lessons, estimated_duration_minutes, tags, learning_objectives) VALUES
('ai-basics', 'AI Basics', 'Learn what AI is and how it works', 'Discover the fundamentals of Artificial Intelligence through fun, interactive lessons designed for kids. Learn about machine learning, neural networks, and how AI is changing the world!', 'beginner', 'purple', 'Brain', 1, TRUE, 8, 120, ARRAY['beginner', 'foundational', 'ai'], ARRAY['Understand what AI is', 'Learn how computers learn', 'Explore real-world AI applications']),

('ml-mini', 'Mini Machine Learning', 'Train your own AI models', 'Get hands-on experience training simple AI models. Learn how machines learn from data and make predictions!', 'intermediate', 'green', 'Brain', 2, TRUE, 8, 180, ARRAY['machine-learning', 'hands-on', 'intermediate'], ARRAY['Train a simple AI model', 'Understand supervised learning', 'Experiment with different algorithms']),

('build-app', 'Build an App with AI', 'Create your first AI-powered application', 'Learn to build a real AI-powered web application! Combine your coding skills with AI to create something amazing.', 'intermediate', 'amber', 'Sparkles', 3, TRUE, 12, 240, ARRAY['coding', 'application', 'intermediate'], ARRAY['Build a complete AI app', 'Learn API integration', 'Deploy your first project'])
ON CONFLICT (id) DO NOTHING;

-- Add placeholder lessons for these modules
INSERT INTO public.lessons (id, module_id, title, description, lesson_number, display_order, estimated_duration_minutes, difficulty, is_published, is_locked_by_default, learning_objectives) VALUES
('ai-basics-1', 'ai-basics', 'What is AI?', 'Introduction to Artificial Intelligence', 1, 1, 15, 'beginner', TRUE, FALSE, ARRAY['Define AI', 'Understand basic concepts']),
('ai-basics-2', 'ai-basics', 'How AI Learns', 'Understanding machine learning', 2, 2, 20, 'beginner', TRUE, FALSE, ARRAY['Understand learning', 'See examples']),
('ai-basics-3', 'ai-basics', 'AI in Daily Life', 'Real-world AI applications', 3, 3, 15, 'beginner', TRUE, TRUE, ARRAY['Identify AI uses', 'Explore applications']),
('ai-basics-4', 'ai-basics', 'Smart Assistants', 'How voice AI works', 4, 4, 20, 'beginner', TRUE, TRUE, ARRAY['Voice recognition', 'Natural language']),
('ai-basics-5', 'ai-basics', 'Image Recognition', 'How AI sees the world', 5, 5, 25, 'beginner', TRUE, TRUE, ARRAY['Computer vision', 'Image processing']),
('ai-basics-6', 'ai-basics', 'AI and Games', 'AI in gaming', 6, 6, 20, 'beginner', TRUE, TRUE, ARRAY['Game AI', 'Decision making']),
('ai-basics-7', 'ai-basics', 'The Future of AI', 'What is coming next', 7, 7, 15, 'beginner', TRUE, TRUE, ARRAY['Future trends', 'Possibilities']),
('ai-basics-8', 'ai-basics', 'Your AI Journey', 'Next steps in learning', 8, 8, 20, 'beginner', TRUE, TRUE, ARRAY['Review concepts', 'Plan learning'])
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.lessons (id, module_id, title, description, lesson_number, display_order, estimated_duration_minutes, difficulty, is_published, is_locked_by_default, learning_objectives) VALUES
('ml-mini-1', 'ml-mini', 'What is Machine Learning?', 'Introduction to ML', 1, 1, 20, 'intermediate', TRUE, FALSE, ARRAY['Define ML', 'Understand basics']),
('ml-mini-2', 'ml-mini', 'Training Data', 'How AI learns from data', 2, 2, 25, 'intermediate', TRUE, FALSE, ARRAY['Data collection', 'Data quality']),
('ml-mini-3', 'ml-mini', 'Your First Model', 'Build a simple model', 3, 3, 30, 'intermediate', TRUE, TRUE, ARRAY['Create model', 'Train model']),
('ml-mini-4', 'ml-mini', 'Testing & Accuracy', 'Evaluate your model', 4, 4, 25, 'intermediate', TRUE, TRUE, ARRAY['Test models', 'Measure accuracy']),
('ml-mini-5', 'ml-mini', 'Improving Models', 'Make better predictions', 5, 5, 30, 'intermediate', TRUE, TRUE, ARRAY['Optimize', 'Tune parameters']),
('ml-mini-6', 'ml-mini', 'Types of Learning', 'Supervised vs Unsupervised', 6, 6, 20, 'intermediate', TRUE, TRUE, ARRAY['Compare methods', 'Choose approach']),
('ml-mini-7', 'ml-mini', 'Real Projects', 'Build something cool', 7, 7, 35, 'intermediate', TRUE, TRUE, ARRAY['Apply learning', 'Create project']),
('ml-mini-8', 'ml-mini', 'ML Master Badge', 'Complete the module', 8, 8, 25, 'intermediate', TRUE, TRUE, ARRAY['Review', 'Final challenge'])
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.lessons (id, module_id, title, description, lesson_number, display_order, estimated_duration_minutes, difficulty, is_published, is_locked_by_default, learning_objectives) VALUES
('build-app-1', 'build-app', 'Planning Your App', 'Design your AI app', 1, 1, 20, 'intermediate', TRUE, FALSE, ARRAY['Plan features', 'Design UI']),
('build-app-2', 'build-app', 'Setting Up', 'Get your environment ready', 2, 2, 25, 'intermediate', TRUE, FALSE, ARRAY['Install tools', 'Setup project']),
('build-app-3', 'build-app', 'First AI Call', 'Connect to AI API', 3, 3, 30, 'intermediate', TRUE, TRUE, ARRAY['API basics', 'Make requests']),
('build-app-4', 'build-app', 'Building UI', 'Create the interface', 4, 4, 35, 'intermediate', TRUE, TRUE, ARRAY['HTML/CSS', 'User interface']),
('build-app-5', 'build-app', 'Adding Features', 'Make it interactive', 5, 5, 30, 'intermediate', TRUE, TRUE, ARRAY['JavaScript', 'Interactions']),
('build-app-6', 'build-app', 'Error Handling', 'Handle problems gracefully', 6, 6, 25, 'intermediate', TRUE, TRUE, ARRAY['Validation', 'Error messages']),
('build-app-7', 'build-app', 'Testing', 'Make sure it works', 7, 7, 30, 'intermediate', TRUE, TRUE, ARRAY['Test features', 'Debug issues']),
('build-app-8', 'build-app', 'Polish & Style', 'Make it look great', 8, 8, 25, 'intermediate', TRUE, TRUE, ARRAY['Styling', 'UX improvements']),
('build-app-9', 'build-app', 'Deployment Prep', 'Get ready to share', 9, 9, 30, 'intermediate', TRUE, TRUE, ARRAY['Prepare code', 'Optimize']),
('build-app-10', 'build-app', 'Going Live', 'Deploy your app', 10, 10, 35, 'intermediate', TRUE, TRUE, ARRAY['Deploy', 'Share project']),
('build-app-11', 'build-app', 'User Feedback', 'Iterate and improve', 11, 11, 20, 'intermediate', TRUE, TRUE, ARRAY['Gather feedback', 'Make improvements']),
('build-app-12', 'build-app', 'Final Showcase', 'Show off your work!', 12, 12, 40, 'intermediate', TRUE, TRUE, ARRAY['Present app', 'Celebrate success'])
ON CONFLICT (id) DO NOTHING;
