-- Ethics & Safety AI Module - Lessons 4-8 Complete Content
-- Description: Comprehensive content for Ethics lessons 4-8 (replaces basic content)
-- Date: 2026-01-11
-- Note: This migration deletes the basic content for lessons 4-8 and replaces with comprehensive versions

-- ============================================================================
-- CLEAN UP BASIC CONTENT FOR LESSONS 4-8
-- ============================================================================

-- Remove the basic content that was placeholder
DELETE FROM public.lesson_content
WHERE lesson_id IN ('ethics-4', 'ethics-5', 'ethics-6', 'ethics-7', 'ethics-8');

-- ============================================================================
-- LESSON 4: AI and Truth - COMPLETE
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
-- Introduction
('ethics-4', 'text', 'Truth in the Age of AI', '{
  "body": "# AI and Truth 🔍✨\n\n## Can AI Lie?\n\nAI doesn''t lie on purpose (it''s not trying to trick you!), but:\n- ❌ It can share wrong information\n- ❌ It can create fake content\n- ❌ It can be VERY convincing even when wrong!\n\n## What is Misinformation?\n\n**Misinformation** = False or wrong information (not on purpose)\n\n**Disinformation** = Fake info spread ON PURPOSE to trick people\n\n### Examples:\n- 🤖 AI generates a fake news article\n- 📸 AI creates a fake photo\n- 🎥 AI makes a fake video (deepfake)\n- 💬 AI writes false facts convincingly\n\n## What are Deepfakes?\n\n**Deepfakes** are AI-generated videos or images that look REAL but are FAKE!\n\n### How They Work:\n1. AI studies real videos of a person 📹\n2. Learns their face and voice 🎭\n3. Creates NEW fake videos 🎬\n4. Makes it look like they said/did things they never did! 😱\n\n### The Danger:\n- 😰 Can spread false information\n- 😔 Can damage reputations\n- 😡 Can be used for bullying\n- 🗳️ Can influence elections\n- 💔 Can fool even smart people!\n\n## Why This Matters\n\nIn a world with AI:\n- You can''t always trust what you see 👀\n- Videos and photos can be fake 📸\n- You need to verify information ✅\n- Critical thinking is MORE important than ever! 🧠\n\n**The good news?** You can learn to spot fakes! 🔍"
}', 1, TRUE),

-- How to Spot Fakes
('ethics-4', 'text', 'Becoming a Fact Detective', '{
  "body": "## How to Spot Misinformation 🕵️\n\n### The STOP Method\n\n**S - STOP and Think**\n- Don''t believe everything immediately!\n- Ask: Does this seem real?\n- Trust your gut if something feels off\n\n**T - Think About the Source**\n- Who created this?\n- Is it from a trusted website?\n- Does the source have a reason to lie?\n\n**O - Other Sources**\n- Can you find this info elsewhere?\n- Do multiple trustworthy sources say the same thing?\n- If only ONE source has this \"amazing\" news, be skeptical!\n\n**P - Proof and Evidence**\n- What''s the evidence?\n- Are there real facts?\n- Or just opinions and guesses?\n\n### Spotting Deepfakes\n\n🔍 **Look for these clues:**\n\n1. **Weird Face Movements**\n   - Blinking looks unnatural\n   - Mouth doesn''t match words perfectly\n   - Face looks blurry around edges\n\n2. **Strange Backgrounds**\n   - Background is blurry or distorted\n   - Objects look weird\n   - Lighting doesn''t match\n\n3. **Audio Issues**\n   - Voice sounds robotic\n   - Audio doesn''t sync with lips\n   - Background noise is missing\n\n4. **Too Perfect**\n   - Looks TOO smooth or polished\n   - No natural imperfections\n   - Seems \"uncanny valley\"\n\n### Questions to Ask\n\nBefore sharing something:\n\n✅ **Is this from a trusted source?**\n✅ **Have I verified this elsewhere?**\n✅ **Could this be fake or edited?**\n✅ **Would sharing this help or hurt?**\n\nIf you''re not sure, **DON''T SHARE!** 🛑\n\n## Being a Truth Champion\n\n**DO:**\n- ✅ Verify before you share\n- ✅ Check multiple sources\n- ✅ Ask adults when unsure\n- ✅ Correct false info politely\n\n**DON''T:**\n- ❌ Spread rumors or unverified news\n- ❌ Create or share deepfakes to trick people\n- ❌ Believe everything you see online\n- ❌ Share without thinking\n\nYou have the power to stop misinformation! 💪"
}', 2, TRUE),

-- Interactive Exercise
('ethics-4', 'interactive', 'Fake News Detective!', '{
  "type": "fact_check",
  "instructions": "Read each headline and decide if you should believe it or check it first!",
  "scenarios": [
    {
      "headline": "Scientists discover chocolate cures all diseases!",
      "clue": "Only one unknown website reports this. No scientific journals mention it.",
      "answer": "fake",
      "explanation": "This sounds too good to be true! Real medical discoveries are reported by multiple trusted sources and scientific journals.",
      "action": "Use the STOP method! Check other sources - you won''t find real evidence for this claim."
    },
    {
      "headline": "Local school announces snow day tomorrow due to storm",
      "clue": "Posted on the school''s official website and weather service confirms storm.",
      "answer": "likely_true",
      "explanation": "This comes from official sources (school website) and is confirmed by weather services. Still good to double-check!",
      "action": "Verify on your school''s official channels, but this looks legitimate!"
    },
    {
      "headline": "Video shows famous person saying mean things",
      "clue": "Video has weird lighting, voice sounds off, and only appears on one social media account.",
      "answer": "suspicious",
      "explanation": "These are red flags for a deepfake! Weird lighting, unnatural voice, and single source are warning signs.",
      "action": "Look for: unnatural face movements, audio sync issues, and verification from trusted news sources."
    },
    {
      "headline": "New study shows reading 20 minutes daily improves grades",
      "clue": "Multiple education websites cite the research study with links to the actual research.",
      "answer": "likely_true",
      "explanation": "Multiple trusted sources + links to actual research = more credible. This follows proper fact-checking!",
      "action": "This is well-sourced information! You can verify by checking the linked research."
    }
  ]
}', 3, TRUE),

-- Quiz
('ethics-4', 'quiz', 'Truth & Misinformation Quiz!', '{
  "questions": [
    {
      "question": "What is a deepfake?",
      "options": [
        "A very deep swimming pool",
        "AI-generated fake video or image that looks real",
        "A type of computer virus",
        "A new video game"
      ],
      "correctAnswer": 1,
      "explanation": "Deepfakes are AI-created videos or images that look real but are completely fake!"
    },
    {
      "question": "What should you do before sharing news or videos online?",
      "options": [
        "Share it immediately if it''s exciting",
        "Verify it''s true from multiple trusted sources",
        "Only share if it has lots of likes",
        "Ask your friends if they''ve seen it"
      ],
      "correctAnswer": 1,
      "explanation": "Always verify information from multiple trusted sources before sharing to avoid spreading misinformation!"
    },
    {
      "question": "Which is a sign that a video might be a deepfake?",
      "options": [
        "It''s in color",
        "It has sound",
        "The person''s mouth movements don''t match their words perfectly",
        "It''s longer than 1 minute"
      ],
      "correctAnswer": 2,
      "explanation": "Unnatural mouth movements, weird blinking, or audio that doesn''t sync are signs of deepfakes!"
    },
    {
      "question": "What does the ''O'' in the STOP method stand for?",
      "options": [
        "Only share with friends",
        "Other sources - check if other trusted sources report this",
        "Open the link immediately",
        "Obviously true"
      ],
      "correctAnswer": 1,
      "explanation": "''O'' means check Other sources! Real news will be reported by multiple trusted sources."
    },
    {
      "question": "If you see a headline that sounds too good to be true, you should:",
      "options": [
        "Share it with everyone immediately!",
        "Believe it because it''s on the internet",
        "Be skeptical and fact-check it first",
        "Ignore all news forever"
      ],
      "correctAnswer": 2,
      "explanation": "If something sounds too good to be true, it probably is! Always fact-check before believing or sharing."
    }
  ]
}', 4, TRUE),

-- AI Lab Exercise
('ethics-4', 'ai_lab', 'Practice Fact-Checking!', '{
  "instructions": "Practice asking AI to help you verify information!",
  "exercises": [
    {
      "title": "Source Verification",
      "prompt": "I saw a headline saying ''Eating ice cream for breakfast makes you smarter.'' How can I verify if this is true?",
      "goal": "Learn to ask AI for help with fact-checking and source verification",
      "what_to_look_for": "AI should suggest checking scientific sources, looking for peer-reviewed studies, and being skeptical of sensational claims"
    },
    {
      "title": "Deepfake Awareness",
      "prompt": "What are the signs I should look for to identify if a video might be a deepfake?",
      "goal": "Understand how to spot manipulated media",
      "what_to_look_for": "AI should mention facial inconsistencies, audio sync issues, unnatural movements, and lighting problems"
    },
    {
      "title": "Critical Thinking",
      "prompt": "Teach me how to think critically about information I see online. What questions should I ask myself?",
      "goal": "Develop critical thinking skills",
      "what_to_look_for": "AI should encourage questioning sources, checking multiple sources, considering bias, and verifying facts"
    }
  ],
  "remember": "AI can help you learn to think critically, but YOU are the final fact-checker! 🧠"
}', 5, TRUE);

-- ============================================================================
-- LESSON 5: Responsible AI Use - COMPLETE
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
-- Introduction
('ethics-5', 'text', 'Using AI Responsibly', '{
  "body": "# Responsible AI Use 🌟\n\n## What Does \"Responsible\" Mean?\n\n**Responsible** means:\n- Making good choices 🎯\n- Thinking about consequences 💭\n- Being accountable for your actions ✅\n- Helping, not hurting 💛\n\n## The AI Responsibility Code\n\n### ✅ DO:\n\n**Learn and Grow**\n- Use AI to understand new things\n- Ask AI to explain concepts\n- Explore and discover\n- Build your knowledge\n\n**Create and Innovate**\n- Make art, stories, and projects\n- Use AI as a creative tool\n- Combine AI with your own ideas\n- Build something new!\n\n**Give Credit**\n- Say when AI helped you\n- Don''t pretend AI work is 100% yours\n- Be honest about collaboration\n- Respect intellectual property\n\n**Help Others**\n- Use AI to solve problems\n- Make the world better\n- Support your community\n- Spread kindness\n\n### ❌ DON''T:\n\n**Cheat or Deceive**\n- ❌ Let AI do all your homework\n- ❌ Copy AI output as your work\n- ❌ Trick teachers or parents\n- ❌ Use AI to avoid learning\n\n**Harm or Bully**\n- ❌ Create mean content\n- ❌ Make fake accounts\n- ❌ Spread rumors\n- ❌ Hurt others'' feelings\n\n**Spread Misinformation**\n- ❌ Share unverified facts\n- ❌ Create fake news\n- ❌ Make deepfakes to trick people\n- ❌ Believe everything AI says\n\n**Waste Resources**\n- ❌ Use AI when you don''t need to\n- ❌ Generate tons of unnecessary content\n- ❌ Ignore environmental impact\n\n## Why Responsibility Matters\n\nYour choices with AI can:\n- ✅ Help people learn and grow\n- ❌ Hurt people''s feelings or reputation\n- ✅ Make the world more fair\n- ❌ Spread false information\n- ✅ Inspire others to do good\n- ❌ Set a bad example\n\n**You have power - use it wisely!** 💪"
}', 1, TRUE),

-- Real Scenarios
('ethics-5', 'text', 'Responsibility in Action', '{
  "body": "## Real-Life Scenarios 🌍\n\n### Scenario 1: The Science Report\n\n**Situation:** You have a report due on climate change.\n\n❌ **Irresponsible:**\n- Ask AI: \"Write my entire climate change report\"\n- Copy-paste the AI output\n- Turn it in as your own work\n- Learn nothing!\n\n✅ **Responsible:**\n- Ask AI: \"Explain climate change in simple terms\"\n- Use AI to find reputable sources\n- Write the report in YOUR OWN WORDS\n- Give credit: \"Research assisted by AI tools\"\n- Actually learn about climate change!\n\n**Result:** You learned something AND used AI ethically! 🎯\n\n### Scenario 2: The Art Project\n\n**Situation:** You''re making art for a contest.\n\n❌ **Irresponsible:**\n- Generate AI art\n- Submit it claiming you drew/painted it\n- Win unfairly\n\n✅ **Responsible:**\n- Use AI for inspiration and ideas\n- Create your own original work\n- Or: Submit AI art labeled as \"AI-Assisted Art\"\n- Be honest about your creative process\n\n**Result:** Your integrity stays intact! 🏆\n\n### Scenario 3: Social Media Posts\n\n**Situation:** You want to post something funny.\n\n❌ **Irresponsible:**\n- Generate fake news for laughs\n- Create deepfakes of classmates\n- Post mean AI-generated comments\n- Share misinformation\n\n✅ **Responsible:**\n- Create funny, harmless content\n- Make sure everyone''s in on the joke\n- Never use AI to hurt or deceive\n- Spread positivity!\n\n**Result:** People laugh WITH you, not at others! 😊\n\n### Scenario 4: Helping a Friend\n\n**Situation:** Your friend asks for homework help.\n\n❌ **Irresponsible:**\n- Use AI to do their homework for them\n- Just give them answers\n- Help them cheat\n\n✅ **Responsible:**\n- Use AI to EXPLAIN the concept\n- Help them understand\n- Work through it together\n- Let them do their own work\n\n**Result:** Your friend actually learns! 🎓\n\n## The Responsibility Checklist\n\nBefore using AI, ask yourself:\n\n☑️ **Is this helpful or harmful?**\n☑️ **Am I being honest?**\n☑️ **Am I giving proper credit?**\n☑️ **Would I be proud to tell my parents/teachers?**\n☑️ **Does this help me learn or avoid learning?**\n☑️ **Could this hurt anyone?**\n\nIf you answered well to all these, you''re being responsible! ✨\n\n## Leading by Example\n\nWhen you use AI responsibly:\n- 🌟 You inspire others\n- 🌟 You build trust\n- 🌟 You create a better community\n- 🌟 You grow as a person\n\nBe the responsible AI user others look up to! 💪"
}', 2, TRUE),

-- Interactive Exercise
('ethics-5', 'interactive', 'Responsibility Chooser!', '{
  "type": "choice_scenario",
  "instructions": "Read each scenario and choose the responsible action!",
  "scenarios": [
    {
      "situation": "Your friend wants you to use AI to write their college application essay.",
      "choices": [
        {
          "action": "Write the whole essay for them using AI",
          "outcome": "irresponsible",
          "explanation": "This is helping them cheat! They won''t learn to express themselves, and it''s dishonest."
        },
        {
          "action": "Help them brainstorm ideas with AI, but they write it themselves",
          "outcome": "responsible",
          "explanation": "Perfect! You''re helping them think through ideas while letting them do their own authentic work."
        },
        {
          "action": "Tell them to figure it out alone",
          "outcome": "neutral",
          "explanation": "Not harmful, but you could help them learn responsibly instead of not helping at all!"
        }
      ]
    },
    {
      "situation": "You created a cool AI-generated image for your school project.",
      "choices": [
        {
          "action": "Present it as if you drew it by hand",
          "outcome": "irresponsible",
          "explanation": "This is dishonest! You should always give credit when AI creates something."
        },
        {
          "action": "Clearly label it as ''AI-Generated'' and explain how you made it",
          "outcome": "responsible",
          "explanation": "Excellent! Honesty and transparency show responsibility and integrity."
        },
        {
          "action": "Don''t use the image at all because AI made it",
          "outcome": "overly_cautious",
          "explanation": "It''s okay to use AI-created content if you''re honest about it! Being transparent makes it responsible."
        }
      ]
    },
    {
      "situation": "You notice a classmate using AI to bully someone online.",
      "choices": [
        {
          "action": "Join them because it seems fun",
          "outcome": "irresponsible",
          "explanation": "Never! Cyberbullying hurts people. Don''t participate in harmful behavior."
        },
        {
          "action": "Ignore it and walk away",
          "outcome": "insufficient",
          "explanation": "Better than joining, but you could help by speaking up or telling an adult."
        },
        {
          "action": "Tell them it''s wrong and report it to a teacher",
          "outcome": "responsible",
          "explanation": "Perfect! Standing up against misuse and getting help from adults is the right thing to do."
        }
      ]
    }
  ]
}', 3, TRUE),

-- Quiz
('ethics-5', 'quiz', 'Responsibility Quiz!', '{
  "questions": [
    {
      "question": "What''s a responsible way to use AI for homework?",
      "options": [
        "Let AI write all your answers",
        "Use AI to understand concepts, then do the work yourself",
        "Copy AI answers and change a few words",
        "Share AI-generated homework with the whole class"
      ],
      "correctAnswer": 1,
      "explanation": "Using AI to learn and understand is great! But you should do your own work to actually learn."
    },
    {
      "question": "If AI helps you create something, you should:",
      "options": [
        "Pretend you did it all yourself",
        "Give credit and be honest about AI''s role",
        "Hide that you used AI",
        "Say AI did everything"
      ],
      "correctAnswer": 1,
      "explanation": "Always be honest about AI''s contribution. Transparency shows responsibility and integrity!"
    },
    {
      "question": "You see someone using AI to create mean content about others. You should:",
      "options": [
        "Join them",
        "Share it with friends",
        "Speak up and tell an adult",
        "Ignore it completely"
      ],
      "correctAnswer": 2,
      "explanation": "Standing up against misuse is part of being a responsible AI user. Get help from trusted adults!"
    },
    {
      "question": "Responsible AI use means:",
      "options": [
        "Using AI to avoid work",
        "Making thoughtful choices that help, not harm",
        "Never using AI at all",
        "Using AI as much as possible"
      ],
      "correctAnswer": 1,
      "explanation": "Responsibility means thinking about the impact of your choices and using AI in helpful, ethical ways!"
    }
  ]
}', 4, TRUE),

-- AI Lab Exercise
('ethics-5', 'ai_lab', 'Practice Responsible Use!', '{
  "instructions": "Try these responsible AI interactions!",
  "exercises": [
    {
      "title": "Learning Helper (Responsible)",
      "prompt": "I''m learning about the solar system. Can you explain what makes each planet unique? I want to understand it for my presentation.",
      "why_responsible": "You''re using AI to LEARN, not to do your work. You''ll take this knowledge and create your own presentation!",
      "next_step": "Take notes on what AI explains, then create your presentation in your own words!"
    },
    {
      "title": "Creative Collaborator (Responsible)",
      "prompt": "I''m writing a story about a time-traveling scientist. Can you help me brainstorm 3 interesting plot twists? I''ll choose one and develop it myself.",
      "why_responsible": "You''re using AI for inspiration and ideas, but YOU''re doing the creative work of writing the story!",
      "next_step": "Pick the plot twist you like, and write the story yourself with your own unique style!"
    },
    {
      "title": "Problem Solver (Responsible)",
      "prompt": "I want to organize a clean-up day at my school. What are some steps I should take to plan it well?",
      "why_responsible": "Using AI to help solve real problems and make your community better - that''s responsible and impactful!",
      "next_step": "Take AI''s suggestions, adapt them to your school, and work with teachers to make it happen!"
    }
  ],
  "reflection": "Notice how in each example, YOU are doing the thinking, creating, and acting - AI is just a helpful tool! That''s responsible use. 🌟"
}', 5, TRUE);

-- ============================================================================
-- LESSON 6: AI and Environment - COMPLETE
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
-- Introduction
('ethics-6', 'text', 'AI and Our Planet', '{
  "body": "# AI and Environment 🌍\n\n## Does AI Use Energy?\n\nYes! And a LOT of it!\n\nRunning AI requires:\n- ⚡ Electricity for powerful computers\n- 🖥️ Massive data centers (buildings full of computers!)\n- 🌡️ Cooling systems (computers get HOT!)\n- 💡 24/7 power supply\n- 💧 Water for cooling towers\n\n## The Environmental Impact 🏭\n\n### Training Big AI Models\n\nCreating a large AI model:\n- Uses as much energy as 5 cars driving their ENTIRE LIFETIME! 🚗🚗🚗🚗🚗\n- Creates about 626,000 pounds of CO₂ emissions 😰\n- Needs thousands of gallons of water for cooling 💧\n- Runs on servers 24/7 for weeks or months ⏰\n\n**That''s like leaving 100 homes'' worth of lights on for a year!** 💡\n\n### Using AI Daily\n\nEvery time you:\n- Ask an AI chatbot a question → Uses energy ⚡\n- Generate an AI image → Uses energy ⚡\n- Get AI recommendations → Uses energy ⚡\n\nOne ChatGPT conversation uses about as much energy as:\n- Charging your phone 1-2 times\n- Or running a light bulb for an hour\n\nMultiply that by MILLIONS of people! 🌍\n\n## Why This Matters\n\nMore energy use means:\n- 🏭 More fossil fuels burned (in many places)\n- 🌡️ More greenhouse gases\n- 🌍 Climate change impact\n- 💧 Water resource depletion\n\nBut don''t panic! There''s good news too... 🌟"
}', 1, TRUE),

-- The Good Side
('ethics-6', 'text', 'How AI Can HELP the Environment', '{
  "body": "## AI as an Environmental Hero! 🦸\n\n### Ways AI Helps Our Planet\n\n**1. Climate Prediction 🌡️**\n- Predicts weather patterns more accurately\n- Models climate change effects\n- Helps us prepare for natural disasters\n- Optimizes renewable energy use\n\n**2. Wildlife Protection 🐘**\n- Monitors endangered species\n- Tracks poachers in real-time\n- Counts animal populations from photos\n- Protects habitats\n\n**3. Deforestation Monitoring 🌳**\n- Analyzes satellite images\n- Detects illegal logging\n- Tracks forest health\n- Helps reforestation efforts\n\n**4. Ocean Cleanup 🌊**\n- Identifies plastic pollution\n- Maps ocean currents\n- Monitors coral reef health\n- Tracks marine life\n\n**5. Energy Optimization ⚡**\n- Makes power grids more efficient\n- Reduces energy waste\n- Optimizes solar and wind energy\n- Smart thermostats save energy\n\n**6. Sustainable Farming 🌾**\n- Optimizes water use\n- Reduces pesticide needs\n- Predicts crop yields\n- Prevents food waste\n\n**7. Recycling Revolution ♻️**\n- Sorts recyclables faster\n- Identifies materials better than humans\n- Reduces contamination\n- Makes recycling more efficient\n\n## What YOU Can Do! 💪\n\n### Be an Eco-Friendly AI User\n\n**1. Use AI Thoughtfully**\n- ✅ Think: Do I really need AI for this?\n- ✅ Combine multiple questions in one\n- ❌ Don''t generate hundreds of images for fun\n- ❌ Avoid unnecessary AI use\n\n**2. Support Green AI**\n- ✅ Choose companies using renewable energy\n- ✅ Learn about sustainable tech\n- ✅ Support eco-friendly AI development\n\n**3. Use AI for Good**\n- ✅ Learn about environmental issues\n- ✅ Use AI to solve sustainability problems\n- ✅ Create eco-awareness projects\n- ✅ Share environmental knowledge\n\n**4. Spread Awareness**\n- 📢 Tell others about AI''s environmental impact\n- 🌱 Promote sustainable tech habits\n- 🌍 Be a voice for the planet\n\n### Cool Projects You Could Do\n\n1. **Use AI to identify plants and animals in your area**\n   - Learn about local ecosystems!\n\n2. **Analyze your family''s energy use**\n   - Find ways to save power\n\n3. **Create an environmental awareness campaign**\n   - Use AI to make educational content\n\n4. **Track local recycling**\n   - Help your community recycle better\n\n5. **Monitor air quality**\n   - Use AI tools to track pollution\n\n## The Balance ⚖️\n\nAI has both positive and negative environmental impacts.\n\n**The key?**\n- Use AI purposefully, not wastefully\n- Support green technology\n- Use AI to HELP the environment\n- Make informed choices\n\n**Together, we can make AI a force for environmental good!** 🌟🌍"
}', 2, TRUE),

-- Interactive Exercise
('ethics-6', 'interactive', 'Eco-Friendly AI Choices!', '{
  "type": "environmental_impact",
  "instructions": "Rate each AI use as eco-friendly or wasteful!",
  "scenarios": [
    {
      "scenario": "Generating 50 AI images of different cat breeds just because you''re bored",
      "rating": "wasteful",
      "explanation": "This uses a lot of energy for no real purpose. Generate thoughtfully, not excessively!",
      "better_choice": "Generate 3-5 images you''ll actually use or learn from"
    },
    {
      "scenario": "Using AI to help design a solar panel system for your school",
      "rating": "eco-friendly",
      "explanation": "Using AI to create sustainable solutions is a great use of resources! The environmental benefit outweighs the energy cost.",
      "impact": "This could save tons of energy in the long run!"
    },
    {
      "scenario": "Asking AI 20 separate questions about climate change in 20 separate conversations",
      "rating": "inefficient",
      "explanation": "Each conversation uses energy. Combine your questions into one conversation instead!",
      "better_choice": "Ask all your climate questions in one conversation to save energy"
    },
    {
      "scenario": "Using AI to identify and track local bird species for a conservation project",
      "rating": "eco-friendly",
      "explanation": "Using AI for environmental research and conservation is purposeful and beneficial!",
      "impact": "This helps protect wildlife and builds knowledge!"
    },
    {
      "scenario": "Running AI to generate random content you''ll never use or share",
      "rating": "wasteful",
      "explanation": "Generating content just to see what happens wastes energy. Have a purpose!",
      "better_choice": "Use AI when you have a real goal or need"
    },
    {
      "scenario": "Using AI to help your community reduce food waste",
      "rating": "eco-friendly",
      "explanation": "Solving real environmental problems is an excellent use of AI!",
      "impact": "This reduces waste AND helps people!"
    }
  ],
  "takeaway": "Use AI with purpose! Every query has an environmental cost - make it count! 🌱"
}', 3, TRUE),

-- Quiz
('ethics-6', 'quiz', 'Environment & AI Quiz!', '{
  "questions": [
    {
      "question": "Why does AI use so much energy?",
      "options": [
        "It doesn''t use much energy",
        "It requires powerful computers running 24/7 in data centers",
        "Only because of solar power",
        "AI is magic and needs no energy"
      ],
      "correctAnswer": 1,
      "explanation": "AI requires massive data centers with thousands of computers running all the time, which uses lots of energy!"
    },
    {
      "question": "How can AI HELP the environment?",
      "options": [
        "It can''t help at all",
        "By predicting climate patterns, monitoring wildlife, and optimizing energy use",
        "Only by being turned off",
        "By making more computers"
      ],
      "correctAnswer": 1,
      "explanation": "AI helps in many ways: climate prediction, wildlife protection, energy optimization, and more!"
    },
    {
      "question": "What''s an eco-friendly way to use AI?",
      "options": [
        "Generate hundreds of images for no reason",
        "Use it to solve environmental problems and learn",
        "Use it constantly without thinking",
        "Never use it at all"
      ],
      "correctAnswer": 1,
      "explanation": "Using AI purposefully to solve problems and learn is eco-friendly! Avoid wasteful, unnecessary use."
    },
    {
      "question": "What should you do to reduce AI''s environmental impact?",
      "options": [
        "Use it excessively",
        "Think before using it and combine questions when possible",
        "Never think about it",
        "Only use it at night"
      ],
      "correctAnswer": 1,
      "explanation": "Being thoughtful about when and how you use AI helps reduce unnecessary energy consumption!"
    },
    {
      "question": "Training a large AI model uses about as much energy as:",
      "options": [
        "Charging a phone once",
        "Running a light bulb for a day",
        "Five cars driving their entire lifetime",
        "Boiling water for tea"
      ],
      "correctAnswer": 2,
      "explanation": "Training large AI models requires enormous amounts of energy - as much as 5 cars use in their entire lifetime!"
    }
  ]
}', 4, TRUE),

-- AI Lab Exercise
('ethics-6', 'ai_lab', 'AI for Environmental Good!', '{
  "instructions": "Use AI to learn about and help the environment!",
  "exercises": [
    {
      "title": "Climate Change Research",
      "prompt": "Explain 3 ways AI is being used to fight climate change. I want to understand how technology can help our planet.",
      "goal": "Learn about positive AI applications",
      "environmental_value": "Understanding how AI helps the environment inspires eco-friendly innovation!"
    },
    {
      "title": "Local Ecosystem Project",
      "prompt": "I want to start a project to help local wildlife in my area. What are some ways I could use technology and AI to monitor and protect local animals and plants?",
      "goal": "Plan an environmental project",
      "environmental_value": "Using AI for conservation makes a real positive impact!"
    },
    {
      "title": "Energy Saving Ideas",
      "prompt": "What are 5 ways my family could reduce our energy consumption at home? Focus on practical, easy changes.",
      "goal": "Learn sustainable practices",
      "environmental_value": "Reducing personal energy use multiplies your positive impact!"
    },
    {
      "title": "Sustainable Future",
      "prompt": "Imagine it''s 2050 and AI has helped solve major environmental problems. Describe what that world looks like and how AI contributed.",
      "goal": "Envision positive futures",
      "environmental_value": "Imagining solutions helps us work toward them!"
    }
  ],
  "eco_tip": "💡 Remember: Combine related questions in one conversation to save energy! Every query counts. 🌍"
}', 5, TRUE);

-- ============================================================================
-- LESSON 7: Future of AI - COMPLETE
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
-- Introduction
('ethics-7', 'text', 'The Future with AI', '{
  "body": "# Future of AI 🚀\n\n## Welcome to Tomorrow! 🌟\n\nAI is changing FAST! What seems like science fiction today might be reality tomorrow.\n\nLet''s explore what''s coming... and how YOU fit in! 🎯\n\n## The Near Future (1-5 Years) 📅\n\n### In Your School 🏫\n- **AI Tutors**: Personal AI helpers for every subject\n- **Adaptive Learning**: Lessons that adjust to YOUR pace\n- **Language Translation**: Talk to anyone, anywhere!\n- **Creative Tools**: AI helps you write, draw, and create\n\n### At Home 🏠\n- **Smarter Homes**: AI manages energy, security, comfort\n- **Health Monitoring**: AI tracks your health and fitness\n- **Cooking Assistants**: AI helps plan meals and cook\n- **Entertainment**: Personalized games, shows, and music\n\n### In Healthcare 🏥\n- **Disease Detection**: AI spots illnesses early\n- **Drug Development**: AI creates new medicines faster\n- **Surgery Assistants**: AI helps doctors operate precisely\n- **Mental Health Support**: AI provides counseling resources\n\n### In Transportation 🚗\n- **Self-Driving Cars**: Safer, more efficient travel\n- **Traffic Optimization**: Less time stuck in traffic\n- **Delivery Drones**: Packages arrive by air!\n- **Smart Public Transit**: Buses and trains that predict demand\n\n## The Medium Future (5-15 Years) 🔮\n\n### Revolutionary Changes\n\n**1. Education Transformation** 📚\n- School becomes ultra-personalized\n- Learn at your own perfect pace\n- AI explains concepts until YOU understand\n- Virtual reality field trips anywhere!\n\n**2. Work Revolution** 💼\n- Many jobs change completely\n- Some jobs disappear\n- NEW jobs are created\n- More focus on creativity and problem-solving\n\n**3. Creative Explosion** 🎨\n- AI helps EVERYONE create art, music, stories\n- Your imagination is the only limit\n- Collaborate with AI on amazing projects\n- New forms of art we can''t imagine yet!\n\n**4. Science Breakthroughs** 🔬\n- AI solves complex problems\n- Discovers new materials\n- Fights climate change\n- Explores space\n\n## The Distant Future (15+ Years) 🌌\n\n**Possibilities include:**\n- 🤖 AI companions that know you perfectly\n- 🏙️ Smart cities that optimize everything\n- 🌍 AI helping solve global challenges\n- 🚀 AI assisting space exploration\n- 🧬 Personalized medicine for everyone\n- 🌱 AI-powered environmental restoration\n\n## What About Jobs? 💼\n\n### Jobs That Might Change or Disappear:\n- Simple repetitive tasks\n- Basic data entry\n- Some driving jobs\n- Routine customer service\n\n### Jobs That Will Grow:\n- **AI Trainers**: Teaching AI new things\n- **AI Ethicists**: Keeping AI fair and safe\n- **Creative Directors**: Leading AI-human teams\n- **Care Professions**: Humans helping humans\n- **Problem Solvers**: Tackling complex challenges\n\n### NEW Jobs We Can''t Imagine Yet!\nJust like \"Social Media Manager\" didn''t exist 20 years ago, future jobs will be created that we can''t predict!"
}', 1, TRUE),

-- Future Careers
('ethics-7', 'text', 'Your Future with AI', '{
  "body": "## Careers of the Future 🌟\n\nHere are real careers YOU might have:\n\n### 1. AI Trainer 🎓\n**What**: Teaching AI systems to understand the world\n**Skills Needed**: Communication, patience, subject expertise\n**Cool Factor**: You make AI smarter!\n\n### 2. AI Ethics Consultant 🛡️\n**What**: Making sure AI is fair, safe, and helpful\n**Skills Needed**: Critical thinking, empathy, ethics knowledge\n**Cool Factor**: You''re an AI superhero!\n\n### 3. Human-AI Interaction Designer 🎨\n**What**: Designing how humans and AI work together\n**Skills Needed**: Creativity, psychology, design\n**Cool Factor**: You shape the future of technology!\n\n### 4. AI Safety Researcher 🔬\n**What**: Studying how to keep AI safe and beneficial\n**Skills Needed**: Problem-solving, technical skills, foresight\n**Cool Factor**: You protect humanity''s future!\n\n### 5. Prompt Engineer 💬\n**What**: Expert at communicating with AI systems\n**Skills Needed**: Language, creativity, logic\n**Cool Factor**: You speak AI fluently!\n\n### 6. AI-Augmented Creative Director 🎭\n**What**: Leading projects that combine human and AI creativity\n**Skills Needed**: Artistic vision, leadership, tech-savviness\n**Cool Factor**: You create things never seen before!\n\n### 7. Personalized Learning Architect 📚\n**What**: Designing custom education experiences with AI\n**Skills Needed**: Teaching, psychology, AI knowledge\n**Cool Factor**: You help everyone learn their best way!\n\n### 8. Environmental AI Specialist 🌍\n**What**: Using AI to solve climate and environmental problems\n**Skills Needed**: Environmental science, data analysis, passion\n**Cool Factor**: You save the planet with AI!\n\n## How to Prepare 🎯\n\n### Skills for the AI Future\n\n**1. Critical Thinking** 🧠\n- Question everything\n- Analyze problems\n- Think creatively\n- Make connections\n\n**2. Creativity** 🎨\n- Express yourself\n- Imagine possibilities\n- Combine ideas in new ways\n- Create original work\n\n**3. Communication** 💬\n- Express ideas clearly\n- Listen actively\n- Collaborate with others\n- Work in teams\n\n**4. Ethics & Empathy** 💛\n- Understand right and wrong\n- Care about others\n- Consider different perspectives\n- Make responsible choices\n\n**5. Adaptability** 🌊\n- Embrace change\n- Learn continuously\n- Be flexible\n- Try new things\n\n**6. Tech Literacy** 💻\n- Understand how tech works\n- Use tools effectively\n- Stay curious about innovation\n- Don''t fear technology\n\n## Your Advantages! 💪\n\nAs a kid learning about AI NOW, you have superpowers:\n\n✅ **You''re Growing Up With AI**\n- It''s natural to you\n- You''re not intimidated\n- You understand it intuitively\n\n✅ **You Can Shape the Future**\n- Your generation will decide how AI is used\n- You can build ethical AI from the start\n- You''ll create new applications\n\n✅ **You Have Time to Prepare**\n- Learn and experiment now\n- Build skills gradually\n- Make mistakes and grow\n\n✅ **You See Possibilities**\n- You imagine what could be\n- You''re not limited by \"how things are\"\n- You think big!\n\n## The Future is Exciting! 🎉\n\nYes, things will change.\nYes, it might feel uncertain.\n\nBut YOU have the power to:\n- ✨ Shape that future\n- ✨ Use AI for good\n- ✨ Create amazing things\n- ✨ Help others\n- ✨ Make the world better\n\n**The future isn''t something that happens TO you...**\n**It''s something YOU create!** 🚀"
}', 2, TRUE),

-- Interactive Exercise
('ethics-7', 'interactive', 'Design Your AI Future!', '{
  "type": "future_planning",
  "instructions": "Think about YOUR future with AI! Choose your path and see possibilities.",
  "scenarios": [
    {
      "interest": "I love art and creativity!",
      "ai_future_1": {
        "career": "AI-Augmented Artist",
        "description": "Use AI as a creative partner to make art, music, or stories that blend human imagination with AI capabilities",
        "path": "Study art, learn prompt engineering, practice creative AI tools",
        "impact": "Create entirely new forms of art and inspire others!"
      },
      "ai_future_2": {
        "career": "Human-AI Experience Designer",
        "description": "Design beautiful, intuitive ways for people to interact with AI systems",
        "path": "Study design, psychology, and user experience with AI",
        "impact": "Make technology accessible and delightful for everyone!"
      }
    },
    {
      "interest": "I care about helping people!",
      "ai_future_1": {
        "career": "AI Ethics Advocate",
        "description": "Ensure AI is used fairly, safely, and for the benefit of all people",
        "path": "Study ethics, social impact, and AI safety",
        "impact": "Protect people and make sure AI helps everyone equally!"
      },
      "ai_future_2": {
        "career": "AI-Assisted Healthcare Worker",
        "description": "Use AI tools to help diagnose, treat, and care for patients better",
        "path": "Study medicine or nursing, learn AI healthcare applications",
        "impact": "Save lives and improve health for everyone!"
      }
    },
    {
      "interest": "I love nature and the environment!",
      "ai_future_1": {
        "career": "Environmental AI Specialist",
        "description": "Use AI to monitor, protect, and restore the environment",
        "path": "Study environmental science, learn AI tools for conservation",
        "impact": "Save endangered species and fight climate change!"
      },
      "ai_future_2": {
        "career": "Sustainable AI Engineer",
        "description": "Build eco-friendly AI systems that minimize environmental impact",
        "path": "Study computer science and sustainable technology",
        "impact": "Make AI green and protect our planet''s future!"
      }
    },
    {
      "interest": "I enjoy solving problems and building things!",
      "ai_future_1": {
        "career": "AI Safety Researcher",
        "description": "Study and solve the hardest problems in keeping AI safe and beneficial",
        "path": "Study computer science, mathematics, and AI safety",
        "impact": "Ensure AI remains helpful and never harmful!"
      },
      "ai_future_2": {
        "career": "AI Innovation Engineer",
        "description": "Build new AI applications that solve real-world problems",
        "path": "Study engineering, programming, and AI development",
        "impact": "Create solutions to challenges we face today!"
      }
    }
  ],
  "reflection": "Your interests + AI skills = Amazing future career! What problems do YOU want to solve? 🌟"
}', 3, TRUE),

-- Quiz
('ethics-7', 'quiz', 'Future of AI Quiz!', '{
  "questions": [
    {
      "question": "In the near future (1-5 years), AI will likely:",
      "options": [
        "Replace all teachers and doctors",
        "Help personalize education and healthcare",
        "Take over the world",
        "Disappear completely"
      ],
      "correctAnswer": 1,
      "explanation": "AI will assist and enhance education and healthcare, helping professionals do their jobs better!"
    },
    {
      "question": "What''s a skill that will be important in an AI-powered future?",
      "options": [
        "Memorizing facts",
        "Doing repetitive tasks",
        "Critical thinking and creativity",
        "Avoiding all technology"
      ],
      "correctAnswer": 2,
      "explanation": "AI can handle facts and repetitive tasks - humans will focus on creativity, critical thinking, and problem-solving!"
    },
    {
      "question": "How can you prepare for a future with AI?",
      "options": [
        "Ignore AI and hope it goes away",
        "Learn continuously, be creative, and use AI ethically",
        "Learn only technical skills",
        "Wait until you''re older to think about it"
      ],
      "correctAnswer": 1,
      "explanation": "Continuous learning, creativity, and ethical understanding will help you thrive in an AI-powered future!"
    },
    {
      "question": "Future careers with AI will likely include:",
      "options": [
        "Only programming jobs",
        "No jobs for humans",
        "New careers we can''t imagine yet, combining human skills with AI",
        "Exactly the same jobs we have now"
      ],
      "correctAnswer": 2,
      "explanation": "AI will create many new careers that combine human creativity, empathy, and ethics with AI capabilities!"
    },
    {
      "question": "What advantage do kids learning about AI now have?",
      "options": [
        "No advantages at all",
        "Time to prepare and shape the future of AI",
        "Only the advantage of using games",
        "They don''t need to learn about it"
      ],
      "correctAnswer": 1,
      "explanation": "Learning about AI now gives you time to build skills and help shape how AI is used in the future!"
    }
  ]
}', 4, TRUE),

-- AI Lab Exercise
('ethics-7', 'ai_lab', 'Explore Future Possibilities!', '{
  "instructions": "Use AI to explore and imagine the future!",
  "exercises": [
    {
      "title": "My Future Career",
      "prompt": "I''m interested in [your interest]. What are 3 future careers that combine this interest with AI? Describe what each job would involve and what skills I should develop.",
      "goal": "Explore career possibilities that excite you",
      "tip": "Replace [your interest] with what you actually love - art, science, helping people, sports, etc.!"
    },
    {
      "title": "Problem Solver",
      "prompt": "What''s a current world problem (like climate change, education access, or healthcare) that AI could help solve in the next 10-20 years? Explain how.",
      "goal": "Understand AI''s potential positive impact",
      "tip": "Think about problems YOU care about!"
    },
    {
      "title": "A Day in 2040",
      "prompt": "Describe a typical day in the life of a teenager in 2040. How has AI changed school, home, transportation, and entertainment? Make it realistic and exciting!",
      "goal": "Envision future possibilities",
      "tip": "Be creative! But think about what''s actually possible, not just science fiction."
    },
    {
      "title": "Skills I Need",
      "prompt": "Based on how AI is changing the world, what are the top 5 skills I should develop now to succeed in the future? Explain why each is important.",
      "goal": "Create your personal development plan",
      "tip": "Take notes on this - it''s your roadmap to the future!"
    }
  ],
  "inspiration": "The future is being built RIGHT NOW - and YOU can be one of the builders! 🚀"
}', 5, TRUE);

-- ============================================================================
-- LESSON 8: Be an AI Guardian - COMPLETE
-- ============================================================================

INSERT INTO public.lesson_content (lesson_id, content_type, title, content, display_order, is_visible) VALUES
-- Introduction
('ethics-8', 'text', 'Your AI Guardian Pledge', '{
  "body": "# Be an AI Guardian! 🛡️\n\n## Congratulations! 🎉\n\nYou''ve learned SO MUCH about AI ethics and safety:\n\n✅ What makes AI ethical\n✅ How to recognize and fight bias\n✅ How to protect privacy\n✅ How to spot and stop misinformation\n✅ How to use AI responsibly\n✅ AI''s environmental impact\n✅ The future of AI\n\nNow it''s time to become an **AI Guardian**! 🌟\n\n## What is an AI Guardian? 🛡️\n\nAn AI Guardian is someone who:\n\n### Uses AI Ethically ✨\n- Makes fair choices\n- Respects everyone\n- Thinks before acting\n- Does the right thing\n\n### Protects Others 🛡️\n- Keeps information safe\n- Stands up against misuse\n- Helps people stay safe online\n- Shares knowledge\n\n### Creates Positive Change 🌍\n- Uses AI to help, not harm\n- Solves real problems\n- Inspires others\n- Makes the world better\n\n### Learns Continuously 📚\n- Stays curious\n- Keeps up with changes\n- Asks questions\n- Grows and improves\n\n## The AI Guardian Pledge 📜\n\nAs an AI Guardian, I promise to:\n\n### 🌟 Be Fair\n**I will:**\n- Use and support AI that treats everyone equally\n- Speak up when I see bias\n- Give everyone a fair chance\n- Never discriminate\n\n### 🌟 Be Safe\n**I will:**\n- Protect my privacy and information\n- Help others stay safe online\n- Not share what should stay private\n- Make security a priority\n\n### 🌟 Be Honest\n**I will:**\n- Tell the truth about AI''s role\n- Verify information before sharing\n- Give credit where it''s due\n- Fight misinformation\n\n### 🌟 Be Responsible\n**I will:**\n- Use AI for good, not harm\n- Think about consequences\n- Take accountability for my actions\n- Help, not hurt\n\n### 🌟 Be Kind\n**I will:**\n- Spread positivity, not negativity\n- Help others learn and grow\n- Support my community\n- Treat others how I want to be treated\n\n### 🌟 Be Curious\n**I will:**\n- Keep learning about AI and ethics\n- Ask questions when unsure\n- Stay informed about changes\n- Never stop growing\n\n### 🌟 Be Brave\n**I will:**\n- Speak up when AI is misused\n- Stand up for what''s right\n- Help make positive changes\n- Lead by example\n\n### 🌟 Be Mindful\n**I will:**\n- Consider AI''s environmental impact\n- Use resources thoughtfully\n- Think about the future\n- Care for our planet"
}', 1, TRUE),

-- Your Mission
('ethics-8', 'text', 'Your Guardian Mission', '{
  "body": "## Your Mission as an AI Guardian 🎯\n\nNow that you''ve completed this module, here''s what you can do:\n\n### At School 🏫\n\n**1. Share Your Knowledge**\n- Teach classmates about AI ethics\n- Help friends use AI responsibly\n- Start an AI ethics club\n- Give a presentation about what you learned\n\n**2. Lead by Example**\n- Use AI ethically for schoolwork\n- Give credit when AI helps you\n- Verify information before sharing\n- Show others the right way\n\n**3. Speak Up**\n- Tell teachers if you see AI misuse\n- Report cyberbullying\n- Stand against bias and unfairness\n- Be a positive voice\n\n### At Home 👨‍👩‍👧‍👦\n\n**1. Help Your Family**\n- Teach parents about AI safety\n- Help siblings use AI responsibly\n- Set up privacy protections\n- Share what you''ve learned\n\n**2. Make Smart Choices**\n- Use AI thoughtfully, not excessively\n- Protect personal information\n- Verify facts before believing them\n- Consider environmental impact\n\n**3. Have Conversations**\n- Discuss AI ethics at dinner\n- Ask questions together\n- Share interesting articles\n- Learn as a family\n\n### Online 🌐\n\n**1. Be a Positive Force**\n- Create helpful, kind content\n- Combat misinformation\n- Support ethical AI use\n- Spread awareness\n\n**2. Protect Others**\n- Report harmful content\n- Help friends spot fake news\n- Share safety tips\n- Build a better online community\n\n**3. Use AI for Good**\n- Create educational content\n- Solve problems\n- Help others learn\n- Make positive impact\n\n### In Your Community 🌍\n\n**1. Start Projects**\n- Environmental monitoring\n- Community education\n- Safety awareness campaigns\n- Local problem-solving\n\n**2. Volunteer**\n- Help seniors learn about AI safety\n- Teach younger kids\n- Support digital literacy programs\n- Give back to your community\n\n**3. Advocate**\n- Speak up for ethical AI\n- Support fair technology policies\n- Promote digital rights\n- Be a voice for change\n\n## The Ripple Effect 🌊\n\nWhen YOU act as an AI Guardian:\n\n**One Person** (You!) 🙋\n↓\n**Teaches 3 Friends** 👥👥👥\n↓\n**Each teaches 3 more** 👥×9\n↓\n**And so on...** 🌊\n\n**Your actions create WAVES of positive change!**\n\nOne person CAN make a difference. 💫\n\n## Keep Growing 🌱\n\n**AI Guardian Skills to Develop:**\n\n📚 **Keep Learning**\n- Read about AI developments\n- Take more courses\n- Try new tools ethically\n- Stay informed\n\n🤝 **Connect with Others**\n- Join AI ethics communities\n- Attend workshops or talks\n- Share experiences\n- Learn from others\n\n🔬 **Experiment Safely**\n- Try AI tools responsibly\n- Build ethical projects\n- Test your knowledge\n- Create positive content\n\n💪 **Build Resilience**\n- Don''t be discouraged by setbacks\n- Learn from mistakes\n- Keep trying\n- Stay committed\n\n## You Are Ready! 🏆\n\nYou''ve completed the Ethics & Safety AI module!\n\nYou now have:\n- ✅ Knowledge of AI ethics\n- ✅ Skills to use AI safely\n- ✅ Understanding of AI''s impact\n- ✅ Tools to make good choices\n- ✅ A mission to help others\n\n**You''re not just learning about AI...**\n**You''re shaping its future!** 🚀\n\n**Welcome to the AI Guardians!** 🛡️✨\n\nWear your badge with pride and remember:\n\n**With great power comes great responsibility** - and YOU have the power to make AI a force for good in the world! 🌍💛"
}', 2, TRUE),

-- Interactive Exercise
('ethics-8', 'interactive', 'Your Guardian Action Plan!', '{
  "type": "action_planning",
  "instructions": "Create your personal AI Guardian action plan! Choose what YOU will do.",
  "categories": [
    {
      "area": "This Week",
      "actions": [
        {
          "action": "Share one thing I learned with a friend or family member",
          "impact": "Spread knowledge and start conversations",
          "difficulty": "easy"
        },
        {
          "action": "Review my privacy settings on apps I use",
          "impact": "Protect my personal information better",
          "difficulty": "easy"
        },
        {
          "action": "Fact-check something before sharing it online",
          "impact": "Stop misinformation from spreading",
          "difficulty": "easy"
        },
        {
          "action": "Use AI to learn something new (responsibly!)",
          "impact": "Practice ethical AI use",
          "difficulty": "easy"
        }
      ]
    },
    {
      "area": "This Month",
      "actions": [
        {
          "action": "Teach a family member about AI safety",
          "impact": "Help loved ones stay safe online",
          "difficulty": "medium"
        },
        {
          "action": "Start an AI ethics project at school",
          "impact": "Spread awareness to classmates",
          "difficulty": "medium"
        },
        {
          "action": "Create something helpful using AI ethically",
          "impact": "Use AI for positive purposes",
          "difficulty": "medium"
        },
        {
          "action": "Speak up if I see AI being misused",
          "impact": "Prevent harm and teach others",
          "difficulty": "medium"
        }
      ]
    },
    {
      "area": "This Year",
      "actions": [
        {
          "action": "Lead a presentation or workshop on AI ethics",
          "impact": "Educate many people at once",
          "difficulty": "challenging"
        },
        {
          "action": "Start an AI ethics club or group",
          "impact": "Build a community of AI Guardians",
          "difficulty": "challenging"
        },
        {
          "action": "Create a community project using AI for good",
          "impact": "Make real positive change locally",
          "difficulty": "challenging"
        },
        {
          "action": "Become a go-to resource for AI ethics questions",
          "impact": "Help many people over time",
          "difficulty": "challenging"
        }
      ]
    }
  ],
  "commitment": "Choose at least ONE action from EACH time period. Write them down. Make them happen! 🎯"
}', 3, TRUE),

-- Final Quiz
('ethics-8', 'quiz', 'AI Guardian Challenge!', '{
  "questions": [
    {
      "question": "What makes someone an AI Guardian?",
      "options": [
        "Using AI more than anyone else",
        "Having the newest AI tools",
        "Using AI ethically and helping others do the same",
        "Knowing all the AI tricks and shortcuts"
      ],
      "correctAnswer": 2,
      "explanation": "AI Guardians use AI responsibly, protect others, and help create a better, safer future for everyone!"
    },
    {
      "question": "If you see someone using AI to bully others, you should:",
      "options": [
        "Ignore it - it''s not your problem",
        "Join them because it seems fun",
        "Speak up, report it, and help them understand the right way",
        "Record it and share it with friends"
      ],
      "correctAnswer": 2,
      "explanation": "AI Guardians speak up against misuse, protect others, and help people learn to use AI ethically!"
    },
    {
      "question": "The AI Guardian Pledge includes being:",
      "options": [
        "Fair, safe, honest, responsible, kind, curious, brave, and mindful",
        "Fast, smart, popular, and rich",
        "Perfect and never making mistakes",
        "Better than everyone else at using AI"
      ],
      "correctAnswer": 0,
      "explanation": "AI Guardians commit to being fair, safe, honest, responsible, kind, curious, brave, and mindful!"
    },
    {
      "question": "How can you make a difference as an AI Guardian?",
      "options": [
        "Keep your knowledge secret",
        "Only care about yourself",
        "Share knowledge, lead by example, and create positive change",
        "Wait until you''re an adult to do anything"
      ],
      "correctAnswer": 2,
      "explanation": "By sharing knowledge, leading by example, and taking action, you create ripples of positive change!"
    },
    {
      "question": "What''s the most important thing you learned in this module?",
      "options": [
        "AI is scary and should be avoided",
        "AI doesn''t need ethics",
        "You have the power to shape how AI is used and make it a force for good",
        "Only adults can influence AI''s future"
      ],
      "correctAnswer": 2,
      "explanation": "YOU have the power to use AI ethically, protect others, and help create a better future! That''s what being an AI Guardian is all about! 🛡️"
    },
    {
      "question": "An AI Guardian stays curious and:",
      "options": [
        "Never asks questions",
        "Stops learning after this module",
        "Keeps learning, growing, and staying informed",
        "Thinks they know everything"
      ],
      "correctAnswer": 2,
      "explanation": "AI Guardians never stop learning! Staying curious and informed helps you keep making good choices."
    }
  ]
}', 4, TRUE),

-- AI Lab Final Exercise
('ethics-8', 'ai_lab', 'Your First Guardian Mission!', '{
  "instructions": "Complete these final exercises to start your journey as an AI Guardian!",
  "exercises": [
    {
      "title": "Teach Someone",
      "prompt": "Explain to someone (a friend, family member, or even AI) what it means to be an AI Guardian. Include the three most important things you learned.",
      "goal": "Practice teaching others about AI ethics",
      "guardian_skill": "Sharing knowledge and leading by example"
    },
    {
      "title": "Plan Your Impact",
      "prompt": "Describe one specific project or action you''ll take this month to be an AI Guardian. What will you do? Who will it help? How will you measure success?",
      "goal": "Create a concrete action plan",
      "guardian_skill": "Taking responsibility and creating change"
    },
    {
      "title": "Future Vision",
      "prompt": "Imagine you''re 10 years in the future, looking back. Write a letter to yourself NOW, describing how being an AI Guardian changed your life and the lives of others. What did you accomplish?",
      "goal": "Envision your positive impact",
      "guardian_skill": "Thinking long-term and staying motivated"
    },
    {
      "title": "The Guardian Oath",
      "prompt": "Write your own personal AI Guardian oath in your own words. What do YOU commit to? Make it meaningful to you!",
      "goal": "Create your personal commitment",
      "guardian_skill": "Making it personal and authentic"
    }
  ],
  "final_message": "🛡️ Congratulations, AI Guardian! Your journey has just begun. The future is in YOUR hands. Use your powers wisely, help others, and make the world better with AI! 🌟🌍✨\n\nRemember: You''re not alone. You''re part of a growing community of AI Guardians around the world. Together, we''re shaping the future! 💪"
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
    FROM public.lesson_content
    WHERE lesson_id LIKE 'ethics-%';

    RAISE NOTICE 'Ethics & Safety AI Module Complete:';
    RAISE NOTICE '  - % lessons created', lesson_count;
    RAISE NOTICE '  - % content blocks created', content_count;
    RAISE NOTICE 'Lessons 4-8 now include comprehensive interactive exercises, quizzes, and AI Lab activities!';
END $$;
