"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Facilities from "@/components/facilities"
import Admission from "@/components/admission"
import Achievements from "@/components/achievements"
import Staff from "@/components/staff"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function AllInOnePage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Admission />
        <Achievements />
        <Staff />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
