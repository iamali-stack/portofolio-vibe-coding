import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-6 sm:py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-emerald-400">Ali Khaled</h3>
          <p className="text-sm">Front-End Developer</p>
        </div>
        <div className="flex space-x-4 sm:space-x-6">
          <Link
            href="https://github.com/iamali-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ali-khaled-6b71811a1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link 
            href="mailto:icyalikhaled2013@gmail.com" 
            className="hover:text-emerald-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
