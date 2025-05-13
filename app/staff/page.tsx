"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Staff from "@/components/staff"
import Footer from "@/components/footer"

export default function StaffPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <main>
        <Staff />
      </main>
      <Footer />
    </div>
  )
}
