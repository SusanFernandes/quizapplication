"use client"

import { motion } from "framer-motion"
import { Heart, GraduationCap, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const features = [
  {
    icon: Heart,
    title: "WE CARE about you!",
    description:
      "We care about your well-being, we want to get to know you better and help you grow. We're here to stay, to create an atmosphere that will lead to a long-term relationship of exceptional service.",
  },
  {
    icon: GraduationCap,
    title: "We're Here to Help You Succeed",
    description:
      "Our team of experts come from all different backgrounds. An inclusive group that not only understands your needs but also with different areas of skills and experience can help move your digital presence.",
  },
  {
    icon: CheckCircle,
    title: "Satisfaction Guaranteed",
    description:
      "100% Satisfaction is our goal, when our services are completed, you'll be getting an amazing service. Our promise makes sure you will be satisfied.",
  },
]

const testimonials = [
  {
    text: "I've always struggled with math, but these quizzes have really helped me to improve my grades. The explanations are clear and concise, and they help me to understand the concepts",
    author: "Steve Hanstead",
    role: "Math enthusiast",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    text: "The interactive nature of these quizzes makes learning fun. I've seen a significant improvement in my test scores since I started using this platform.",
    author: "Sarah Johnson",
    role: "Student",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  // Add more testimonials as needed
]

const AboutSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Quizify Section */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#ff715b] to-[#ffad05] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why QuizMaster?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-6">
                <feature.icon className="w-12 h-12 text-[#ff715b]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Students Love Our Quizzes!
          </motion.h2>
          <motion.p
            className="text-gray-300 uppercase tracking-wider text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            STUDENT TESTIMONIALS
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-5 p-8 rounded-lg backdrop-blur-sm relative mb-12"
          >
            <div className="text-center mb-8">
              <p className="text-lg leading-relaxed mb-6">"{testimonials[currentTestimonial].text}"</p>
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#ffad05]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].author}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold">{testimonials[currentTestimonial].author}</p>
                  <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 text-gray-400 hover:text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Avatar Strip */}
          <div className="flex justify-center space-x-4 mt-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`relative cursor-pointer transition-opacity duration-300 ${
                  index === currentTestimonial ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => setCurrentTestimonial(index)}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

