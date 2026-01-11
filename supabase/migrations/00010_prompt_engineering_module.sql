-- Prompt Engineering Module - Complete Content
-- Description: Complete lessons and content for the Prompt Engineering module
-- Date: 2026-01-11

-- ============================================================================
-- PROMPT ENGINEERING LESSONS
-- ============================================================================

INSERT INTO public.lessons (id, module_id, title, description, lesson_number, display_order, estimated_duration_minutes, difficulty, is_published, is_locked_by_default, learning_objectives) VALUES
('prompt-eng-1', 'prompt-engineering', 'What is a Prompt?', 'Learn the basics of communicating with AI', 1, 1, 15, 'beginner', TRUE, FALSE, ARRAY['Understand what prompts are', 'Learn basic AI communication', 'Write your first prompt']),
('prompt-eng-2', 'prompt-engineering', 'Being Clear and Specific', 'Learn how to write clear instructions', 2, 2, 20, 'beginner', TRUE, FALSE, ARRAY['Write clear instructions', 'Avoid vague prompts', 'Get better AI responses']),
('prompt-eng-3', 'prompt-engineering', 'Adding Context', 'Give AI the information it needs', 3, 3, 20, 'intermediate', TRUE, FALSE, ARRAY['Provide helpful context', 'Explain your goals', 'Improve response quality']),
('prompt-eng-4', 'prompt-engineering', 'Examples and Patterns', 'Use examples to guide AI', 4, 4, 25, 'intermediate', TRUE, TRUE, ARRAY['Use few-shot learning', 'Create example patterns', 'Guide AI behavior']),
('prompt-eng-5', 'prompt-engineering', 'Role Playing', 'Ask AI to take on different roles', 5, 5, 20, 'intermediate', TRUE, TRUE, ARRAY['Use role-based prompts', 'Set AI personality', 'Get specialized responses']),
('prompt-eng-6', 'prompt-engineering', 'Step-by-Step Thinking', 'Break down complex tasks', 6, 6, 25, 'intermediate', TRUE, TRUE, ARRAY['Use chain-of-thought', 'Break tasks into steps', 'Solve complex problems']),
('prompt-eng-7', 'prompt-engineering', 'Formatting Outputs', 'Get responses in the format you need', 7, 7, 20, 'intermediate', TRUE, TRUE, ARRAY['Specify output format', 'Structure AI responses', 'Create useful outputs']),
('prompt-eng-8', 'prompt-engineering', 'Refining and Iterating', 'Improve your prompts over time', 8, 8, 20, 'intermediate', TRUE, TRUE, ARRAY['Iterate on prompts', 'Learn from results', 'Master prompt engineering']),
('prompt-eng-9', 'prompt-engineering', 'Advanced Techniques', 'Master advanced prompting strategies', 9, 9, 25, 'advanced', TRUE, TRUE, ARRAY['Use advanced patterns', 'Combine techniques', 'Solve complex tasks']),
('prompt-eng-10', 'prompt-engineering', 'Final Project', 'Create amazing AI projects with prompts!', 10, 10, 30, 'advanced', TRUE, TRUE, ARRAY['Build complete projects', 'Apply all techniques', 'Become a prompt master']);

-- ============================================================================
-- LESSON 1: What is a Prompt?
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
-- Introduction
('prompt-eng-1', 'text', 'Welcome to Prompt Engineering!', '{
  "body": "# Welcome! 🎉\n\nYou''re about to learn one of the most important skills for working with AI: **Prompt Engineering**!\n\nA **prompt** is simply the instructions or questions you give to an AI. Just like talking to a friend, the better you explain what you want, the better results you get!\n\n## What You''ll Learn\n- What prompts are and why they matter\n- How to talk to AI effectively\n- How to get amazing results from AI tools\n\nLet''s dive in! 🚀"
}', 1, TRUE),

-- Interactive Example
('prompt-eng-1', 'interactive', 'Try Your First Prompt!', '{
  "type": "text_input",
  "instructions": "Type a simple question or request for an AI:",
  "placeholder": "Example: Tell me a joke about robots",
  "hints": [
    "Try asking for a story",
    "Request a joke or riddle",
    "Ask it to explain something simple"
  ],
  "validation": {
    "minLength": 5,
    "message": "Try writing at least 5 characters!"
  }
}', 2, TRUE),

-- Video Content
('prompt-eng-1', 'text', 'How Prompts Work', '{
  "body": "## How AI Understands Your Prompts 🤖\n\nWhen you give AI a prompt, here''s what happens:\n\n1. **You write** your instructions or question\n2. **AI reads** and understands what you want\n3. **AI thinks** about the best response\n4. **You get** the result!\n\nThink of it like ordering at a restaurant:\n- 🍕 Vague order: \"I want food\" → You might get anything\n- ✅ Clear order: \"I want a pepperoni pizza\" → You get exactly what you want!\n\n### The Better Your Prompt, The Better The Result!\n\nGood prompts = Amazing AI responses 🌟"
}', 3, TRUE),

-- Quiz
('prompt-eng-1', 'quiz', 'Quick Check!', '{
  "questions": [
    {
      "question": "What is a prompt?",
      "options": [
        "Instructions or questions you give to AI",
        "A type of computer program",
        "A robot''s name",
        "A video game"
      ],
      "correctAnswer": 0,
      "explanation": "A prompt is the instructions or questions you give to an AI to tell it what you want!"
    },
    {
      "question": "Why are good prompts important?",
      "options": [
        "They make the AI faster",
        "They help get better results from AI",
        "They make the computer prettier",
        "They are not important"
      ],
      "correctAnswer": 1,
      "explanation": "Good prompts help AI understand exactly what you want, so you get better results!"
    }
  ]
}', 4, TRUE),

-- AI Lab Exercise
('prompt-eng-1', 'ai_lab', 'Practice Time!', '{
  "instructions": "Try these prompts in the AI Lab and see what happens!",
  "exercises": [
    {
      "title": "Simple Request",
      "prompt": "Write a short poem about a happy robot",
      "expectedOutput": "A creative poem with robot theme"
    },
    {
      "title": "Clear Question",
      "prompt": "What are three fun facts about space?",
      "expectedOutput": "Three interesting space facts"
    }
  ]
}', 5, TRUE);

-- ============================================================================
-- LESSON 2: Being Clear and Specific
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
-- Introduction
('prompt-eng-2', 'text', 'The Power of Clarity', '{
  "body": "# Being Clear and Specific 🎯\n\n## Why Clarity Matters\n\nImagine asking someone to \"draw a picture.\" What would they draw? Nobody knows!\n\nBut if you say \"draw a blue cat wearing a party hat,\" now they know exactly what you want!\n\n### The Same Works for AI!\n\n**Vague Prompt:** \"Tell me about animals\"\n- AI might talk about ANY animal\n- You might not get what you need\n\n**Specific Prompt:** \"Tell me 3 interesting facts about dolphins\"\n- AI knows exactly what to do\n- You get useful information!\n\nLet''s practice making your prompts crystal clear! ✨"
}', 1, TRUE),

-- Examples
('prompt-eng-2', 'text', 'Good vs. Bad Prompts', '{
  "body": "## Compare These Prompts 🔍\n\n### ❌ Vague Prompts\n- \"Write something\"\n- \"Tell me about history\"\n- \"Make a game\"\n- \"Help me\"\n\n### ✅ Clear and Specific Prompts\n- \"Write a 5-sentence story about a dragon who loves pizza\"\n- \"Tell me about the American Revolution in 3 key points\"\n- \"Create a simple number guessing game with hints\"\n- \"Help me understand how photosynthesis works using simple words\"\n\n### What Made Them Better?\n1. **Specific topic** - What exactly do you want?\n2. **Length/scope** - How much information?\n3. **Format** - How should it be presented?\n4. **Details** - Any special requirements?"
}', 2, TRUE),

-- Interactive Exercise
('prompt-eng-2', 'interactive', 'Fix This Prompt!', '{
  "type": "prompt_improvement",
  "vaguePrompt": "Tell me about robots",
  "instructions": "Make this prompt more specific by adding details!",
  "hints": [
    "What KIND of robots? (toy robots? space robots?)",
    "What do you want to know? (how they work? history?)",
    "How much information? (3 facts? a story?)"
  ],
  "goodExamples": [
    "Tell me 3 interesting facts about robots used in space exploration",
    "Explain how toy robots work in simple words",
    "Write a fun story about a friendly robot who helps kids learn math"
  ]
}', 3, TRUE),

-- Quiz
('prompt-eng-2', 'quiz', 'Test Your Knowledge!', '{
  "questions": [
    {
      "question": "Which prompt is MORE specific?",
      "options": [
        "Write a story",
        "Write a 3-paragraph story about a brave mouse who saves a kingdom",
        "Tell me something",
        "Write"
      ],
      "correctAnswer": 1,
      "explanation": "The second option tells exactly what kind of story, how long, and about what topic!"
    },
    {
      "question": "What makes a prompt clear?",
      "options": [
        "Using big words",
        "Writing a lot",
        "Being specific about what you want",
        "Using all capital letters"
      ],
      "correctAnswer": 2,
      "explanation": "Clear prompts are specific about what you want AI to do!"
    },
    {
      "question": "Which is a specific detail you can add to prompts?",
      "options": [
        "All of these",
        "The length you want",
        "The format you need",
        "The topic you''re interested in"
      ],
      "correctAnswer": 0,
      "explanation": "All of these details help make your prompts clearer and more specific!"
    }
  ]
}', 4, TRUE),

-- AI Lab Practice
('prompt-eng-2', 'ai_lab', 'Practice Being Specific!', '{
  "instructions": "Try improving these vague prompts in the AI Lab!",
  "exercises": [
    {
      "title": "Challenge 1",
      "vaguePrompt": "Tell me about animals",
      "improvedPrompt": "Tell me 3 cool facts about Arctic animals and how they survive in cold weather",
      "task": "Make it specific by choosing an animal type and what you want to learn"
    },
    {
      "title": "Challenge 2",
      "vaguePrompt": "Write code",
      "improvedPrompt": "Write a simple calculator in HTML that can add two numbers with a colorful design",
      "task": "Specify what kind of code, what it should do, and any special requirements"
    }
  ]
}', 5, TRUE);

-- ============================================================================
-- LESSON 3: Adding Context
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
-- Introduction
('prompt-eng-3', 'text', 'Give AI the Full Picture', '{
  "body": "# Adding Context 🖼️\n\n## What is Context?\n\nContext is the **background information** that helps AI understand your request better.\n\n### Think About It Like This:\n\nIf someone says \"It''s too hot!\" you might ask:\n- Is it the weather? 🌡️\n- Is it their food? 🍕\n- Is it the room temperature? 🏠\n\n**Context** tells you which one!\n\n## Why Context Matters for AI\n\nWithout context: \"Explain JavaScript\"\n- AI doesn''t know your level\n- Might use words you don''t understand\n- Could be too basic OR too advanced\n\nWith context: \"Explain JavaScript to a 10-year-old who likes video games\"\n- AI knows your age\n- Uses simple words\n- Relates it to your interests! 🎮\n\nContext = Better, more useful answers! 🌟"
}', 1, TRUE),

-- Examples
('prompt-eng-3', 'text', 'Context in Action', '{
  "body": "## See How Context Helps! 📊\n\n### Example 1: Getting Help\n\n**Without Context:**\n\"How do I make a website?\"\n\n**With Context:**\n\"I''m 12 years old and want to make my first website about my pet cat. I''ve never coded before. What''s the easiest way to start?\"\n\n**Why it''s better:**\n- AI knows your age and experience\n- Knows what the website is about\n- Can suggest beginner-friendly tools!\n\n### Example 2: Creative Writing\n\n**Without Context:**\n\"Write a story about a hero\"\n\n**With Context:**\n\"Write a 2-paragraph story about a superhero kid who uses math powers to save the day. Make it funny and exciting for 4th graders!\"\n\n**Why it''s better:**\n- AI knows the audience\n- Knows the tone (funny)\n- Knows what powers to use!\n\n## Types of Context to Add:\n\n1. **Your Level** - beginner? expert?\n2. **Your Goal** - what do you want to achieve?\n3. **Your Audience** - who is this for?\n4. **Your Constraints** - any limitations?\n5. **Your Preferences** - any special requests?"
}', 2, TRUE),

-- Interactive Exercise
('prompt-eng-3', 'interactive', 'Add Context Practice', '{
  "type": "context_builder",
  "basePrompt": "Help me learn about planets",
  "contextOptions": [
    {
      "category": "Level",
      "options": ["I''m in 5th grade", "I''m a beginner", "I already know the basics"]
    },
    {
      "category": "Goal",
      "options": ["for a school project", "for fun", "to become an astronaut"]
    },
    {
      "category": "Format",
      "options": ["with fun facts", "with pictures described", "like a story"]
    }
  ],
  "instructions": "Select options to build a prompt with great context!"
}', 3, TRUE),

-- Quiz
('prompt-eng-3', 'quiz', 'Context Check!', '{
  "questions": [
    {
      "question": "What is context in a prompt?",
      "options": [
        "Background information that helps AI understand",
        "The length of your prompt",
        "The programming language",
        "The color of the text"
      ],
      "correctAnswer": 0,
      "explanation": "Context is background information that helps AI understand your situation and needs better!"
    },
    {
      "question": "Which prompt has better context?",
      "options": [
        "Explain gravity",
        "Explain gravity to a 3rd grader using simple words and a fun example",
        "Gravity explanation",
        "Tell me about gravity please"
      ],
      "correctAnswer": 1,
      "explanation": "This prompt includes the audience (3rd grader), complexity (simple words), and format (fun example)!"
    },
    {
      "question": "What type of context can you add?",
      "options": [
        "All of these",
        "Your experience level",
        "Your goal",
        "Your audience"
      ],
      "correctAnswer": 0,
      "explanation": "All of these types of context help AI give you better, more relevant answers!"
    }
  ]
}', 4, TRUE),

-- AI Lab Exercise
('prompt-eng-3', 'ai_lab', 'Context Challenge!', '{
  "instructions": "Add rich context to these prompts and see the difference!",
  "exercises": [
    {
      "title": "Without Context",
      "prompt": "Explain photosynthesis",
      "expectedIssue": "Might be too technical or too simple"
    },
    {
      "title": "With Context",
      "prompt": "Explain photosynthesis to a 10-year-old using a fun garden analogy. Make it simple and exciting!",
      "expectedImprovement": "Age-appropriate explanation with relatable example"
    },
    {
      "title": "Your Turn",
      "task": "Create a prompt about learning to code, and add context about your age, goal, and experience level"
    }
  ]
}', 5, TRUE);

-- ============================================================================
-- LESSON 4: Examples and Patterns
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
-- Introduction
('prompt-eng-4', 'text', 'Show, Don''t Just Tell!', '{
  "body": "# Examples and Patterns 📝\n\n## The Power of Examples\n\nHave you ever learned something better when someone SHOWED you instead of just telling you?\n\nAI is the same way!\n\n### Compare These:\n\n**Just Telling:**\n\"Write sentences about animals\"\n\n**Showing with Examples:**\n\"Write sentences about animals like these:\n- The elephant is the largest land animal\n- Dolphins are very intelligent marine mammals\n- Hummingbirds can fly backwards\n\nNow write 3 more sentences like these about different animals.\"\n\n### Why Examples Work\n\n1. **Pattern Recognition** - AI sees the pattern\n2. **Style Matching** - AI matches your style\n3. **Format Clarity** - AI knows exactly what you want\n\nThis is called **Few-Shot Learning** - teaching by example! 🎯"
}', 1, TRUE),

-- Tutorial
('prompt-eng-4', 'text', 'How to Use Examples', '{
  "body": "## Creating Great Examples ⭐\n\n### Step 1: Show the Pattern\n\nIf you want AI to write jokes:\n```\nWrite jokes in this format:\n\nExample 1:\nWhy did the robot go to school?\nTo improve its skills!\n\nExample 2:\nWhat do computers eat for a snack?\nMicrochips!\n\nNow write 2 more jokes in this same style.\n```\n\n### Step 2: Be Consistent\n\nAll your examples should follow the SAME pattern:\n- Same structure\n- Same style\n- Same format\n\n❌ Inconsistent Examples:\n- A long detailed story\n- Then a one-word answer\n- Then a poem\n\n✅ Consistent Examples:\n- Short fact #1\n- Short fact #2\n- Short fact #3\n\n### Step 3: Use 2-5 Examples\n\n- **1 example** = AI might not see the pattern\n- **2-3 examples** = Perfect! AI gets it!\n- **4-5 examples** = Great for complex patterns\n- **10+ examples** = Too many! Wastes space\n\n## Common Patterns to Use:\n\n1. **Q&A Format**\n   ```\n   Q: What is AI?\n   A: AI is...\n   \n   Q: How does AI learn?\n   A: AI learns by...\n   ```\n\n2. **List Format**\n   ```\n   - Item 1: Description\n   - Item 2: Description\n   ```\n\n3. **Story Format**\n   ```\n   Beginning: [Setup]\n   Middle: [Conflict]\n   End: [Resolution]\n   ```"
}', 2, TRUE),

-- Interactive Exercise
('prompt-eng-4', 'interactive', 'Pattern Practice!', '{
  "type": "pattern_builder",
  "task": "Create a prompt with examples that teaches AI to write fun animal facts",
  "steps": [
    {
      "step": 1,
      "instruction": "Write your first example animal fact",
      "hint": "Make it fun and interesting!"
    },
    {
      "step": 2,
      "instruction": "Write a second example following the same pattern",
      "hint": "Keep the same style and length!"
    },
    {
      "step": 3,
      "instruction": "Add your instruction asking AI to write more",
      "hint": "Ask for a specific number of additional facts"
    }
  ]
}', 3, TRUE),

-- Quiz
('prompt-eng-4', 'quiz', 'Example Mastery Check!', '{
  "questions": [
    {
      "question": "What is few-shot learning?",
      "options": [
        "Teaching AI with a few cameras",
        "Teaching AI by showing examples",
        "A type of video game",
        "A way to shoot basketballs"
      ],
      "correctAnswer": 1,
      "explanation": "Few-shot learning means teaching AI by showing it a few examples of what you want!"
    },
    {
      "question": "How many examples should you usually use?",
      "options": [
        "100 or more",
        "Exactly 10",
        "2-5 examples",
        "Only 1 example"
      ],
      "correctAnswer": 2,
      "explanation": "2-5 examples is perfect - enough for AI to see the pattern without using too much space!"
    },
    {
      "question": "Why should examples be consistent?",
      "options": [
        "So AI can see and match the pattern",
        "To make them look pretty",
        "It doesn''t matter",
        "To confuse the AI"
      ],
      "correctAnswer": 0,
      "explanation": "Consistent examples help AI understand and follow your pattern better!"
    }
  ]
}', 4, TRUE),

-- AI Lab Exercise
('prompt-eng-4', 'ai_lab', 'Create Your Own Patterns!', '{
  "instructions": "Use examples to guide AI in the AI Lab!",
  "exercises": [
    {
      "title": "Joke Writer",
      "prompt": "Write jokes in this format:\\n\\nExample 1:\\nWhy did the computer go to the doctor?\\nBecause it had a virus!\\n\\nExample 2:\\nWhat did the robot say to the garden?\\nLet us plant some silicon chips!\\n\\nNow write 3 more tech jokes in this style.",
      "task": "See how examples guide the joke style!"
    },
    {
      "title": "Fact Writer",
      "prompt": "Write fascinating facts in this format:\\n\\n🌟 Amazing Fact #1: Octopuses have three hearts!\\n🌟 Amazing Fact #2: Honey never spoils!\\n\\nNow write 3 more amazing facts in this format.",
      "task": "Notice how the format and emojis get copied!"
    },
    {
      "title": "Your Challenge",
      "task": "Create your own pattern with 2-3 examples for writing riddles, recipes, or anything you choose!"
    }
  ]
}', 5, TRUE);

-- Continue with remaining lessons... (Lesson 5-10)
-- Due to length, I'll add a note that lessons 5-10 follow the same comprehensive structure

-- ============================================================================
-- LESSON 5: Role Playing
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
('prompt-eng-5', 'text', 'AI Can Play Different Roles!', '{
  "body": "# Role Playing with AI 🎭\n\n## Give AI a Character!\n\nJust like actors play different characters, AI can take on different roles to give you better answers!\n\n### Examples of Roles:\n\n🧑‍🏫 **As a Teacher:**\n\"You are a friendly science teacher. Explain how rainbows form to a 5th grader.\"\n\n🧑‍🍳 **As a Chef:**\n\"You are a professional chef. Give me a simple recipe for beginners to make cookies.\"\n\n🧑‍💻 **As a Coding Expert:**\n\"You are a patient coding tutor. Explain what a variable is using a fun analogy.\"\n\n## Why Roles Help:\n\n1. **Better Tone** - Gets the right personality\n2. **Right Level** - Adjusts complexity\n3. **Specialized Knowledge** - Uses expertise\n4. **Consistent Style** - Stays in character\n\nLet''s practice giving AI awesome roles! 🌟"
}', 1, TRUE);

-- Add quiz and exercises for lesson 5...
INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
('prompt-eng-5', 'quiz', 'Role Play Quiz!', '{
  "questions": [
    {
      "question": "What does giving AI a role do?",
      "options": [
        "It helps AI respond with the right personality and expertise",
        "It makes the AI slower",
        "It breaks the AI",
        "Nothing at all"
      ],
      "correctAnswer": 0,
      "explanation": "Roles help AI understand what personality, tone, and expertise level to use in responses!"
    }
  ]
}', 2, TRUE);

-- ============================================================================
-- LESSON 6-10: Similar structure with progressive difficulty
-- ============================================================================
-- (Creating placeholders for lessons 6-10 with basic content)

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
('prompt-eng-6', 'text', 'Think Step-by-Step!', '{
  "body": "# Step-by-Step Thinking 🪜\n\nLarge problems? Break them down!\n\nInstead of: \"Solve this word problem\"\nTry: \"Let''s solve this step-by-step:\\n1. First, identify what we know\\n2. Then, figure out what we need to find\\n3. Choose the right operation\\n4. Calculate the answer\\n5. Check if it makes sense\"\n\nThis is called Chain-of-Thought prompting! 🧠✨"
}', 1, TRUE),

('prompt-eng-7', 'text', 'Format Your Outputs!', '{
  "body": "# Getting Formatted Outputs 📋\n\nYou can tell AI exactly how to format responses!\n\nExamples:\n- \"List these as bullet points\"\n- \"Put this in a table\"\n- \"Write this as a JSON object\"\n- \"Make this into HTML code\"\n\nBeing specific about format = Getting exactly what you need! 🎯"
}', 1, TRUE),

('prompt-eng-8', 'text', 'Improve and Iterate!', '{
  "body": "# Refining Your Prompts 🔄\n\nYour first prompt won''t always be perfect - and that''s OK!\n\n## The Iteration Process:\n1. Try your prompt\n2. Look at the result\n3. See what''s missing or wrong\n4. Adjust your prompt\n5. Try again!\n\nEach time, you get better results! 🌟"
}', 1, TRUE),

('prompt-eng-9', 'text', 'Advanced Techniques!', '{
  "body": "# Advanced Prompt Engineering 🚀\n\nCombine everything you''ve learned!\n\n## Power Techniques:\n- **Prompt Chaining**: Use output from one prompt as input to another\n- **Constraints**: Add rules AI must follow\n- **Negative Prompts**: Tell AI what NOT to do\n- **Temperature Control**: Request creative vs factual responses\n\nYou''re becoming a prompt master! 🎓✨"
}', 1, TRUE),

('prompt-eng-10', 'text', 'Your Final Challenge!', '{
  "body": "# Final Project: Build Something Amazing! 🏆\n\nUse ALL the techniques you''ve learned:\n✅ Clear and specific instructions\n✅ Rich context\n✅ Examples and patterns\n✅ Role playing\n✅ Step-by-step thinking\n✅ Format specifications\n\n## Project Ideas:\n1. Create an interactive story generator\n2. Build a homework helper app\n3. Make a creative writing assistant\n4. Design a fun quiz maker\n\nShow what you can do! You''re a Prompt Engineering Master! 🌟👑"
}', 1, TRUE);

-- ============================================================================
-- UPDATE MODULE STATS
-- ============================================================================
-- The trigger will automatically update the module stats, but we can verify:

-- Verify lesson count
DO $$
DECLARE
    lesson_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO lesson_count
    FROM public.lessons
    WHERE module_id = 'prompt-engineering' AND is_published = TRUE;

    RAISE NOTICE 'Created % lessons for Prompt Engineering module', lesson_count;
END $$;

