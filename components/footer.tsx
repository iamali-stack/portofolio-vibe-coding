import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-emerald-400">Ali Khaled</h3>
          <p className="text-sm">Front-End Developer</p>
        </div>
        <div className="flex space-x-6">
          <Link
            href="https://github.com/iamali-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ali-khaled-6b71811a1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:icyalikhaled2013@gmail.com" className="hover:text-emerald-400 transition-colors">
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
