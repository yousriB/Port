"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

const testimonials = [
  {
    quote:
      "Working with this developer was an absolute pleasure. They delivered a stunning website that exceeded all my expectations.",
    name: "Sarah Johnson",
    title: "CEO, TechStart",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Incredible attention to detail and a keen eye for design. Our e-commerce platform has never looked or performed better.",
    name: "Michael Chen",
    title: "Marketing Director, StyleShop",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Not only did they deliver on time, but the code quality was impeccable. I highly recommend their services to anyone looking for a top-tier developer.",
    name: "Emily Rodriguez",
    title: "Product Manager, InnovateCorp",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The website they built for us has significantly increased our conversion rates. Their understanding of UX principles is outstanding.",
    name: "David Kim",
    title: "Founder, GrowthLabs",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "A true professional who communicates clearly and delivers exceptional work. They went above and beyond to ensure our project was perfect.",
    name: "Jessica Martinez",
    title: "Creative Director, DesignHub",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

export default function TestimonialsSection() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      // Animation is handled inline with initial x: 0
    }
  }, []);

  // Clone testimonials for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gradient-to-b from-[#050505] to-[#030303] overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            Kind Words from Satisfied Clients
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say
            about working with me.
          </p>
        </motion.div>

        <div className="relative w-full">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-r from-[#030303] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-l from-[#030303] to-transparent pointer-events-none"></div>

          {/* Infinite scroll container */}
          <motion.div
            className="flex w-[calc(350px*${allTestimonials.length})] py-4"
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              duration: 20,
            }}
          >
            {allTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[350px] px-4">
                <Card className="bg-white/[0.03] border-white/[0.08] h-full">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-indigo-400 mb-4 opacity-50" />
                    <p className="text-white/80 mb-6 italic">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">
                          {testimonial.name}
                        </h4>
                        <p className="text-white/60 text-sm">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
