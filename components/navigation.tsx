import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

export default function Navigation() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-950 text-gray-100 border-b border-gray-800">
      <Link className="flex items-center justify-center" href="/">
        <span className="text-xl font-bold text-emerald-400">Ali Khaled</span>
        <span className="sr-only">Ali Khaled's Portfolio</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-gray-300 hover:text-emerald-400 transition-colors"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-gray-300 hover:text-emerald-400 transition-colors"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-gray-300 hover:text-emerald-400 transition-colors"
          href="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 text-gray-300 hover:text-emerald-400 transition-colors"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden ml-auto" size="icon" variant="ghost">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/">
              Home
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/about">
              About
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/portfolio">
              Portfolio
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/contact">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
