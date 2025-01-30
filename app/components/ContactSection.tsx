"use client"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Quizify?",
    answer:
      "Quizify is an interactive learning platform that offers engaging quizzes across various subjects to help students learn and improve their knowledge in a fun way.",
  },
  {
    question: "What are the benefits of using Quizify?",
    answer:
      "Quizify offers personalized learning experiences, instant feedback, progress tracking, and a wide range of subjects. It helps improve retention and makes learning more engaging.",
  },
  {
    question: "How do I create a Quizify account?",
    answer:
      "Simply click the 'Sign Up' button, enter your details, and follow the verification process. You'll have access to our platform within minutes.",
  },
  {
    question: "How do I create a quiz?",
    answer:
      "After logging in, go to your dashboard, click 'Create Quiz', select your subject area, and follow our intuitive quiz creation wizard.",
  },
  {
    question: "How do I share a quiz?",
    answer:
      "Each quiz has a unique share link. You can copy this link or use the social sharing buttons to share directly to various platforms.",
  },
  {
    question: "How do I track my student's quiz results?",
    answer:
      "In your dashboard, navigate to the 'Results' section where you can view detailed analytics and progress reports for each student.",
  },
]

const ContactSection = () => {
  return (
    <section id="contact" className="relative pt-16 pb-24">
      {/* Wave Pattern */}
      {/* <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-r from-[#ff715b] to-[#ffad05] overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
            <path
              fill="#0d1821"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,234.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a question? We've got answers. Check out our FAQs below or send us a message using the form. We're
            always happy to help!
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">FAQ</h3>
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
                    <AccordionTrigger className="text-left hover:text-[#ffad05]">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Get In Touch With us</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-300">Please feel free to contact us using the form below.</p>
              <p className="text-gray-300">We will respond to your inquiry as soon as possible.</p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-[#ffad05]">Email:</span>
                  <a href="mailto:Quizify@outlook.com" className="text-gray-300 hover:text-[#ffad05]">
                    Quizify@outlook.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#ffad05]">Phone number:</span>
                  <a href="tel:+255-157-429" className="text-gray-300 hover:text-[#ffad05]">
                    +255-157-429
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[#ffad05]">Connect on social</p>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full bg-white bg-opacity-5 hover:bg-opacity-10"
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full bg-white bg-opacity-5 hover:bg-opacity-10"
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full bg-white bg-opacity-5 hover:bg-opacity-10"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full bg-white bg-opacity-5 hover:bg-opacity-10"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-5 border border-gray-700 focus:border-[#ffad05] focus:ring-2 focus:ring-[#ffad05] transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-5 border border-gray-700 focus:border-[#ffad05] focus:ring-2 focus:ring-[#ffad05] transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-5 border border-gray-700 focus:border-[#ffad05] focus:ring-2 focus:ring-[#ffad05] transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Write your message..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-5 border border-gray-700 focus:border-[#ffad05] focus:ring-2 focus:ring-[#ffad05] transition-colors"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#ff715b] to-[#ffad05] text-white font-medium hover:shadow-lg transition-shadow"
              >
                Submit
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

