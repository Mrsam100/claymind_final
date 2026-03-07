import { motion, useScroll, useTransform } from 'motion/react';
import { Lightbulb, CheckCircle2, Zap } from 'lucide-react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Solution() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const features = [
    "Prompt Engineering mastery",
    "AI Video & Photo Creation",
    "Research with AI tools",
    "Building apps & websites",
    "Ethical AI usage",
    "Mini Machine Learning projects",
  ];

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <Lightbulb className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-600">Our Solution</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Theory + Practical Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            claymind bridges the gap by combining theoretical knowledge with hands-on AI skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ scale }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-20 blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1674049406486-4b1f6e1845fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNvZGluZyUyMGNvbXB1dGVyfGVufDF8fHx8MTc3Mjg5OTE3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Kids learning AI practically"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Hands-On Experience
                  </h3>
                  <p className="text-gray-600">
                    Learn by doing. Our module-based approach ensures kids not only understand AI concepts but can actually use them to create real projects.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl"
            >
              <p className="text-gray-800 italic">
                "We believe the future belongs to those who can harness AI practically, not just understand it theoretically."
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}