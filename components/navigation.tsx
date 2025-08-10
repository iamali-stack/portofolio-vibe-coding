import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

export default function Navigation() {
  return (
    <header className="px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center bg-gray-950 text-gray-100 border-b border-gray-800">
      <Link className="flex items-center justify-center" href="/">
        <span className="text-2xl sm:text-3xl font-bold text-emerald-400">MyPortfolio</span>
        <span className="sr-only">MyPortfolio</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6 lg:gap-8">
        <Link
          className="text-base lg:text-lg font-medium hover:underline underline-offset-4 text-gray-300 hover:text-emerald-400 transition-colors"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-base lg:text-lg font-medium hover:underline underline-offset-4 text-gray-300 hover:text-emerald-400 transition-colors"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-base lg:text-lg font-medium hover:underline underline-offset-4 text-gray-300 hover:text-emerald-400 transition-colors"
          href="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className="text-base lg:text-lg font-medium hover:underline underline-offset-4 text-gray-300 hover:text-emerald-400 transition-colors"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden ml-auto" size="icon" variant="ghost">
            <MenuIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64 sm:w-80">
          <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-3 px-4 text-lg sm:text-xl font-semibold hover:bg-gray-800 rounded-lg transition-colors" href="/">
              Home
            </Link>
            <Link className="flex w-full items-center py-3 px-4 text-lg sm:text-xl font-semibold hover:bg-gray-800 rounded-lg transition-colors" href="/about">
              About
            </Link>
            <Link className="flex w-full items-center py-3 px-4 text-lg sm:text-xl font-semibold hover:bg-gray-800 rounded-lg transition-colors" href="/portfolio">
              Portfolio
            </Link>
            <Link className="flex w-full items-center py-3 px-4 text-lg sm:text-xl font-semibold hover:bg-gray-800 rounded-lg transition-colors" href="/contact">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
