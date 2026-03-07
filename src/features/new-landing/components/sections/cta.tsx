import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../app/components/ui/button';

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-[#D77BF7] via-[#B794F6] to-[#FF7D9D] rounded-[60px] p-12 lg:p-20 text-center overflow-hidden shadow-2xl"
        >
          <motion.div
            className="absolute top-10 left-20"
            animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-8 h-8 text-white/40" />
          </motion.div>

          <motion.div
            className="absolute bottom-10 right-20"
            animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-10 h-10 text-white/30" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 right-10"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-6 h-6 text-yellow-300/50" />
          </motion.div>

          <div className="relative z-10">
            <motion.h2
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Start Your AI Journey?
            </motion.h2>

            <motion.p
              className="text-xl lg:text-2xl text-white mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join thousands of kids learning AI the fun way!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FFB84D] to-[#FF9500] hover:from-[#FFA824] hover:to-[#FF8500] text-gray-900 px-10 py-8 text-xl rounded-full font-bold shadow-2xl border-none"
                onClick={() => navigate('/signup')}
              >
                <ArrowRight className="mr-2 w-6 h-6" />
                Get Started for Free
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
