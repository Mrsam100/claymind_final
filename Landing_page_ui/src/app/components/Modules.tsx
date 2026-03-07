import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Brain, 
  Video, 
  Shield, 
  Code, 
  Search,
  Sparkles,
  BookOpen
} from 'lucide-react';

export function Modules() {
  const modules = [
    {
      icon: MessageSquare,
      title: "Prompt Engineering",
      description: "Master the art of communicating with AI to get the best results",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      icon: Brain,
      title: "What is AI?",
      description: "Understand AI fundamentals and how machine learning works",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      icon: Video,
      title: "AI Content Creation",
      description: "Create stunning AI videos, images, and multimedia content",
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
    },
    {
      icon: Code,
      title: "Building with AI",
      description: "Develop apps, websites, and projects using AI tools",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
    {
      icon: Search,
      title: "AI Research",
      description: "Learn to conduct research and find information efficiently",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
    },
    {
      icon: Sparkles,
      title: "Mini Machine Learning",
      description: "Build your own simple ML models and understand how they work",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "from-cyan-50 to-cyan-100",
    },
    {
      icon: Shield,
      title: "Ethics & Safety",
      description: "Use AI responsibly and understand its impact on society",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
    },
    {
      icon: BookOpen,
      title: "Advanced Projects",
      description: "Combine skills to create impressive AI-powered projects",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">Our Curriculum</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Module-Based Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI education covering everything from basics to advanced projects
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: 1000 }}
              className="group relative"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${module.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                whileHover={{ scale: 1.05 }}
              />
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full flex flex-col">
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center mb-4`}
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <module.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {module.description}
                </p>
                <motion.div
                  className="mt-4 flex items-center text-sm font-medium text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 p-1 rounded-2xl">
            <div className="bg-white px-8 py-4 rounded-2xl">
              <p className="text-gray-900 font-medium">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">8 comprehensive modules</span>
                {" "}designed to transform beginners into AI creators
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}