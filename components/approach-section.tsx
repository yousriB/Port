"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Lightbulb, Rocket } from "lucide-react"

const phases = [
  {
    icon: <Lightbulb className="h-10 w-10 text-amber-400" />,
    title: "Phase 1: Discovery & Planning",
    description:
      "I start by understanding your goals, target audience, and requirements. This phase includes research, strategy development, and creating a detailed project roadmap.",
    points: [
      "In-depth consultation and requirement gathering",
      "Market and competitor research",
      "Project scope definition and timeline planning",
      "Technology stack selection",
    ],
  },
  {
    icon: <CheckCircle2 className="h-10 w-10 text-emerald-400" />,
    title: "Phase 2: Design & Development",
    description:
      "With a solid plan in place, I move on to designing and developing your project. This involves creating wireframes, implementing responsive designs, and writing clean, efficient code.",
    points: [
      "UI/UX design and wireframing",
      "Frontend and backend development",
      "Regular progress updates and feedback integration",
      "Thorough testing and quality assurance",
    ],
  },
  {
    icon: <Rocket className="h-10 w-10 text-rose-400" />,
    title: "Phase 3: Launch & Support",
    description:
      "Once development is complete, I help you launch your project and provide ongoing support to ensure everything runs smoothly and continues to meet your needs.",
    points: [
      "Final testing and optimization",
      "Deployment and launch assistance",
      "Training and documentation",
      "Ongoing maintenance and support options",
    ],
  },
]

export default function ApproachSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#030303] to-[#050505]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            My Approach
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            I follow a structured methodology to ensure your project is delivered successfully from concept to
            completion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/[0.03] border-white/[0.08] h-full hover:transform hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="mb-4 p-3 rounded-full bg-white/[0.03]">{phase.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
                    <p className="text-white/60 text-sm">{phase.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {phase.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span className="text-white/70 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
