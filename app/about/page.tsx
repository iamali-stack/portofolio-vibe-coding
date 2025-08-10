import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Sparkles, Code, Rocket } from "lucide-react"
import { getImagePathEnv } from "@/lib/image-utils"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <Navigation />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex justify-center lg:justify-end">
            <Image
              src={getImagePathEnv("profile-ali.png")}
              width={400}
              height={400}
              alt="Ali Khaled"
              className="rounded-lg object-cover w-full max-w-sm h-auto"
              priority
            />
          </div>
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I’m a passionate and driven front-end developer with a solid foundation in modern web technologies and
              programming. Skilled in HTML, CSS, SCSS, JavaScript, jQuery, Bootstrap, Tailwind CSS, Material UI, React,
              and Next.js.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I thrive on continuous learning, solving real-world problems, and creating clean, user-friendly
              interfaces. With a strong commitment to personal growth and excellence, I’m always ready to take on
              challenges and deliver innovative, high-quality solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-gray-900 border-gray-800 text-gray-100">
                <CardContent className="flex items-center gap-4 p-4">
                  <Globe className="w-6 h-6 text-emerald-400" />
                  <span className="text-lg font-medium">HTML & CSS</span>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 text-gray-100">
                <CardContent className="flex items-center gap-4 p-4">
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                  <span className="text-lg font-medium">React JS</span>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 text-gray-100">
                <CardContent className="flex items-center gap-4 p-4">
                  <Code className="w-6 h-6 text-emerald-400" />
                  <span className="text-lg font-medium">JavaScript</span>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 text-gray-100">
                <CardContent className="flex items-center gap-4 p-4">
                  <Rocket className="w-6 h-6 text-emerald-400" />
                  <span className="text-lg font-medium">Next.js</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
