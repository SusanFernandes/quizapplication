"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react" // Added import for React

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-40 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-[#ff715b] to-[#ffad05] text-transparent bg-clip-text"
          >
            QuizMaster
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/library">Library</NavLink>
            <NavLink href="/courses">Courses</NavLink>
            <NavLink href="/test">Test</NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[#ff715b] to-[#ffad05] text-white font-medium"
            >
              Sign up
            </motion.button>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg">
          <div className="flex flex-col space-y-4">
            <NavLink href="/" mobile>
              Home
            </NavLink>
            <NavLink href="/library" mobile>
              Library
            </NavLink>
            <NavLink href="/courses" mobile>
              Courses
            </NavLink>
            <NavLink href="/test" mobile>
              Test
            </NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[#ff715b] to-[#ffad05] text-white font-medium w-full"
            >
              Sign up
            </motion.button>
          </div>
        </div>
      )}
    </nav>
  )
}

const NavLink = ({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) => (
  <Link
    href={href}
    className={`${mobile ? "block" : "inline-block"} text-[#fffff2] hover:text-[#ffad05] transition-colors duration-200`}
  >
    {children}
  </Link>
)

export default Navbar

