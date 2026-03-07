import { motion } from 'motion/react';
import { Users, Star, Rocket } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';

const ageRanges = [
  {
    age: "6-9 years",
    title: "Foundation Builders",
    description: "Introduction to AI concepts through fun, interactive activities and simple projects",
    features: ["Visual learning", "Gamified lessons", "Basic prompts"],
    image: "https://images.unsplash.com/photo-1766932901295-d4185660341b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGtpZHMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzI4OTkxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    age: "10-12 years",
    title: "Skill Developers",
    description: "Hands-on AI projects, creating content, and building simple applications",
    features: ["AI content creation", "App building", "Research skills"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3Mjg5OTE3OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    age: "13-15 years",
    title: "Advanced Creators",
    description: "Complex projects, machine learning basics, and real-world applications",
    features: ["ML projects", "Advanced apps", "Ethics & impact"],
    image: "https://images.unsplash.com/photo-1771765780945-c788a6ce4b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGVhcm5pbmclMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc3Mjg5OTE3OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function AgeGroup() {
  return (
    <section id="ages" className="relative py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Ages 6-15</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Tailored Learning Paths
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Age-appropriate curriculum that grows with your child's abilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {ageRanges.map((range, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.3 } }}
              style={{ perspective: 1000 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />

                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={range.image}
                    alt={range.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <motion.div
                      className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold text-gray-900">{range.age}</span>
                    </motion.div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{range.title}</h3>
                  <p className="text-gray-600 mb-4">{range.description}</p>

                  <div className="space-y-2">
                    {range.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * idx }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="mt-6 flex items-center text-purple-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm">Explore path</span>
                    <Rocket className="w-4 h-4 ml-2" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg">
            <p className="text-gray-900 text-lg">
              Every child progresses at their own pace with{" "}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                personalized learning
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
