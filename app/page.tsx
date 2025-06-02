"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import All from './all/page'; // Assuming your All component is in the /all directory

export default function Home() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
 <Router>
      <Routes>
        <Route path="/" element={<All />} /> {/* Render All component at root */}
        <Route path="/all" element={<All />} /> {/* Optional: Keep /all route if needed */}
      </Routes>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
      </Router>
  )
}
