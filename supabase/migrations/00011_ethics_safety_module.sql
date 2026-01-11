-- Ethics & Safety AI Module - Complete Content
-- Description: Complete lessons and content for the Ethics & Safety AI module
-- Date: 2026-01-11

-- ============================================================================
-- ETHICS & SAFETY AI LESSONS
-- ============================================================================

INSERT INTO public.lessons (id, module_id, title, description, lesson_number, display_order, estimated_duration_minutes, difficulty, is_published, is_locked_by_default, learning_objectives) VALUES
('ethics-1', 'ethics-safety', 'What is AI Ethics?', 'Understand why ethics matter in AI', 1, 1, 15, 'beginner', TRUE, FALSE, ARRAY['Define AI ethics', 'Understand why ethics matter', 'Recognize ethical questions']),
('ethics-2', 'ethics-safety', 'Fairness and Bias', 'Learn how AI can be fair or unfair', 2, 2, 20, 'intermediate', TRUE, FALSE, ARRAY['Understand AI bias', 'Recognize unfair outcomes', 'Learn about fairness']),
('ethics-3', 'ethics-safety', 'Privacy Matters', 'Protect your data and privacy', 3, 3, 20, 'intermediate', TRUE, FALSE, ARRAY['Understand data privacy', 'Learn to protect information', 'Make safe choices online']),
('ethics-4', 'ethics-safety', 'AI and Truth', 'Understanding misinformation and deepfakes', 4, 4, 20, 'intermediate', TRUE, TRUE, ARRAY['Identify misinformation', 'Understand deepfakes', 'Verify information']),
('ethics-5', 'ethics-safety', 'Responsible AI Use', 'Using AI in helpful ways', 5, 5, 20, 'intermediate', TRUE, TRUE, ARRAY['Use AI responsibly', 'Make ethical choices', 'Help others safely']),
('ethics-6', 'ethics-safety', 'AI and Environment', 'How AI affects our planet', 6, 6, 15, 'intermediate', TRUE, TRUE, ARRAY['Understand AI energy use', 'Learn about sustainability', 'Make eco-friendly choices']),
('ethics-7', 'ethics-safety', 'Future of AI', 'Preparing for an AI-powered world', 7, 7, 20, 'intermediate', TRUE, TRUE, ARRAY['Envision AI future', 'Understand opportunities', 'Prepare for changes']),
('ethics-8', 'ethics-safety', 'Be an AI Guardian', 'Your commitment to safe and ethical AI', 8, 8, 20, 'intermediate', TRUE, TRUE, ARRAY['Create ethical guidelines', 'Make a commitment', 'Lead by example']);

-- ============================================================================
-- LESSON 1: What is AI Ethics?
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
-- Introduction
('ethics-1', 'text', 'Welcome to Ethics & Safety!', '{
  "body": "# Welcome, Future AI Guardian! 🛡️\n\nYou''re about to learn something super important: how to use AI in **safe, fair, and responsible** ways!\n\n## What is Ethics?\n\n**Ethics** means knowing the difference between right and wrong, and choosing to do the right thing.\n\n### Think About It:\n- Is it okay to copy someone''s homework? ❌\n- Should you share your friend''s secrets? ❌\n- Is it good to help someone in need? ✅\n\nThese are **ethical questions** - and AI has them too!\n\n## Why Does AI Need Ethics?\n\nAI is powerful! With great power comes great responsibility 🦸\n\nJust like superheroes need to use their powers for good, we need to use AI in ways that:\n- ✅ Help people\n- ✅ Are fair to everyone\n- ✅ Keep people safe\n- ✅ Respect privacy\n- ✅ Tell the truth\n\nLet''s learn how to be ethical AI users! 🌟"
}', 1, TRUE),

-- Examples
('ethics-1', 'text', 'Ethics in Everyday Life', '{
  "body": "## AI Ethics in Real Life 🌍\n\n### Example 1: The Homework Helper\n\n**Scenario:** You have a tough math problem for homework.\n\n❌ **Unethical Choice:**\n- Ask AI to do ALL your homework\n- Copy the answer without understanding\n- Pretend it''s your own work\n\n✅ **Ethical Choice:**\n- Ask AI to EXPLAIN the concept\n- Work through the problem yourself\n- Use AI as a tutor, not a cheat!\n\n### Example 2: The Photo Editor\n\n**Scenario:** You have a photo editing app with AI.\n\n❌ **Unethical Choice:**\n- Change someone''s face without permission\n- Make fake photos to trick people\n- Post edited photos claiming they''re real\n\n✅ **Ethical Choice:**\n- Only edit your own photos (with permission)\n- Be honest about what''s been edited\n- Respect others'' images and privacy\n\n### Example 3: The Chatbot Friend\n\n**Scenario:** You''re talking to an AI chatbot.\n\n❌ **Unethical Choice:**\n- Try to trick it into saying mean things\n- Use it to write messages to bully someone\n- Share other people''s private information\n\n✅ **Ethical Choice:**\n- Use it for learning and fun\n- Be kind and respectful\n- Keep private information private\n\n## The Golden Rule of AI Ethics\n\n**Use AI the way you''d want others to use it around you!** 💛\n\nWould you want someone to:\n- Use AI to cheat on your work? No!\n- Fake photos of you? No!\n- Share your secrets? No!\n\nSo don''t do those things either! 🎯"
}', 2, TRUE),

-- Interactive Exercise
('ethics-1', 'interactive', 'Ethical or Unethical?', '{
  "type": "scenario_quiz",
  "instructions": "Decide if each situation is ethical or unethical!",
  "scenarios": [
    {
      "scenario": "Using AI to help understand your science homework",
      "correct": "ethical",
      "explanation": "Using AI as a learning tool is great! You''re trying to understand, not just copy."
    },
    {
      "scenario": "Asking AI to write your entire essay and turning it in as your work",
      "correct": "unethical",
      "explanation": "This is cheating! You should write your own work and use AI for help, not to do it for you."
    },
    {
      "scenario": "Using AI to create fun art for a school project",
      "correct": "ethical",
      "explanation": "Creating art with AI is creative and fun! Just make sure to say AI helped you make it."
    },
    {
      "scenario": "Using AI to generate mean messages about classmates",
      "correct": "unethical",
      "explanation": "This is cyberbullying! AI should never be used to hurt others."
    }
  ]
}', 3, TRUE),

-- Quiz
('ethics-1', 'quiz', 'Ethics Check!', '{
  "questions": [
    {
      "question": "What does ethics mean?",
      "options": [
        "Knowing right from wrong and choosing to do right",
        "Using the newest technology",
        "Being the smartest person",
        "Winning at everything"
      ],
      "correctAnswer": 0,
      "explanation": "Ethics is about understanding what''s right and wrong, and making good choices!"
    },
    {
      "question": "Why does AI need ethics?",
      "options": [
        "To make it work faster",
        "To make it more colorful",
        "Because AI is powerful and we need to use it responsibly",
        "AI doesn''t need ethics"
      ],
      "correctAnswer": 2,
      "explanation": "AI is very powerful, so we need to use it in ways that help people and don''t cause harm!"
    },
    {
      "question": "What''s an ethical way to use AI for homework?",
      "options": [
        "Copy all the answers AI gives you",
        "Use AI to explain concepts so you can learn",
        "Let AI do all your work",
        "Share AI answers with the whole class"
      ],
      "correctAnswer": 1,
      "explanation": "Using AI as a tutor to help you learn is ethical - copying answers is not!"
    }
  ]
}', 4, TRUE),

-- AI Lab Exercise
('ethics-1', 'ai_lab', 'Practice Ethical AI Use', '{
  "instructions": "Try these ethical AI interactions in the AI Lab!",
  "exercises": [
    {
      "title": "Learning Helper",
      "prompt": "Can you explain how photosynthesis works in simple terms? I want to understand it for my test.",
      "why_ethical": "You''re asking AI to help you LEARN, not just give you answers!"
    },
    {
      "title": "Creative Partner",
      "prompt": "Help me brainstorm ideas for a story about a friendly robot. I''ll write it myself!",
      "why_ethical": "You''re using AI for inspiration but doing your own creative work!"
    },
    {
      "title": "Problem Solver",
      "prompt": "I don''t understand this math problem. Can you show me the steps to solve it?",
      "why_ethical": "You''re asking to understand the process, not just get the answer!"
    }
  ]
}', 5, TRUE);

-- ============================================================================
-- LESSON 2: Fairness and Bias
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
-- Introduction
('ethics-2', 'text', 'Understanding Fairness in AI', '{
  "body": "# Fairness and Bias ⚖️\n\n## What is Fairness?\n\nImagine you''re picking teams for a game. Would it be fair to:\n- Always pick the same people?\n- Never give some kids a chance?\n- Choose based on who you like, not who can play?\n\nNo! That wouldn''t be fair! 😔\n\n**Fairness** means treating everyone equally and giving everyone a fair chance.\n\n## What is Bias?\n\n**Bias** means favoring one thing over another, even when it''s not fair.\n\n### Real-Life Example:\n\n🍎 **Scenario:** A teacher only calls on boys in math class, thinking girls aren''t good at math.\n\n❌ **This is bias!** Girls can be just as good at math!\n\n## Can AI Be Biased?\n\nYes! And here''s why:\n\n1. **AI learns from data** 📊\n2. **If the data is biased, AI learns the bias** 😕\n3. **Then AI makes biased decisions** ❌\n\n### Example of AI Bias:\n\nImagine an AI that looks at photos and guesses jobs:\n- Sees a doctor → always guesses \"man\"\n- Sees a nurse → always guesses \"woman\"\n\nThis is **biased**! Doctors and nurses can be any gender! 👨‍⚕️👩‍⚕️\n\n## Why Fairness Matters\n\nUnfair AI can:\n- ❌ Make wrong decisions about people\n- ❌ Treat some people worse than others\n- ❌ Spread unfair ideas\n\nFair AI can:\n- ✅ Help everyone equally\n- ✅ Make better decisions\n- ✅ Create a more just world\n\nLet''s learn to recognize and fight bias! 💪"
}', 1, TRUE),

-- Examples
('ethics-2', 'text', 'Spotting Bias in AI', '{
  "body": "## How to Spot Bias 🔍\n\n### Example 1: The Job Recommender\n\n**AI System:** Career recommendation tool\n\n❌ **Biased Behavior:**\n- Suggests nursing only to girls\n- Suggests engineering only to boys\n- Based on outdated stereotypes\n\n✅ **Fair Behavior:**\n- Suggests careers based on interests and skills\n- Shows ALL options to ALL students\n- Doesn''t assume based on gender\n\n### Example 2: The Face Recognition\n\n**AI System:** Photo identification\n\n❌ **Biased Behavior:**\n- Works well on some skin tones\n- Fails on others\n- Trained on non-diverse data\n\n✅ **Fair Behavior:**\n- Works equally well for everyone\n- Trained on diverse faces\n- Tested on all groups\n\n### Example 3: The Language Assistant\n\n**AI System:** Auto-complete or translation\n\n❌ **Biased Behavior:**\n- Assumes \"programmer\" is male\n- Translates \"doctor\" as \"he\"\n- Makes gender assumptions\n\n✅ **Fair Behavior:**\n- Doesn''t assume gender\n- Uses inclusive language\n- Respects all people equally\n\n## Questions to Ask:\n\nWhen using AI, think:\n\n1. **Does it work for everyone?** 🌍\n2. **Does it make assumptions?** 🤔\n3. **Would I be happy if it treated ME this way?** 💭\n4. **Could it hurt or exclude someone?** 😔\n\nIf you answered \"no\" or \"yes\" to #4, the AI might be biased!\n\n## What Can YOU Do?\n\n✅ **Notice bias when you see it**\n✅ **Speak up about unfairness**\n✅ **Don''t spread biased AI tools**\n✅ **Support fair and inclusive AI**\n✅ **Learn to build better AI yourself!**\n\nYou can help make AI fairer! 🌟"
}', 2, TRUE),

-- Interactive Exercise
('ethics-2', 'interactive', 'Bias Detective!', '{
  "type": "bias_identification",
  "instructions": "Read each scenario and identify if the AI is showing bias!",
  "scenarios": [
    {
      "scenario": "An AI game always makes the hero a boy and the helper a girl.",
      "question": "Is this biased?",
      "answer": "yes",
      "explanation": "Yes! This is gender bias. Heroes and helpers can be any gender!",
      "fix": "Let players choose their character''s gender, or alternate between different heroes!"
    },
    {
      "scenario": "A voice assistant only understands American accents well.",
      "question": "Is this biased?",
      "answer": "yes",
      "explanation": "Yes! This is accent/language bias. It should work for everyone, no matter how they speak!",
      "fix": "Train the AI on diverse accents and languages from around the world!"
    },
    {
      "scenario": "An art AI creates images of people of all ages, genders, and backgrounds.",
      "question": "Is this biased?",
      "answer": "no",
      "explanation": "No! This AI is being fair and inclusive by representing everyone!",
      "praise": "This is how AI should work - fairly for all people!"
    }
  ]
}', 3, TRUE),

-- Quiz
('ethics-2', 'quiz', 'Fairness Quiz!', '{
  "questions": [
    {
      "question": "What is bias?",
      "options": [
        "Favoring one thing over another unfairly",
        "Being very smart",
        "Using new technology",
        "Playing video games"
      ],
      "correctAnswer": 0,
      "explanation": "Bias means treating some things or people better than others, even when it''s not fair!"
    },
    {
      "question": "How does AI become biased?",
      "options": [
        "It''s naturally mean",
        "It learns from biased data",
        "Someone programs it to be mean",
        "It can''t become biased"
      ],
      "correctAnswer": 1,
      "explanation": "AI learns from data, so if the data contains bias, the AI will learn that bias too!"
    },
    {
      "question": "What can you do if you notice biased AI?",
      "options": [
        "Ignore it",
        "Use it anyway",
        "Speak up and don''t spread it",
        "Nothing can be done"
      ],
      "correctAnswer": 2,
      "explanation": "You can make a difference by noticing bias, speaking up about it, and not spreading biased AI!"
    },
    {
      "question": "Fair AI should:",
      "options": [
        "Work well for everyone",
        "Only work for some people",
        "Make assumptions about people",
        "Be hard to use"
      ],
      "correctAnswer": 0,
      "explanation": "Fair AI works equally well for everyone, no matter who they are!"
    }
  ]
}', 4, TRUE),

-- AI Lab Exercise
('ethics-2', 'ai_lab', 'Testing for Fairness', '{
  "instructions": "Try these prompts and think about fairness!",
  "exercises": [
    {
      "title": "Inclusive Descriptions",
      "prompt": "Describe 5 different scientists. Make sure they come from different backgrounds and genders.",
      "goal": "See if AI can create diverse, inclusive content"
    },
    {
      "title": "Fair Career Advice",
      "prompt": "I''m interested in both art and science. What careers could combine both? Don''t assume my gender.",
      "goal": "Check if AI gives unbiased career suggestions"
    },
    {
      "title": "Diverse Stories",
      "prompt": "Write a short story about a brave hero. The hero can be any age, gender, or background.",
      "goal": "See if AI creates diverse representation"
    }
  ]
}', 5, TRUE);

-- ============================================================================
-- LESSON 3: Privacy Matters
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
-- Introduction
('ethics-3', 'text', 'Your Privacy is Important!', '{
  "body": "# Privacy Matters 🔐\n\n## What is Privacy?\n\n**Privacy** means:\n- Keeping your personal stuff personal 🏠\n- Deciding who knows what about you 🤫\n- Being safe with your information 🛡️\n\n### Think About It:\n\nWould you:\n- Let a stranger read your diary? ❌\n- Give your house key to anyone? ❌\n- Tell everyone your secrets? ❌\n\nNo! Because those things are **private**!\n\n## What is Personal Data?\n\n**Personal data** is information about YOU:\n\n🔴 **Very Private** (NEVER share):\n- Your home address\n- Phone numbers\n- Passwords\n- Social security number\n- Where you go to school\n- Your exact location\n\n🟡 **Sort of Private** (be careful):\n- Your full name\n- Your age\n- Your photo\n- Your city/town\n- Your hobbies\n\n🟢 **Less Private** (usually okay):\n- Your favorite color\n- Favorite food\n- Favorite game\n\n## Why Does AI Need Your Data?\n\nAI uses data to:\n- Learn and get smarter 🧠\n- Give you personalized results 🎯\n- Improve over time 📈\n\nBut **you should know what data AI collects!** 🔍\n\n## The Privacy Problem\n\nWhen you use AI:\n- 💬 It might remember what you say\n- 📸 It might save your photos\n- 📍 It might track where you are\n- 🔍 It might learn your habits\n\nThis data could:\n- ✅ Help AI work better for you\n- ❌ Be shared with others without your knowledge\n- ❌ Be used for advertising\n- ❌ Be stolen by hackers\n\nThat''s why **privacy matters**! 🎯"
}', 1, TRUE),

-- Privacy Tips
('ethics-3', 'text', 'How to Protect Your Privacy', '{
  "body": "## Privacy Protection Rules 🛡️\n\n### Rule #1: Think Before You Share\n\n**Before giving AI any information, ask:**\n1. Does it REALLY need this? 🤔\n2. What will it do with this info? 🔍\n3. Could this hurt me if it got out? 😰\n4. Would I tell this to a stranger? 🚫\n\nIf you''re not sure, **DON''T SHARE!**\n\n### Rule #2: Use AI Safely\n\n✅ **DO:**\n- Use AI for homework help (general questions)\n- Create fun art and stories\n- Learn new things\n- Play educational games\n\n❌ **DON''T:**\n- Share your full name, address, or phone\n- Upload photos with your face (without parent permission)\n- Tell AI your password (NEVER!)\n- Share your location\n- Give away friends'' or family''s information\n\n### Rule #3: Read Before You Click\n\nWhen using a new AI:\n- 📄 Read what data it collects (or ask a parent)\n- ⚙️ Check privacy settings\n- 🔒 Look for HTTPS (secure connection)\n- 👨‍👩‍👧 Ask a parent if you''re unsure\n\n### Rule #4: Create Smart Passwords\n\nFor AI accounts:\n- ✅ Use different passwords for different sites\n- ✅ Make them long and random\n- ✅ Include numbers and symbols\n- ❌ Never share passwords\n- ❌ Don''t use your name or birthday\n\nExample GOOD password: `Tr3e$Blue#89Robot`\n\nExample BAD password: `yourname123`\n\n### Rule #5: The Parent Rule\n\n**Always ask a parent or trusted adult before:**\n- Signing up for new AI services\n- Sharing photos or videos\n- Giving personal information\n- Downloading AI apps\n\nThey can help keep you safe! 👨‍👩‍👧‍👦\n\n## What If Something Goes Wrong?\n\n**If AI asks for weird info or makes you uncomfortable:**\n1. ❌ STOP using it\n2. 💬 Tell a parent or teacher RIGHT AWAY\n3. 📸 Take a screenshot if needed\n4. 🚫 Don''t share what it asked for\n\n**You have the right to be safe online!** 🌟"
}', 2, TRUE),

-- Interactive Exercise
('ethics-3', 'interactive', 'Privacy Checker!', '{
  "type": "safe_or_unsafe",
  "instructions": "Decide if it''s safe to share each piece of information with AI!",
  "items": [
    {
      "item": "Your home address",
      "answer": "unsafe",
      "explanation": "NEVER share your address! This is private information that could put you in danger."
    },
    {
      "item": "Your favorite color",
      "answer": "safe",
      "explanation": "This is harmless information that''s okay to share!"
    },
    {
      "item": "Your school password",
      "answer": "unsafe",
      "explanation": "NEVER share passwords with anyone, not even AI! Passwords should be secret."
    },
    {
      "item": "A story idea you have",
      "answer": "safe",
      "explanation": "Sharing creative ideas with AI is fine and can be fun!"
    },
    {
      "item": "Your phone number",
      "answer": "unsafe",
      "explanation": "Phone numbers are private! Don''t share them unless a parent says it''s okay."
    },
    {
      "item": "Your favorite animal",
      "answer": "safe",
      "explanation": "This is a fun, harmless fact that''s okay to share!"
    }
  ]
}', 3, TRUE),

-- Quiz
('ethics-3', 'quiz', 'Privacy Knowledge Check!', '{
  "questions": [
    {
      "question": "What is personal data?",
      "options": [
        "Information about you",
        "Your computer files",
        "Your favorite games",
        "Math homework"
      ],
      "correctAnswer": 0,
      "explanation": "Personal data is any information that identifies or describes you!"
    },
    {
      "question": "Should you share your password with AI?",
      "options": [
        "Yes, it needs it to work",
        "Only if it asks nicely",
        "NEVER! Passwords should always be secret",
        "Sometimes"
      ],
      "correctAnswer": 2,
      "explanation": "NEVER share passwords with anyone, including AI! They should always stay secret."
    },
    {
      "question": "Before sharing info with AI, you should:",
      "options": [
        "Just share everything",
        "Think about whether it''s safe and necessary",
        "Share without thinking",
        "Ask your friends"
      ],
      "correctAnswer": 1,
      "explanation": "Always think before sharing! Ask yourself if it''s safe and if the AI really needs that information."
    },
    {
      "question": "If AI asks for weird personal information, you should:",
      "options": [
        "Share it anyway",
        "Stop and tell a parent or teacher",
        "Ignore it and keep using it",
        "Share it with friends first"
      ],
      "correctAnswer": 1,
      "explanation": "If something feels wrong, stop immediately and tell a trusted adult!"
    }
  ]
}', 4, TRUE),

-- AI Lab Exercise
('ethics-3', 'ai_lab', 'Safe AI Practice', '{
  "instructions": "Practice using AI safely! Notice these prompts DON''T include private info.",
  "exercises": [
    {
      "title": "Safe Learning",
      "prompt": "Can you explain how plants grow? I''m curious about biology!",
      "why_safe": "This shares your interest in learning but no personal information!"
    },
    {
      "title": "Creative Fun",
      "prompt": "Help me write a story about a space explorer. They can be any age!",
      "why_safe": "Creative prompts are fun and don''t require personal data!"
    },
    {
      "title": "General Questions",
      "prompt": "What are some fun hobbies for kids my age?",
      "why_safe": "General questions are safe - you''re not sharing specific personal details!"
    }
  ],
  "remember": "Notice how you can use AI without sharing private information! 🎯"
}', 5, TRUE);

-- ============================================================================
-- LESSON 4: AI and Truth
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
('ethics-4', 'text', 'Truth in the Age of AI', '{
  "body": "# AI and Truth 🔍✨\n\n## Can AI Lie?\n\nAI doesn''t lie on purpose (it''s not trying to trick you!), but:\n- ❌ It can share wrong information\n- ❌ It can create fake content\n- ❌ It can be VERY convincing even when wrong!\n\n## What is Misinformation?\n\n**Misinformation** = False or wrong information\n\n**Disinformation** = Fake info spread ON PURPOSE to trick people\n\n### Examples:\n- 🤖 AI generates a fake news article\n- 📸 AI creates a fake photo\n- 🎥 AI makes a fake video (deepfake)\n- 💬 AI writes false facts convincingly\n\n## What are Deepfakes?\n\n**Deepfakes** are AI-generated videos or images that look REAL but are FAKE!\n\n### How They Work:\n1. AI studies real videos of a person\n2. Learns their face and voice\n3. Creates NEW fake videos\n4. Makes it look like they said/did things they never did!\n\n### The Danger:\n- 😰 Can spread false information\n- 😔 Can damage reputations\n- 😡 Can be used for bullying\n- 🗳️ Can influence elections\n\n## Why This Matters\n\nIn a world with AI:\n- You can''t always trust what you see 👀\n- Videos and photos can be fake 📸\n- You need to verify information ✅\n- Critical thinking is MORE important than ever! 🧠"
}', 1, TRUE),

('ethics-4', 'text', 'Detecting Misinformation', '{
  "body": "## How to Spot Fake Information 🕵️\n\n### The TRUTH Checklist:\n\n✅ **T = Trusted Source?**\n- Who created this?\n- Is the source reliable?\n- Do experts trust it?\n\n✅ **R = Recently Created?**\n- When was it made?\n- Is the information up-to-date?\n- Has it been debunked?\n\n✅ **U = Unusual or Too Perfect?**\n- Does it seem too good/bad to be true?\n- Are faces or scenes weirdly perfect?\n- Do movements look unnatural?\n\n✅ **T = Think Critically**\n- Does this make sense?\n- What''s the evidence?\n- Am I being manipulated emotionally?\n\n✅ **H = Has It Been Verified?**\n- Can I find this on trusted news sites?\n- Do multiple sources confirm it?\n- What do fact-checkers say?\n\n### Deepfake Warning Signs:\n\n🚩 **Look for:**\n- Weird blinking or no blinking\n- Face edges that look blurry\n- Mismatched lighting\n- Lips not matching words perfectly\n- Strange background details\n- Audio that doesn''t match movements\n\n### What To Do:\n\n1. **Pause** before believing or sharing 🛑\n2. **Verify** with trusted sources ✅\n3. **Ask** an adult if unsure 👨‍👩‍👧\n4. **Don''t share** if you''re not sure it''s real 🚫\n5. **Report** fake content that could harm people 📢\n\n## Remember:\n\nJust because something LOOKS real doesn''t mean it IS real! 🎭\n\nYou have the power to stop misinformation by thinking critically! 🧠"
}', 2, TRUE),

('ethics-4', 'interactive', 'Real or Fake?', '{
  "type": "verification_game",
  "instructions": "Decide if each scenario describes real or AI-generated (fake) content!",
  "scenarios": [
    {
      "scenario": "A video shows a famous person saying something controversial. The lighting on their face doesn''t match the background, and their lips seem slightly off.",
      "question": "Is this likely real or fake?",
      "answer": "fake",
      "explanation": "These are classic deepfake warning signs! Mismatched lighting and lip-sync issues suggest AI manipulation.",
      "lesson": "Always check for these visual clues before believing videos!"
    },
    {
      "scenario": "A news article from a trusted website (like BBC or Reuters) reports on a scientific discovery. Other major news sites also cover the same story.",
      "question": "Is this likely real or fake?",
      "answer": "real",
      "explanation": "Multiple trusted sources confirming the same story is a good sign it''s real!",
      "lesson": "Verification across multiple credible sources helps confirm truth!"
    },
    {
      "scenario": "An AI-generated image shows a perfect rainbow-colored puppy that looks too perfect and colorful to be real.",
      "question": "Is this likely real or fake?",
      "answer": "fake",
      "explanation": "If something looks impossibly perfect or too good to be true, it probably is! AI-generated images often have this quality.",
      "lesson": "Use common sense - does this look naturally possible?"
    },
    {
      "scenario": "A social media post claims a celebrity did something shocking, but no major news outlets are reporting it and the image quality is poor.",
      "question": "Is this likely real or fake?",
      "answer": "fake",
      "explanation": "Real major events get covered by news outlets. If only random social media accounts report it, be suspicious!",
      "lesson": "Check if reputable sources confirm the information!"
    }
  ]
}', 3, TRUE),

('ethics-4', 'quiz', 'Truth & Misinformation Quiz!', '{
  "questions": [
    {
      "question": "What is a deepfake?",
      "options": [
        "A very deep swimming pool",
        "AI-generated fake video or image that looks real",
        "A type of video game",
        "A photography filter"
      ],
      "correctAnswer": 1,
      "explanation": "Deepfakes are AI-created videos or images that look real but are completely fake or manipulated!"
    },
    {
      "question": "Before sharing a shocking video or image, you should:",
      "options": [
        "Share it immediately so everyone knows",
        "Verify if it''s real using trusted sources",
        "Add your own caption and share",
        "Send it to all your friends first"
      ],
      "correctAnswer": 1,
      "explanation": "Always verify information before sharing! You don''t want to spread misinformation."
    },
    {
      "question": "Which is a warning sign of a deepfake video?",
      "options": [
        "Perfect, high-quality footage",
        "Lips not matching words perfectly",
        "Bright colors",
        "Multiple people in the video"
      ],
      "correctAnswer": 1,
      "explanation": "Mismatched lip movements are a common deepfake giveaway! AI struggles to perfectly sync speech."
    },
    {
      "question": "If you''re not sure if information is real, you should:",
      "options": [
        "Believe it anyway",
        "Share it to see what others think",
        "Ask a trusted adult or check fact-checking websites",
        "Ignore it completely"
      ],
      "correctAnswer": 2,
      "explanation": "When in doubt, verify! Ask adults or use trusted fact-checking resources."
    },
    {
      "question": "AI-generated misinformation can:",
      "options": [
        "Only fool experts",
        "Never look real",
        "Be very convincing and fool many people",
        "Only exist in movies"
      ],
      "correctAnswer": 2,
      "explanation": "Modern AI can create very convincing fake content! That''s why critical thinking is so important."
    }
  ]
}', 4, TRUE),

('ethics-4', 'ai_lab', 'Fact-Checking Practice', '{
  "instructions": "Practice critical thinking with AI! Try these fact-checking exercises.",
  "exercises": [
    {
      "title": "Verify Claims",
      "prompt": "If I read that ''scientists discovered dogs can fly,'' how should I verify if this is true? What steps should I take?",
      "goal": "Learn the process of fact-checking and verification"
    },
    {
      "title": "Identify Credible Sources",
      "prompt": "What makes a news source trustworthy? Give me examples of credible sources for science news.",
      "goal": "Understand what makes sources reliable"
    },
    {
      "title": "Deepfake Awareness",
      "prompt": "What are the warning signs I should look for to identify a deepfake video?",
      "goal": "Learn to spot manipulated media"
    },
    {
      "title": "Critical Thinking",
      "prompt": "I saw a shocking headline on social media. Walk me through the steps I should take before believing or sharing it.",
      "goal": "Develop a critical thinking process for information"
    }
  ],
  "remember": "Always verify before you trust! 🔍"
}', 5, TRUE);

-- ============================================================================
-- LESSON 5: Responsible AI Use
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
('ethics-5', 'text', 'Using AI Responsibly', '{
  "body": "# Responsible AI Use 🌟\n\n## What Does ''Responsible'' Mean?\n\n**Responsible** = Making good choices and thinking about how your actions affect others.\n\n### Examples:\n- 🐕 Being responsible with a pet = feeding it, caring for it\n- 📚 Being responsible with homework = doing it yourself, on time\n- 🤖 Being responsible with AI = using it ethically and safely!\n\n## The AI Responsibility Code\n\n### ✅ DO Use AI To:\n\n**1. Learn and Grow** 📚\n- Understand difficult concepts\n- Explore new subjects\n- Practice skills\n- Ask questions\n\n**2. Create Positively** 🎨\n- Make art and stories\n- Solve problems\n- Build cool projects\n- Express yourself\n\n**3. Help Others** 🤝\n- Tutor friends (with your knowledge)\n- Create helpful content\n- Make accessible tools\n- Spread kindness\n\n**4. Give Proper Credit** 🏆\n- Say when AI helped you\n- Don''t claim AI work as 100% yours\n- Be honest about your process\n- Respect AI as a tool, not a substitute for your thinking\n\n### ❌ DON''T Use AI To:\n\n**1. Cheat or Deceive** 🚫\n- Do all your homework\n- Pretend you did work you didn''t\n- Trick teachers or parents\n- Fake your abilities\n\n**2. Harm or Bully** 😢\n- Create mean messages\n- Make fake content about people\n- Spread rumors\n- Hurt feelings\n\n**3. Break Rules** ⚠️\n- Bypass safety restrictions\n- Access blocked content\n- Violate terms of service\n- Do illegal activities\n\n**4. Spread Misinformation** 📰\n- Create fake news\n- Generate false facts\n- Manipulate others\n- Confuse people intentionally"
}', 1, TRUE),

('ethics-5', 'text', 'Real-Life Responsibility Scenarios', '{
  "body": "## Making Responsible Choices 🎯\n\n### Scenario 1: The Book Report\n\n**Situation:** You have a book report due tomorrow and haven''t started.\n\n❌ **Irresponsible Choice:**\n- Ask AI to write the entire report\n- Copy it word-for-word\n- Turn it in as your work\n- **Result:** You cheated, learned nothing, and could get in trouble!\n\n✅ **Responsible Choice:**\n- Ask AI for help understanding themes\n- Use AI to organize your thoughts\n- Write the report yourself with AI as a helper\n- **Result:** You learned, did honest work, and improved your skills!\n\n### Scenario 2: The Group Project\n\n**Situation:** Your group is making a presentation with AI-generated images.\n\n❌ **Irresponsible Choice:**\n- Use AI images without telling your teacher\n- Claim you drew everything yourself\n- Don''t credit the AI tool\n- **Result:** Dishonest and unfair to teammates!\n\n✅ **Responsible Choice:**\n- Tell your teacher you''re using AI\n- Credit the AI tool in your presentation\n- Explain how you used it\n- **Result:** Honest, transparent, and educational!\n\n### Scenario 3: The Social Media Post\n\n**Situation:** You want to post something funny using AI.\n\n❌ **Irresponsible Choice:**\n- Generate a fake embarrassing photo of a classmate\n- Post it without their permission\n- Let people think it''s real\n- **Result:** Cyberbullying and violation of privacy!\n\n✅ **Responsible Choice:**\n- Create funny, harmless content\n- Get permission if using anyone''s likeness\n- Be clear when content is AI-generated\n- **Result:** Fun, ethical, and respectful!\n\n### Scenario 4: The Homework Help\n\n**Situation:** A friend asks you to help them with math.\n\n❌ **Irresponsible Choice:**\n- Just give them AI-generated answers\n- Let them copy without understanding\n- Do their homework for them\n- **Result:** They don''t learn, and you enabled cheating!\n\n✅ **Responsible Choice:**\n- Use AI to explain the concept to both of you\n- Help your friend understand the process\n- Encourage them to solve it themselves\n- **Result:** Your friend actually learns, and you helped responsibly!\n\n## The Responsibility Test\n\nBefore using AI, ask yourself:\n\n1. ✅ **Would I be proud to explain how I used this?**\n2. ✅ **Am I being honest about AI''s role?**\n3. ✅ **Am I still learning and growing?**\n4. ✅ **Would this make someone else feel bad?**\n5. ✅ **Am I following the rules?**\n\nIf you answer **NO** to any question, rethink your approach! 🤔"
}', 2, TRUE),

('ethics-5', 'interactive', 'Responsibility Chooser', '{
  "type": "decision_tree",
  "instructions": "For each scenario, choose the responsible action!",
  "scenarios": [
    {
      "scenario": "Your teacher assigns an essay on climate change. How do you use AI responsibly?",
      "options": [
        "Ask AI to write the whole essay",
        "Use AI to understand climate change, then write your own essay",
        "Copy an AI essay but change a few words",
        "Don''t use AI at all and struggle alone"
      ],
      "correct": 1,
      "explanation": "Using AI to learn and understand, then doing your own work, is the perfect balance! You learn AND create honestly.",
      "why_others_wrong": {
        "0": "This is cheating - you''re not doing your own work!",
        "2": "Still cheating! Changing words doesn''t make it yours.",
        "3": "It''s okay to use AI as a learning tool! Don''t be afraid to use helpful resources."
      }
    },
    {
      "scenario": "You created an awesome AI-generated artwork for a contest. What should you do?",
      "options": [
        "Submit it claiming you drew it by hand",
        "Submit it and mention AI helped create it",
        "Don''t submit it because AI was involved",
        "Submit it without mentioning AI"
      ],
      "correct": 1,
      "explanation": "Being honest about using AI is responsible! Many contests allow AI art if you''re transparent.",
      "why_others_wrong": {
        "0": "Lying about how you made it is dishonest!",
        "2": "AI-assisted art can still be creative! Just be honest about the process.",
        "3": "Transparency matters - always credit your tools!"
      }
    },
    {
      "scenario": "A friend wants you to use AI to create a fake excuse note for them. What do you do?",
      "options": [
        "Create the fake note - you''re helping a friend",
        "Refuse and explain why it''s wrong",
        "Create it but tell them not to use it",
        "Tell the teacher about it"
      ],
      "correct": 1,
      "explanation": "True friends don''t help each other cheat or lie! Refusing and explaining helps them more.",
      "why_others_wrong": {
        "0": "This is helping them lie and could get both of you in trouble!",
        "2": "Creating it is still wrong, even if you discourage using it.",
        "3": "While not creating it is right, talking to your friend first is better than immediately telling."
      }
    },
    {
      "scenario": "You''re stuck on a coding project. How should you use AI?",
      "options": [
        "Ask AI to write all the code for you",
        "Ask AI to explain the concept and help you debug your own code",
        "Give up without using AI",
        "Copy code from AI without understanding it"
      ],
      "correct": 1,
      "explanation": "Using AI to learn and understand makes you a better coder! This is responsible and educational.",
      "why_others_wrong": {
        "0": "You won''t learn if AI does all the work!",
        "2": "AI is a great learning tool - use it to help you understand!",
        "3": "Copying without understanding means you haven''t really learned anything."
      }
    }
  ]
}', 3, TRUE),

('ethics-5', 'quiz', 'Responsibility Check!', '{
  "questions": [
    {
      "question": "What does it mean to use AI responsibly?",
      "options": [
        "Never using AI at all",
        "Using AI to cheat faster",
        "Making good choices about how AI affects you and others",
        "Only using AI for games"
      ],
      "correctAnswer": 2,
      "explanation": "Responsible AI use means thinking about consequences and making ethical choices!"
    },
    {
      "question": "You should give credit to AI when:",
      "options": [
        "Never - it''s just a tool",
        "Only if someone asks",
        "Always, when AI significantly helped create something",
        "Only for school projects"
      ],
      "correctAnswer": 2,
      "explanation": "Honesty and transparency are key! Always acknowledge when AI played a significant role."
    },
    {
      "question": "Which is a responsible way to use AI for homework?",
      "options": [
        "Let AI do all the work while you play games",
        "Use AI to explain concepts so you can solve problems yourself",
        "Copy AI answers and hope you don''t get caught",
        "Share AI-generated homework with the whole class"
      ],
      "correctAnswer": 1,
      "explanation": "Using AI as a tutor to help you learn is responsible and helps you grow!"
    },
    {
      "question": "If a friend wants to use AI irresponsibly, you should:",
      "options": [
        "Help them do it",
        "Ignore them",
        "Explain why it''s wrong and suggest a better way",
        "Report them immediately"
      ],
      "correctAnswer": 2,
      "explanation": "Good friends help each other make better choices! Explain the right way to use AI."
    },
    {
      "question": "Responsible AI use helps you:",
      "options": [
        "Cheat without getting caught",
        "Learn, grow, and maintain integrity",
        "Finish work faster without learning",
        "Impress others with fake skills"
      ],
      "correctAnswer": 1,
      "explanation": "Responsible AI use supports genuine learning and maintains your integrity!"
    }
  ]
}', 4, TRUE),

('ethics-5', 'ai_lab', 'Practice Responsible AI', '{
  "instructions": "Practice using AI responsibly! Notice how each prompt maintains integrity.",
  "exercises": [
    {
      "title": "Responsible Learning",
      "prompt": "I''m learning about the solar system. Can you explain what makes each planet unique? I want to understand it, not just memorize facts.",
      "why_responsible": "You''re asking AI to help you understand deeply, not just give you answers to copy!",
      "what_to_do_next": "Take notes in your own words and create your own summary"
    },
    {
      "title": "Creative Collaboration",
      "prompt": "I''m writing a story about a time-traveling scientist. Can you help me brainstorm 5 plot twists? I''ll choose my favorite and develop it myself.",
      "why_responsible": "You''re using AI for inspiration but doing your own creative work!",
      "what_to_do_next": "Pick ideas you like and write the story yourself"
    },
    {
      "title": "Problem-Solving Partner",
      "prompt": "I don''t understand how to solve quadratic equations. Can you walk me through the steps with an example? I want to learn the process.",
      "why_responsible": "You''re focused on understanding the process, not just getting answers!",
      "what_to_do_next": "Practice similar problems on your own to confirm you understood"
    },
    {
      "title": "Honest Attribution",
      "prompt": "I''m making a presentation about AI. Help me create an outline. I''ll mention that AI helped me organize my thoughts.",
      "why_responsible": "You''re planning to give proper credit for AI''s role in your work!",
      "what_to_do_next": "Add a note in your presentation: ''Organized with AI assistance''"
    }
  ],
  "reflection": "Notice how responsible AI use involves: asking for understanding (not just answers), doing your own work, giving credit, and focusing on learning! 🌟"
}', 5, TRUE);

-- ============================================================================
-- LESSON 6: AI and Environment
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
('ethics-6', 'text', 'AI and Our Planet', '{
  "body": "# AI and Environment 🌍\n\n## Does AI Use Energy?\n\nYes! Running AI takes:\n- ⚡ Electricity for computers\n- 🖥️ Big data centers\n- 🌡️ Cooling systems\n- 💡 Lots of power!\n\n### How Much Energy?\n\n**Training one large AI model** can use as much electricity as:\n- 🚗 A car driving around the Earth **5 times**!\n- 🏠 Powering **5 homes** for a whole year!\n- ⚡ Millions of phone charges!\n\n## The Environmental Impact\n\n### ❌ The Problems:\n\n**1. Carbon Emissions** 🏭\n- AI data centers produce greenhouse gases\n- Like having thousands of cars running 24/7\n- Contributes to climate change\n\n**2. Energy Consumption** ⚡\n- Uses massive amounts of electricity\n- Often from non-renewable sources\n- Increases demand on power grids\n\n**3. Water Usage** 💧\n- Data centers need water for cooling\n- One center can use millions of gallons per day\n- Like filling an Olympic swimming pool every day!\n\n**4. E-Waste** 🗑️\n- Old AI hardware becomes waste\n- Contains toxic materials\n- Difficult to recycle properly\n\n### ✅ But AI Can HELP the Environment Too!\n\n**1. Climate Prediction** 🌦️\n- Predicts weather patterns more accurately\n- Models climate change effects\n- Helps prepare for extreme weather\n\n**2. Wildlife Protection** 🐘\n- Monitors endangered species\n- Detects poachers\n- Tracks animal migration patterns\n\n**3. Energy Optimization** 💡\n- Makes buildings more energy-efficient\n- Optimizes power grid usage\n- Reduces waste in factories\n\n**4. Deforestation Monitoring** 🌳\n- Tracks forest loss from space\n- Alerts authorities to illegal logging\n- Helps replanting efforts\n\n**5. Recycling Innovation** ♻️\n- Sorts recyclables more accurately\n- Identifies materials\n- Reduces contamination\n\n## The Balance ⚖️\n\nAI has **environmental costs** BUT can also be a **powerful tool** for protecting our planet!\n\nThe key is to use AI wisely and support green AI initiatives! 🌱"
}', 1, TRUE),

('ethics-6', 'text', 'Being an Eco-Friendly AI User', '{
  "body": "## What You Can Do 🌟\n\n### 1. Use AI Thoughtfully\n\n❌ **Wasteful:**\n- Generate 100 AI images when you need 1\n- Run the same prompt over and over\n- Use AI for things you could easily do yourself\n\n✅ **Thoughtful:**\n- Think before you prompt\n- Use AI for meaningful tasks\n- Don''t waste computational resources\n\n### 2. Support Green AI Companies\n\n🌱 **Look for companies that:**\n- Use renewable energy (solar, wind)\n- Offset carbon emissions\n- Have sustainability goals\n- Are transparent about environmental impact\n\n### 3. Learn About Sustainable Tech\n\n📚 **Educate yourself:**\n- How is AI made more efficient?\n- What are green data centers?\n- How can AI help climate solutions?\n- What''s the future of sustainable AI?\n\n### 4. Use AI to Help the Planet\n\n🌍 **Project Ideas:**\n- Use AI to track local recycling\n- Create awareness about climate change\n- Monitor local wildlife\n- Optimize energy use at home/school\n- Design eco-friendly solutions\n\n### 5. Spread Awareness\n\n📢 **Talk about:**\n- AI''s environmental impact\n- Ways to use AI sustainably\n- Balance between innovation and ecology\n- Green technology solutions\n\n## The Green AI Pledge 🌿\n\nI promise to:\n- 💚 Use AI thoughtfully, not wastefully\n- 💚 Support companies with green practices\n- 💚 Learn about sustainable technology\n- 💚 Use AI to help protect our planet\n- 💚 Spread awareness about eco-friendly AI\n\n## Remember:\n\nEvery small action counts! By being mindful of how you use AI, you''re helping create a sustainable future! 🌎✨"
}', 2, TRUE),

('ethics-6', 'interactive', 'Eco-Friendly AI Choices', '{
  "type": "green_choices",
  "instructions": "Identify which choice is more eco-friendly!",
  "scenarios": [
    {
      "scenario": "You need one good AI-generated image for a project.",
      "option_a": "Generate 50 images and pick the best one",
      "option_b": "Craft a detailed prompt and generate 2-3 thoughtful images",
      "correct": "b",
      "explanation": "Option B is more eco-friendly! Thoughtful prompts reduce waste. Each generation uses energy, so make them count!",
      "impact": "Generating 50 images uses 16x more energy than generating 3 images!"
    },
    {
      "scenario": "You want to learn about an animal for a school report.",
      "option_a": "Use AI to find information, then use it to help protect that species",
      "option_b": "Generate hundreds of AI images of the animal just for fun",
      "correct": "a",
      "explanation": "Option A uses AI purposefully and helps the environment! Option B wastes resources without benefit.",
      "impact": "Using AI for learning + conservation = positive environmental impact!"
    },
    {
      "scenario": "Choosing an AI tool for your projects.",
      "option_a": "Pick any tool, convenience is all that matters",
      "option_b": "Research and choose tools from companies using renewable energy",
      "correct": "b",
      "explanation": "Option B supports sustainable AI! Your choices can encourage companies to be greener.",
      "impact": "Supporting green companies drives the entire industry toward sustainability!"
    },
    {
      "scenario": "You want to understand how AI affects climate.",
      "option_a": "Ignore it - you''re just one person",
      "option_b": "Learn about it and share knowledge with friends",
      "correct": "b",
      "explanation": "Option B creates awareness! One person can start a ripple effect of positive change.",
      "impact": "Education leads to better choices by millions of users!"
    }
  ]
}', 3, TRUE),

('ethics-6', 'quiz', 'Environment & AI Quiz!', '{
  "questions": [
    {
      "question": "How does AI impact the environment negatively?",
      "options": [
        "It doesn''t impact the environment at all",
        "It uses energy and produces carbon emissions",
        "It only helps the environment",
        "It makes trees grow faster"
      ],
      "correctAnswer": 1,
      "explanation": "AI uses significant energy and produces carbon emissions, but it can also help solve environmental problems!"
    },
    {
      "question": "What''s a way AI can HELP the environment?",
      "options": [
        "Using more electricity",
        "Creating more e-waste",
        "Monitoring deforestation and protecting wildlife",
        "Running constantly"
      ],
      "correctAnswer": 2,
      "explanation": "AI can monitor forests, track endangered animals, and help with conservation efforts!"
    },
    {
      "question": "As an eco-friendly AI user, you should:",
      "options": [
        "Use AI as much as possible for everything",
        "Never use AI to avoid environmental impact",
        "Use AI thoughtfully and support green AI companies",
        "Only care about getting fast results"
      ],
      "correctAnswer": 2,
      "explanation": "Balance is key! Use AI meaningfully and support companies that prioritize sustainability."
    },
    {
      "question": "Training a large AI model uses about as much energy as:",
      "options": [
        "Charging your phone once",
        "Powering 5 homes for a year",
        "Running a lightbulb for an hour",
        "No energy at all"
      ],
      "correctAnswer": 1,
      "explanation": "Training large AI models requires massive amounts of energy - as much as powering several homes for a year!"
    },
    {
      "question": "What makes an AI company ''green''?",
      "options": [
        "They paint their logo green",
        "They use renewable energy and offset carbon emissions",
        "They''re located near forests",
        "They only work during the day"
      ],
      "correctAnswer": 1,
      "explanation": "Green AI companies use renewable energy sources and take steps to reduce their environmental impact!"
    }
  ]
}', 4, TRUE),

('ethics-6', 'ai_lab', 'AI for the Planet', '{
  "instructions": "Use AI to learn about and help environmental causes!",
  "exercises": [
    {
      "title": "Climate Education",
      "prompt": "Explain the top 3 ways kids my age can help fight climate change. Make it actionable and specific.",
      "goal": "Learn practical ways to help the environment",
      "next_step": "Pick one action and start doing it this week!"
    },
    {
      "title": "Eco-Project Ideas",
      "prompt": "I want to create a project that helps the environment in my community. Suggest 3 ideas that use technology or AI in creative ways.",
      "goal": "Brainstorm environmental projects",
      "next_step": "Choose one idea and plan how to make it happen!"
    },
    {
      "title": "Sustainable Tech",
      "prompt": "What are some examples of how technology is being used to protect endangered species? Explain in simple terms.",
      "goal": "Understand AI conservation applications",
      "next_step": "Share what you learned with family or friends!"
    },
    {
      "title": "Energy Awareness",
      "prompt": "Explain how renewable energy (solar, wind) works and why it''s important for reducing AI''s environmental impact.",
      "goal": "Understand green energy and AI",
      "next_step": "Look into whether your school uses renewable energy!"
    }
  ],
  "impact": "You''re using AI to learn about protecting the planet - that''s the perfect way to make AI''s energy use worthwhile! 🌍💚"
}', 5, TRUE);

-- ============================================================================
-- LESSON 7: Future of AI
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
('ethics-7', 'text', 'The Future with AI', '{
  "body": "# Future of AI 🚀\n\n## What''s Coming?\n\n### In 5 Years (2030s):\n\n🏫 **Education:**\n- Personal AI tutors for every student\n- Adaptive learning that matches your pace\n- Virtual reality classrooms\n- Instant language translation\n\n🏥 **Healthcare:**\n- AI helping doctors diagnose faster\n- Personalized medicine\n- Early disease detection\n- Robot surgical assistants\n\n🚗 **Transportation:**\n- More self-driving cars\n- Smarter traffic systems\n- Flying taxis (maybe!)\n- Safer roads\n\n🏠 **Homes:**\n- Houses that learn your preferences\n- Energy-efficient smart systems\n- AI assistants managing daily tasks\n- Enhanced security\n\n### In 10-20 Years (2040s):\n\n🤖 **AI Everywhere:**\n- AI assistants as common as smartphones\n- Seamless human-AI collaboration\n- AI in every profession\n- Advanced robotics\n\n🎨 **Creativity:**\n- AI creative partners for artists\n- New forms of art and entertainment\n- Personalized content creation\n- Virtual worlds\n\n🔬 **Science:**\n- AI discovering new medicines\n- Solving complex climate problems\n- Space exploration assistance\n- Scientific breakthroughs\n\n🌍 **Global Challenges:**\n- AI helping end hunger\n- Clean water solutions\n- Renewable energy optimization\n- Disaster prediction and prevention\n\n## What Won''t Change?\n\n### Humans Will Still Be Essential!\n\nAI can''t replace:\n- ❤️ Human creativity and imagination\n- 🤝 Empathy and emotional intelligence\n- 💭 Critical thinking and ethics\n- 🎨 Unique human experiences\n- 🌟 The ability to dream and innovate"
}', 1, TRUE),

('ethics-7', 'text', 'Preparing for an AI Future', '{
  "body": "## Jobs of the Future 💼\n\nNew careers YOU could have:\n\n### 1. AI Ethics Officer 🛡️\n- Makes sure AI is used responsibly\n- Protects people from AI harm\n- Develops ethical guidelines\n- **Skills needed:** Critical thinking, ethics, communication\n\n### 2. Human-AI Collaboration Specialist 🤝\n- Helps humans and AI work together\n- Designs AI interfaces\n- Trains people to use AI effectively\n- **Skills needed:** Technology, psychology, teaching\n\n### 3. AI Trainer/Teacher 🧑‍🏫\n- Teaches AI new skills\n- Improves AI performance\n- Creates training data\n- **Skills needed:** Subject expertise, patience, analysis\n\n### 4. Sustainability Analyst 🌱\n- Uses AI to solve environmental problems\n- Tracks climate data\n- Develops green solutions\n- **Skills needed:** Science, data analysis, creativity\n\n### 5. AI Safety Researcher 🔬\n- Makes sure AI is safe\n- Tests for problems\n- Prevents AI mishaps\n- **Skills needed:** Computer science, problem-solving, ethics\n\n### 6. Creative Director (AI-Augmented) 🎨\n- Uses AI as a creative tool\n- Designs experiences\n- Tells stories with AI\n- **Skills needed:** Creativity, art, technology\n\n### 7. Data Detective 🔍\n- Analyzes information\n- Finds patterns\n- Solves problems with data\n- **Skills needed:** Math, logic, curiosity\n\n## Skills You''ll Need 📚\n\n### Technical Skills:\n- 💻 Basic coding/programming\n- 📊 Data literacy\n- 🤖 Understanding how AI works\n- 🔧 Problem-solving with technology\n\n### Human Skills:\n- 🧠 Critical thinking\n- 🎨 Creativity and imagination\n- 💬 Communication\n- 🤝 Collaboration\n- 💭 Ethical reasoning\n- 📖 Continuous learning\n\n## How to Prepare Now 🎯\n\n### 1. Keep Learning! 📚\n- Stay curious about everything\n- Learn about AI and technology\n- Explore many subjects\n- Never stop asking questions\n\n### 2. Develop Creativity 🎨\n- Make art, music, or stories\n- Think outside the box\n- Imagine new possibilities\n- Practice creative problem-solving\n\n### 3. Build Ethics Understanding 💭\n- Think about right and wrong\n- Consider how choices affect others\n- Practice making good decisions\n- Stand up for what''s fair\n\n### 4. Practice with AI Now 🤖\n- Use AI tools responsibly\n- Learn how they work\n- Experiment safely\n- Understand their limits\n\n### 5. Stay Adaptable 🌊\n- Be open to change\n- Learn new things quickly\n- Don''t fear technology\n- Embrace new opportunities\n\n## The Future is Exciting! ✨\n\nYou''re growing up during the **AI revolution**!\n\nThe skills you''re learning now will help you:\n- 🌟 Create amazing things\n- 🚀 Solve big problems\n- 🌍 Make the world better\n- 💡 Innovate in ways we can''t imagine yet\n\n**You''re not just preparing for the future - you''re creating it!** 🎉"
}', 2, TRUE),

('ethics-7', 'interactive', 'Future Career Explorer', '{
  "type": "career_match",
  "instructions": "Answer questions to discover your AI-future career match!",
  "questions": [
    {
      "question": "What sounds most interesting to you?",
      "options": [
        "Making sure technology is safe and fair",
        "Creating art, games, or stories",
        "Solving problems with data and math",
        "Helping the environment and animals"
      ],
      "careers": ["ethics_officer", "creative_director", "data_detective", "sustainability_analyst"]
    },
    {
      "question": "In group projects, you prefer to:",
      "options": [
        "Lead and organize the team",
        "Come up with creative ideas",
        "Research and analyze information",
        "Help everyone work together"
      ],
      "careers": ["ethics_officer", "creative_director", "data_detective", "collaboration_specialist"]
    },
    {
      "question": "Your favorite type of puzzle is:",
      "options": [
        "Logic and strategy games",
        "Creative building and designing",
        "Math and number puzzles",
        "Mysteries to investigate"
      ],
      "careers": ["safety_researcher", "creative_director", "data_detective", "ai_trainer"]
    }
  ],
  "career_results": {
    "ethics_officer": "AI Ethics Officer - You''d be great at making sure AI is used fairly and safely!",
    "creative_director": "Creative Director - Your imagination could shape amazing AI-powered experiences!",
    "data_detective": "Data Detective - Your analytical mind is perfect for solving problems with AI!",
    "sustainability_analyst": "Sustainability Analyst - You could use AI to help save the planet!",
    "collaboration_specialist": "Human-AI Collaboration Specialist - You''d excel at helping people and AI work together!",
    "safety_researcher": "AI Safety Researcher - Your problem-solving skills could prevent AI mishaps!",
    "ai_trainer": "AI Trainer - You''d be excellent at teaching AI new things!"
  }
}', 3, TRUE),

('ethics-7', 'quiz', 'Future Readiness Quiz!', '{
  "questions": [
    {
      "question": "In the future, AI will most likely:",
      "options": [
        "Replace all human jobs",
        "Work alongside humans in most fields",
        "Only be used for games",
        "Disappear completely"
      ],
      "correctAnswer": 1,
      "explanation": "AI will work WITH humans, not replace them! Human creativity, ethics, and empathy will always be essential."
    },
    {
      "question": "Which skill will be MOST valuable in an AI-powered future?",
      "options": [
        "Memorizing facts",
        "Creative and critical thinking",
        "Doing exactly what AI says",
        "Avoiding all technology"
      ],
      "correctAnswer": 1,
      "explanation": "Creative and critical thinking are uniquely human! AI can help with facts, but humans lead with innovation and ethics."
    },
    {
      "question": "How can you best prepare for the future?",
      "options": [
        "Only study computer science",
        "Ignore AI completely",
        "Learn about AI AND develop human skills like creativity and ethics",
        "Wait until you''re older to think about it"
      ],
      "correctAnswer": 2,
      "explanation": "Balance is key! Understanding AI plus strong human skills makes you ready for anything!"
    },
    {
      "question": "Future careers will likely require:",
      "options": [
        "Only technical skills",
        "Only creative skills",
        "Both technical and human skills",
        "No skills - AI will do everything"
      ],
      "correctAnswer": 2,
      "explanation": "The future needs both! Technology skills plus creativity, ethics, and communication will be essential."
    },
    {
      "question": "The most important thing about the AI future is:",
      "options": [
        "Having the most advanced AI",
        "Using AI ethically to help humanity",
        "Making AI as fast as possible",
        "Keeping AI secret"
      ],
      "correctAnswer": 1,
      "explanation": "The future is about using AI responsibly to solve problems and help people - ethics matters most!"
    }
  ]
}', 4, TRUE),

('ethics-7', 'ai_lab', 'Envision Your AI Future', '{
  "instructions": "Use AI to explore and imagine your future with AI!",
  "exercises": [
    {
      "title": "Dream Job",
      "prompt": "I''m interested in [your interests]. What careers might exist in 2040 that combine my interests with AI? Be creative and specific!",
      "goal": "Imagine future career possibilities",
      "tip": "Fill in [your interests] with things you actually love!"
    },
    {
      "title": "Future Day",
      "prompt": "Describe what a typical day might look like for a middle school student in 2040. How might AI help with learning, creativity, and daily life?",
      "goal": "Envision daily life with AI",
      "tip": "Think about both exciting possibilities and potential challenges!"
    },
    {
      "title": "Problem Solver",
      "prompt": "What''s a big global problem (like climate change, hunger, or disease) that AI could help solve in the next 20 years? Explain how.",
      "goal": "Understand AI''s potential for good",
      "tip": "Focus on problems you care about!"
    },
    {
      "title": "Skill Builder",
      "prompt": "Based on how AI is developing, what are 5 specific skills I should work on now to be successful in the future? Explain why each matters.",
      "goal": "Create a personal development plan",
      "tip": "Pick one skill to start practicing this week!"
    }
  ],
  "inspiration": "The future isn''t something that just happens - it''s something YOU will create! 🌟"
}', 5, TRUE);

-- ============================================================================
-- LESSON 8: Be an AI Guardian
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
('ethics-8', 'text', 'Your AI Guardian Pledge', '{
  "body": "# Be an AI Guardian! 🛡️\n\n## Congratulations! 🎉\n\nYou''ve learned SO MUCH about AI ethics and safety! Now it''s time to put it all together.\n\n## What is an AI Guardian?\n\nAn **AI Guardian** is someone who:\n\n✅ **Uses AI ethically and safely**\n- Makes responsible choices\n- Protects privacy (theirs and others'')\n- Thinks critically about information\n- Gives proper credit\n\n✅ **Helps others use AI responsibly**\n- Teaches friends and family\n- Explains why ethics matter\n- Leads by example\n- Shares knowledge\n\n✅ **Speaks up against misuse**\n- Notices when AI is used wrongly\n- Has courage to say something\n- Doesn''t spread harmful AI content\n- Reports serious problems\n\n✅ **Creates a better future**\n- Uses AI to help, not harm\n- Thinks about environmental impact\n- Innovates responsibly\n- Makes the world better\n\n## Why Be an AI Guardian?\n\nBecause **you have the power** to shape how AI is used!\n\nYour choices matter:\n- ✨ Every time you use AI responsibly\n- ✨ Every time you help someone understand ethics\n- ✨ Every time you speak up for what''s right\n- ✨ Every time you create something positive\n\n**You''re making the AI future better!** 🌟"
}', 1, TRUE),

('ethics-8', 'text', 'The AI Guardian Pledge', '{
  "body": "## The Official AI Guardian Pledge 📜\n\n### I promise to:\n\n🌟 **Be Fair**\n- I will use AI that treats everyone equally\n- I will speak up when I see bias\n- I will support inclusive and diverse AI\n- I will be fair in my own AI use\n\n🌟 **Be Safe**\n- I will protect my privacy and others'' privacy\n- I will think before sharing information\n- I will use strong passwords\n- I will ask adults when I''m unsure\n\n🌟 **Be Honest**\n- I will verify information before believing it\n- I will not spread misinformation\n- I will give credit when AI helps me\n- I will be truthful about my AI use\n\n🌟 **Be Responsible**\n- I will use AI for good, not harm\n- I will not cheat or deceive\n- I will learn rather than just copy\n- I will think about consequences\n\n🌟 **Be Kind**\n- I will never use AI to bully or hurt others\n- I will create positive content\n- I will help others learn about AI\n- I will spread kindness, not hate\n\n🌟 **Be Eco-Conscious**\n- I will use AI thoughtfully, not wastefully\n- I will support green AI companies\n- I will use AI to help the environment\n- I will think about sustainability\n\n🌟 **Be Curious**\n- I will keep learning about AI ethics\n- I will stay informed about new developments\n- I will ask questions\n- I will never stop improving\n\n🌟 **Be Brave**\n- I will speak up when AI is used wrongly\n- I will have the courage to do what''s right\n- I will stand up for others\n- I will be a leader, not a follower\n\n---\n\n### My Signature:\n\n**[Your Name], AI Guardian** ✨\n\n**Date:** [Today''s Date]\n\n---\n\n**This pledge is my promise to use AI ethically, safely, and responsibly - always!** 🛡️"
}', 2, TRUE),

('ethics-8', 'interactive', 'Guardian Challenges', '{
  "type": "scenario_responses",
  "instructions": "As an AI Guardian, how would you handle each situation?",
  "scenarios": [
    {
      "situation": "You see a classmate using AI to write their entire essay and planning to turn it in as their own work.",
      "your_response": "What would you do?",
      "guardian_actions": [
        "Talk to them privately and explain why it''s wrong",
        "Suggest they use AI to learn and understand, then write it themselves",
        "Offer to help them use AI responsibly",
        "If they won''t listen, consider telling a teacher"
      ],
      "why_important": "AI Guardians help others make better choices and maintain academic integrity!"
    },
    {
      "situation": "A friend shares a shocking video on social media that looks fake. Others are starting to believe and share it.",
      "your_response": "What would you do?",
      "guardian_actions": [
        "Don''t share it yourself",
        "Politely question if it''s been verified",
        "Suggest checking fact-checking websites",
        "Explain deepfake warning signs if relevant"
      ],
      "why_important": "AI Guardians stop misinformation from spreading!"
    },
    {
      "situation": "You discover an AI tool that''s really fun but notice it seems biased against certain groups of people.",
      "your_response": "What would you do?",
      "guardian_actions": [
        "Stop using it yourself",
        "Explain the bias to friends who use it",
        "Look for alternative, fairer tools",
        "Report the bias to the company if possible"
      ],
      "why_important": "AI Guardians promote fairness and don''t support biased systems!"
    },
    {
      "situation": "Your younger sibling wants to use AI but doesn''t know about privacy or safety.",
      "your_response": "What would you do?",
      "guardian_actions": [
        "Teach them what information to NEVER share",
        "Help them understand how to use AI safely",
        "Make sure a parent knows and approves",
        "Monitor their usage initially"
      ],
      "why_important": "AI Guardians protect others, especially those who are more vulnerable!"
    }
  ]
}', 3, TRUE),

('ethics-8', 'quiz', 'Final Ethics Challenge!', '{
  "questions": [
    {
      "question": "What makes you an AI Guardian?",
      "options": [
        "Using AI ethically and helping others do the same",
        "Using AI more than anyone else",
        "Having the newest AI tools",
        "Knowing all the AI tricks"
      ],
      "correctAnswer": 0,
      "explanation": "AI Guardians use AI responsibly and help create a better, safer future for everyone!"
    },
    {
      "question": "If you see someone misusing AI, you should:",
      "options": [
        "Ignore it",
        "Join them",
        "Speak up and help them understand the right way",
        "Record it and share it"
      ],
      "correctAnswer": 2,
      "explanation": "AI Guardians help others learn to use AI ethically by speaking up and teaching!"
    },
    {
      "question": "The most important part of being an AI Guardian is:",
      "options": [
        "Being perfect and never making mistakes",
        "Making ethical choices and continuously learning",
        "Telling everyone else what to do",
        "Using AI for everything"
      ],
      "correctAnswer": 1,
      "explanation": "AI Guardians focus on making good choices, learning from mistakes, and always improving!"
    },
    {
      "question": "As an AI Guardian, when you make a mistake with AI, you should:",
      "options": [
        "Hide it so no one knows",
        "Blame the AI",
        "Learn from it and do better next time",
        "Give up on using AI"
      ],
      "correctAnswer": 2,
      "explanation": "Everyone makes mistakes! AI Guardians learn from them and improve."
    },
    {
      "question": "The best way to create an AI-powered future is to:",
      "options": [
        "Let companies decide everything",
        "Avoid AI completely",
        "Use AI ethically and help shape responsible development",
        "Only think about yourself"
      ],
      "correctAnswer": 2,
      "explanation": "AI Guardians actively participate in creating a responsible AI future by making ethical choices!"
    }
  ]
}', 4, TRUE),

('ethics-8', 'ai_lab', 'Your Guardian Mission', '{
  "instructions": "Create your personal AI Guardian action plan!",
  "exercises": [
    {
      "title": "My Ethical Guidelines",
      "prompt": "Based on what I''ve learned, help me create 5 personal rules for how I''ll use AI ethically. Make them specific and actionable.",
      "goal": "Develop your personal AI ethics code",
      "action": "Write these down and put them where you''ll see them!"
    },
    {
      "title": "Teaching Plan",
      "prompt": "I want to teach my family/friends about AI ethics. Help me create a simple 5-minute lesson about the most important AI safety topics for kids.",
      "goal": "Prepare to spread AI ethics knowledge",
      "action": "Actually teach someone this week!"
    },
    {
      "title": "Positive Impact Project",
      "prompt": "I want to use AI to make a positive difference. Suggest 3 specific projects I could do that combine AI with helping others or the environment.",
      "goal": "Plan your guardian mission",
      "action": "Choose one project and start planning it!"
    },
    {
      "title": "Reflection",
      "prompt": "What are the 3 most important things I learned about AI ethics and safety? Why do they matter for my future?",
      "goal": "Reflect on your learning journey",
      "action": "Share your reflections with someone you trust!"
    }
  ],
  "final_message": "You''re now an AI Guardian! Your journey of learning and growing continues. Use your knowledge to make the world better, one ethical choice at a time! 🛡️✨"
}', 5, TRUE);

-- ============================================================================
-- UPDATE MODULE STATS
-- ============================================================================

DO $$
DECLARE
    lesson_count INTEGER;
    content_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO lesson_count
    FROM public.lessons
    WHERE module_id = 'ethics-safety' AND is_published = TRUE;

    SELECT COUNT(*) INTO content_count
    FROM public.lesson_content lc
    JOIN public.lessons l ON lc.lesson_id = l.id
    WHERE l.module_id = 'ethics-safety';

    RAISE NOTICE 'Ethics & Safety AI Module Complete!';
    RAISE NOTICE 'Created % lessons with % content blocks', lesson_count, content_count;
    RAISE NOTICE 'Module includes: comprehensive text, interactive exercises, quizzes, and AI Lab activities';
END $$;
