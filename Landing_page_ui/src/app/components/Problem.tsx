import { motion, useScroll, useTransform } from 'motion/react';
import { AlertCircle, Brain, Users, BookOpen } from 'lucide-react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Problem() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const problems = [
    {
      icon: Brain,
      title: "Pure Theory Focus",
      description: "Schools and governments emphasize theoretical AI learning without practical applications",
    },
    {
      icon: Users,
      title: "Missing Practical Skills",
      description: "Kids aren't learning how to use AI tools in real-world scenarios",
    },
    {
      icon: BookOpen,
      title: "No Hands-On Experience",
      description: "Traditional education lacks prompt engineering, AI video creation, and app building",
    },
  ];

  return (
    <section ref={ref} className="relative py-24 bg-white overflow-hidden">
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-semibold text-red-600">The Problem</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            We Saw a Gap in AI Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While everyone talks about AI, no one is teaching kids how to actually use it
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <problem.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ y }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771408427146-09be9a1d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjB0ZWNobm9sb2d5JTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3Mjg5OTE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Traditional AI Education"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <p className="text-lg font-medium">
                Traditional education focuses on what AI is, not how to use it effectively
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}