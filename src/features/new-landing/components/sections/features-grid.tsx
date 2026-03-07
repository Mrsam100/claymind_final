import { motion } from 'motion/react';
import { Plane, Shield, Star } from 'lucide-react';

const features = [
  {
    icon: Plane,
    title: 'Learn by Doing',
    description: 'Create real AI projects while learning',
    delay: 0.2,
  },
  {
    icon: Shield,
    title: 'Safe & Fun',
    description: 'Kid-friendly content with parental controls',
    delay: 0.4,
  },
  {
    icon: Star,
    title: 'Earn Badges',
    description: 'Unlock achievements as you progress',
    delay: 0.6,
  },
];

export default function FeaturesGrid() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-[#B794F6] to-[#9D6DFF] rounded-[40px] p-8 lg:p-10 text-center text-white shadow-xl h-full">
                <motion.div
                  className="inline-flex items-center justify-center mb-6"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-16 h-16 text-white stroke-[2.5]" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg text-white/90 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
