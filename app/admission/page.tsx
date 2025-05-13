"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Admission from "@/components/admission"
import Footer from "@/components/footer"

export default function AdmissionPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <main>
        <Admission />
      </main>
      <Footer />
    </div>
  )
}
