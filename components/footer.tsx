import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-10 bg-[#030303] border-t border-white/[0.05]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-white font-bold text-xl">
              Portfolio
            </Link>
            <p className="text-white/40 mt-2 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <Link href="https://github.com/yousriB" className="text-white/60 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://www.linkedin.com/in/benali-yousri-601352260/" className="text-white/60 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:benaliyousri00@gmail.com" className="text-white/60 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.05] text-center">
          <p className="text-white/40 text-sm">
            Designed and developed with ❤️ using Next.js, Tailwind CSS, and Three.js
          </p>
        </div>
      </div>
    </footer>
  )
}
