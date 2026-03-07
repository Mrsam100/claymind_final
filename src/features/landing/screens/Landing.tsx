/**
 * Landing Screen
 * Clean, simple landing page using design tokens
 */

import { motion } from "motion/react";
import { Sparkles, Brain, Image, Video, Shield, Star, Play, ChevronRight, Rocket, Zap, Menu } from "lucide-react";
import { Button3D } from "../../../app/components/3d-button";
import { Card } from "../../../components/ui";

interface LandingProps {
  onGetStarted: () => void;
  onParentView: () => void;
}

export function Landing({ onGetStarted, onParentView }: LandingProps) {
  const modules = [
    { icon: <Brain className="w-8 h-8" />, title: "AI Basics", bg: "bg-gradient-to-br from-purple-500 to-purple-600" },
    { icon: <Sparkles className="w-8 h-8" />, title: "Build Apps", bg: "bg-gradient-to-br from-amber-500 to-orange-500" },
    { icon: <Image className="w-8 h-8" />, title: "Create Images", bg: "bg-gradient-to-br from-blue-500 to-cyan-500" },
    { icon: <Video className="w-8 h-8" />, title: "Make Videos", bg: "bg-gradient-to-br from-pink-500 to-rose-500" },
  ];

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Learn by Doing",
      desc: "Create real AI projects while learning"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Fun",
      desc: "Kid-friendly content with parental controls"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Earn Badges",
      desc: "Unlock achievements as you progress"
    },
  ];

  const testimonials = [
    { name: "Alex, 12", text: "I built my first AI app in just 2 days! So cool!" },
    { name: "Maya, 10", text: "ClayMind makes learning AI feel like playing a game!" },
    { name: "Jordan, 14", text: "Now I understand how AI works. Amazing!" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50">
      {/* Simple Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                ClayMind
              </span>
            </motion.div>

            {/* Nav Actions */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <button
                onClick={onParentView}
                className="hidden md:block px-4 py-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                For Parents
              </button>
              <button
                onClick={onGetStarted}
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                Get Started Free
              </button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Floating Elements */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Floating Decorative Elements */}
        <motion.div
          className="absolute top-20 right-[15%] w-32 h-40 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full opacity-80 hidden lg:block"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Blob character face */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute top-12 left-10 w-2 h-3 bg-white/40 rounded-full" />
            <div className="absolute top-12 right-10 w-2 h-3 bg-white/40 rounded-full" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-32 right-[10%] w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center hidden lg:block"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image className="w-8 h-8 text-white" />
        </motion.div>

        <motion.div
          className="absolute top-48 right-[25%] w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center hidden lg:block"
          animate={{
            y: [0, -12, 0],
            x: [0, 8, 0]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Video className="w-7 h-7 text-white" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-[5%] w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center hidden lg:block"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Sparkles className="w-6 h-6 text-white" />
        </motion.div>

        {/* Speech Bubble */}
        <motion.div
          className="absolute top-24 right-[35%] bg-white px-4 py-2 rounded-2xl shadow-lg hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <p className="text-sm text-purple-600 font-medium">Let's learn AI together!</p>
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45" />
        </motion.div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-md"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-purple-600 text-sm font-semibold">AI Literacy for Kids 8-16</span>
              </motion.div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Learn AI by building{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  apps, images, and videos
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to ClayMind! A magical playground where kids discover artificial intelligence through creative projects
              </p>

              <div className="flex flex-wrap gap-4">
                <Button3D
                  variant="accent"
                  size="lg"
                  onClick={onGetStarted}
                  icon={<Rocket className="w-5 h-5" />}
                  glow={true}
                  shine={true}
                  pulse={true}
                >
                  Start Your Adventure FREE! 🎉
                </Button3D>
                <Button3D
                  variant="outline"
                  size="lg"
                  onClick={onParentView}
                  icon={<Shield className="w-5 h-5" />}
                >
                  Parents: Learn More
                </Button3D>
              </div>
            </motion.div>

            {/* Right: Module Preview Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {modules.map((module, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.2 }
                  }}
                  className={`${module.bg} rounded-2xl p-6 text-center cursor-pointer shadow-lg`}
                >
                  <motion.div
                    className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 text-white backdrop-blur-sm"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {module.icon}
                  </motion.div>
                  <h3 className="font-semibold text-white">{module.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 150,
                  damping: 15
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-center shadow-xl cursor-pointer"
              >
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white backdrop-blur-sm"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-purple-50">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              What Kids Say
            </h2>
            <p className="text-lg text-gray-600">
              Real reviews from real kid creators!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, rotate: i % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: i * 0.2,
                  type: "spring",
                  stiffness: 120,
                  damping: 12
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div
                  className="flex gap-1 mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 + 0.3 }}
                >
                  {[...Array(5)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.2 + 0.3 + j * 0.05 }}
                    >
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    </motion.div>
                  ))}
                </motion.div>
                <p className="text-gray-700 mb-3 text-base">"{testimonial.text}"</p>
                <p className="text-purple-600 font-semibold">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
