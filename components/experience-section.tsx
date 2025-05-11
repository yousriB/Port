"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    position: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    description:
      "Led the development of the company's flagship product, improving performance by 40% and implementing new features that increased user engagement by 25%.",
    skills: ["React", "Next.js", "TypeScript", "Three.js"],
  },
  {
    position: "Web Developer",
    company: "Digital Solutions",
    period: "2018 - 2021",
    description:
      "Developed and maintained multiple client websites, ensuring responsive design and cross-browser compatibility. Collaborated with designers to implement pixel-perfect UIs.",
    skills: ["JavaScript", "Vue.js", "SCSS", "Webpack"],
  },
  {
    position: "Junior Developer",
    company: "StartUp Innovations",
    period: "2016 - 2018",
    description:
      "Assisted in the development of web applications, fixed bugs, and implemented new features. Participated in code reviews and team meetings.",
    skills: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-[#030303]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            My Work Experience
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A timeline of my professional journey and the skills I've acquired along the way.
          </p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-rose-500 before:to-indigo-500 before:opacity-30">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-start md:justify-between md:even:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] shadow-md shadow-black/5 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2 z-10">
                <span className="h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-rose-500"></span>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                <Card className="bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.05] transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{experience.position}</h3>
                        <p className="text-white/60">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="text-sm text-white/40">{experience.period}</span>
                      </div>
                    </div>
                    <p className="text-white/70 mb-4">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="bg-white/[0.03] text-white/70 border-white/10"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
