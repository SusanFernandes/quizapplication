"use client"

import { motion } from "framer-motion"
import { Palette, Microscope, Cloud, Atom, Globe2, Calculator, Languages, Telescope, Heart } from "lucide-react"

const subjects = [
  { icon: Palette, name: "Art" },
  { icon: Microscope, name: "Science" },
  { icon: Cloud, name: "Weather" },
  { icon: Atom, name: "Physics" },
  { icon: Globe2, name: "Geography" },
  { icon: Calculator, name: "Math" },
  { icon: Languages, name: "Language" },
  { icon: Telescope, name: "Astronomy" },
  { icon: Heart, name: "Health" },
]

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unleash Your Inner{" "}
            <span className="bg-gradient-to-r from-[#ff715b] to-[#ffad05] text-transparent bg-clip-text">
              Wizard of Wisdom
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Embark on a Journey of Knowledge Exploration with Our Extensive Collection of Interactive Quizzes.
          </motion.p>
          <motion.button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ff715b] to-[#ffad05] text-white font-medium text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Play now
          </motion.button>
        </div>

        <div className="space-y-6 md:space-y-8">
          <motion.h2
            className="text-2xl font-semibold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            HI THERE! WHAT TOPIC ARE YOU INTERESTED IN?
          </motion.h2>
          <div className="grid grid-cols-3 gap-4">
            {subjects.map((subject, index) => (
              <motion.button
                key={subject.name}
                className="p-4 rounded-xl bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm hover:bg-opacity-10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center space-y-2">
                  <subject.icon className="w-8 h-8 text-[#ffad05] group-hover:text-[#ff715b] transition-colors duration-300" />
                  <span className="text-sm font-medium">{subject.name}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-r from-[#ff715b] to-[#ffad05] rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-r from-[#ff715b] to-[#ffad05] rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000" />
    </section>
  )
}

export default HeroSection

