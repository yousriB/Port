"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

const projects = [
  {
    title: "مركز عليسة للتميز المهني",
    description: "كون الي تحب تكونو، احنا معاك. نحول الطموح إلى نجاح من خلال موقع مركز عليسة للتكوين المهني ",
    image: "/projects/ellisa.png",
    tags: ["Next.js", "Tailwind CSS", "Formation", "Responsive Design"],
    liveUrl: "https://ellisa-three.vercel.app/",
    githubUrl: "https://github.com/yousriB/Ellisa"
  },
  {
    title: "ForumAuto Gabès",
    description: "A modern and responsive car showroom website for ForumAuto Gabès, allowing users to explore a wide range of vehicles with detailed specifications and a sleek, user-friendly design.",
    image: "/projects/forum.png",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design", "Car Showcase"],
    liveUrl: "https://autogabes.vercel.app/",
    githubUrl: "https://github.com/yousriB/autogabes"
  },
  {
    title: "Bus Management System",
    description: "A web platform designed to manage bus transportation operations efficiently. It includes features for route tracking, schedule management, and detailed bus and driver information, all within a clean and responsive interface.",
    image: "/projects/bus.png",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design", "Transportation"],
    liveUrl: "https://busses-pi.vercel.app/",
    githubUrl: "https://github.com/yousriB/busses"
  },
  {
    title: "Gaming Project",
    description: "An interactive gaming platform showcasing dynamic animations and smooth user experience, built with Next.js, Framer Motion, and Tailwind CSS.",
    image: "/projects/gaming.png",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Animation", "Responsive Design"],
    liveUrl: "https://gaming-two-teal.vercel.app/",
    githubUrl: "https://github.com/yousriB/gaming"
  }
  

]

export default function ProjectsSection() {
  // Clone projects for infinite scroll effect
  const allProjects = [...projects, ...projects]

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      // Animation is handled inline with initial x: 0
    }
  }, [])

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#050505] to-[#050505] overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-gray-300 to-indigo-500">
            Recent Projects Showcase
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore my latest works that highlight my expertise in creating innovative and impactful web solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none"></div>

          {/* Infinite scroll container */}
          <motion.div
            className="flex w-[calc(350px*${allProjects.length})] py-4"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              duration: 25,
            }}
          >
            {allProjects.map((project, index) => (
              <div key={index} className="flex-shrink-0 w-[300px] md:w-[450px] px-4">
                <Card className="bg-white/[0.03] border-white/[0.08] backdrop-blur-sm overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-900/20">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 300px, 340px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      loading={index > 2 ? "lazy" : "eager"}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2.5 py-1 rounded-full bg-indigo-900/30 text-indigo-300 border border-indigo-800/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-indigo-800/50 text-indigo-300 bg-gray-900/30 hover:bg-indigo-900/50 hover:text-gray-100 transition-colors"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-indigo-800/50 text-indigo-300 bg-gray-900/30 hover:bg-indigo-900/50 hover:text-gray-100 transition-colors"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
