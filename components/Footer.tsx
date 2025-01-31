import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#222222] to-[#0d1821] text-[#fffff2] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              QuizMaster
            </Link>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link href="/#about" className="hover:text-gray-300 transition duration-300">
              About
            </Link>
            <Link href="/#contact" className="hover:text-gray-300 transition duration-300">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-gray-300 transition duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">© {new Date().getFullYear()} QuizMaster. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer

