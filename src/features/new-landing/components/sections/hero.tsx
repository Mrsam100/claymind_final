import { motion } from 'motion/react';
import { Sparkles, Play, Video, Clock, Image as ImageIcon, Wand2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../app/components/ui/button';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF8FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full mb-8 shadow-sm border border-purple-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span className="text-base font-semibold text-gray-700">AI Literacy for Kids 6-15</span>
            </motion.div>

            <motion.h1
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-gray-900">Learn AI by building</span>
              <br />
              <span className="text-[#8B3DFF]">apps, images, and videos</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Welcome to ClayMind! A magical playground where kids discover artificial intelligence through creative projects and hands-on learning.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-[#8B3DFF] hover:bg-[#7B2EEF] text-white px-8 py-7 text-lg rounded-full font-semibold shadow-lg shadow-purple-300/50"
                onClick={() => navigate('/signup')}
              >
                <Play className="mr-2 w-5 h-5 fill-white" />
                Start Learning Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#8B3DFF] text-[#8B3DFF] hover:bg-purple-50 px-8 py-7 text-lg rounded-full font-semibold"
                onClick={() => navigate('/parents')}
              >
                For Parents
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Floating Icons */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Central Character */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="relative"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-48 h-64 bg-gradient-to-b from-[#9D6DFF] to-[#8B3DFF] rounded-[80px] shadow-2xl relative">
                  <div className="absolute top-24 left-12 flex gap-4">
                    <div className="w-8 h-2 bg-white/40 rounded-full"></div>
                    <div className="w-8 h-2 bg-white/40 rounded-full"></div>
                  </div>
                </div>
                <motion.div
                  className="absolute -top-4 -right-16 bg-white px-5 py-3 rounded-2xl shadow-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <p className="text-sm font-medium text-gray-700 whitespace-nowrap">Let's learn AI together!</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Floating Icon - Clock */}
            <motion.div
              className="absolute top-32 left-16"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 bg-gradient-to-br from-[#A78BFA] to-[#8B3DFF] rounded-3xl shadow-xl flex items-center justify-center"
              >
                <Clock className="w-12 h-12 text-white" />
              </motion.div>
            </motion.div>

            {/* Floating Icon - Image */}
            <motion.div
              className="absolute top-12 right-24"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 bg-gradient-to-br from-[#FF8DC7] to-[#FF6BA9] rounded-2xl shadow-xl flex items-center justify-center"
              >
                <ImageIcon className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>

            {/* Floating Icon - Video */}
            <motion.div
              className="absolute bottom-40 left-24"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                animate={{ y: [0, -18, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-28 h-28 bg-gradient-to-br from-[#60D5FF] to-[#2BB0E8] rounded-3xl shadow-xl flex items-center justify-center"
              >
                <Video className="w-14 h-14 text-white" />
              </motion.div>
            </motion.div>

            {/* Floating Icon - Wand */}
            <motion.div
              className="absolute bottom-32 right-16"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 bg-gradient-to-br from-[#FFB84D] to-[#FF9500] rounded-3xl shadow-xl flex items-center justify-center"
              >
                <Wand2 className="w-12 h-12 text-white" />
              </motion.div>
            </motion.div>

            {/* Sparkle decorations */}
            <motion.div
              className="absolute top-20 left-1/2"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </motion.div>
            <motion.div
              className="absolute bottom-24 left-1/3"
              animate={{ scale: [1, 1.3, 1], rotate: [0, -180, -360], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
