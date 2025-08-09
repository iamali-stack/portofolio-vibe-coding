import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Chrome } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Store",
      description: "A full-featured e-commerce platform with product listings, cart, and checkout.",
      image: "/images/ecommerce.png",
      category: "Web Development",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      githubLink: "https://github.com/iamali-stack/Ecommerce",
      liveLink: "https://iamali-stack.github.io/Ecommerce/",
    },
    {
      id: 2,
      title: "My-Wallet",
      description:
        "A modern, responsive personal finance tracker built with React, Redux Toolkit, Vite, and Tailwind CSS.",
      image: "/images/my-wallet.png",
      category: "Web Development",
      technologies: ["React", "Redux Toolkit", "Vite", "Tailwind CSS"],
      githubLink: "https://github.com/iamali-stack/My-Wallet",
      liveLink: "https://iamali-stack.github.io/My-Wallet/",
    },
    {
      id: 3,
      title: "Weather-App",
      description:
        "A sleek weather app showing current conditions and 3-day forecasts. Features real-time weather data, location detection, and city search.",
      image: "/images/weather-app.png",
      category: "Web Development",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/iamali-stack/weather-app",
      liveLink: "https://iamali-stack.github.io/weather-app/",
    },
    {
      id: 4,
      title: "Movie-App",
      description:
        "A modern web application for browsing and discovering movies. This application provides features like searching, filtering, and viewing movie details.",
      image: "/images/movie-app.png",
      category: "Web Development",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/iamali-stack/Movie-App",
      liveLink: "https://iamali-stack.github.io/Movie-App/",
    },
    {
      id: 5,
      title: "Games-OOP",
      description:
        "A front-end web application designed to showcase a collection of free-to-play games. The project is built using Object-Oriented Programming (OOP) principles in JavaScript and leverages modern web technologies.",
      image: "/images/games-oop.png",
      category: "Web Development",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/iamali-stack/Games-OOP",
      liveLink: "https://iamali-stack.github.io/Games-OOP/",
    },
    {
      id: 6,
      title: "Quiz-App",
      description:
        "This is an interactive web-based Quiz Application that allows users to test their knowledge across various categories. The app uses the Open Trivia Database API to fetch questions dynamically.",
      image: "/images/quiz-app.png",
      category: "Web Development",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/iamali-stack/Quiz-App",
      liveLink: "https://iamali-stack.github.io/Quiz-App/",
    },
    {
      id: 7,
      title: "Yummy-App",
      description:
        "A recipe application that allows users to search for recipes, view details, and save their favorites. It features a responsive design and a user-friendly interface.",
      image: "/images/yummy-app.png",
      category: "Web Development",
      technologies: ["JavaScript", "HTML", "CSS", "API Integration"],
      githubLink: "https://github.com/iamali-stack/Yummy-App",
      liveLink: "https://iamali-stack.github.io/Yummy-App/",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <Navigation />

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Portfolio Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </section>

        {/* Project Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-gray-900 border-gray-800 overflow-hidden group">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-bold mb-2 text-gray-100 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-emerald-400 transition-colors bg-transparent"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" /> GitHub
                    </a>
                  </Button>
                  {project.liveLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-emerald-400 transition-colors bg-transparent"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <Chrome className="w-4 h-4 mr-2" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}
