"use client"

import { motion } from "framer-motion"
import { Code, Terminal, Cpu, Globe, ShieldCheck, Zap, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ThreeDAnimation from "@/components/three-d-animation"

export default function AboutSection() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1 * i,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  const infoCards = [
    {
      icon: <Terminal className="h-5 w-5 text-indigo-400" />,
      title: "Specialization",
      content: "Full-Stack Development",
      highlight: "React, Next.js, Node.js"
    },
    {
      icon: <Cpu className="h-5 w-5 text-cyan-400" />,
      title: "Technologies",
      content: "Modern Web Stack",
      highlight: "TypeScript, GraphQL, Three.js"
    },
    {
      icon: <Globe className="h-5 w-5 text-emerald-400" />,
      title: "Approach",
      content: "Performance & UX Focused",
      highlight: "Lighthouse scores 90+"
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-amber-400" />,
      title: "Best Practices",
      content: "Clean & Maintainable",
      highlight: "Test-Driven Development"
    },
    {
      icon: <Zap className="h-5 w-5 text-purple-400" />,
      title: "Experience",
      content: "5+ Years Building",
      highlight: "Scalable Web Apps"
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-400" />,
      title: "Passion",
      content: "Cutting Edge Tech",
      highlight: "WebGL, AI Integration"
    },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#050505]">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-3 text-sm font-medium text-white/60 tracking-wider">
            PROFESSIONAL PROFILE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-white/90 to-rose-400 leading-tight">
            Building Digital Experiences <br className="hidden md:block" />That Matter
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-white/70 mb-6">
              I architect and build high-performance web applications with cutting-edge technologies,
              focusing on seamless user experiences and robust architecture.
            </p>
            <div className="inline-flex items-center gap-2 text-indigo-300/80 text-sm font-mono">
              <Code className="h-4 w-4" />
              <span>const passion = 'transforming ideas into digital reality';</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 h-full">
              {infoCards.map((card, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="bg-white/[0.03] border-white/[0.08] transition-all h-full group hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-lg bg-white/[0.03] group-hover:bg-white/[0.07] transition-colors">
                            {card.icon}
                          </div>
                          <h3 className="text-white font-medium text-lg">{card.title}</h3>
                        </div>
                        <p className="text-white/70 text-sm">{card.content}</p>
                        <p className="text-sm font-medium mt-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                          {card.highlight}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[350px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all shadow-xl shadow-black/40"
          >
            <ThreeDAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}