// "use client"

// import { motion } from "framer-motion"
// import { Facebook, Instagram, Twitter, Youtube, MessageSquare } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// export default function Footer() {
//   const handleWhatsAppClick = () => {
//     window.open("https://wa.me/?text=Hi,%20I%20want%20to%20know%20more%20about%20Galaxy%20School.", "_blank")
//   }

//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="bg-slate-900 text-white pt-16 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-4"
//           >
//             <h3 className="text-xl font-bold mb-4">Galaxy School</h3>
//             <p className="text-slate-300">
//               A premier educational institution committed to nurturing young minds and building a brighter future.
//             </p>
//             <p className="text-slate-300 italic">"Apke bachon ka mustaqbil yahan se chamakta hai – Galaxy School."</p>
//             <div className="flex space-x-4">
//               <a
//                 href="https://www.facebook.com/thegalaxygroupofcollegesandschoolsystem/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-slate-300 hover:text-white transition-colors"
//               >
//                 <Facebook className="h-5 w-5" />
//                 <span className="sr-only">Facebook</span>
//               </a>
//               <a href="#" className="text-slate-300 hover:text-white transition-colors">
//                 <Instagram className="h-5 w-5" />
//                 <span className="sr-only">Instagram</span>
//               </a>
//               <a href="#" className="text-slate-300 hover:text-white transition-colors">
//                 <Twitter className="h-5 w-5" />
//                 <span className="sr-only">Twitter</span>
//               </a>
//               <a href="#" className="text-slate-300 hover:text-white transition-colors">
//                 <Youtube className="h-5 w-5" />
//                 <span className="sr-only">YouTube</span>
//               </a>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="space-y-4"
//           >
//             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/" className="text-slate-300 hover:text-white transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/facilities" className="text-slate-300 hover:text-white transition-colors">
//                   Facilities
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/admission" className="text-slate-300 hover:text-white transition-colors">
//                   Admission
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/achievements" className="text-slate-300 hover:text-white transition-colors">
//                   Achievements
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="space-y-4"
//           >
//             <h3 className="text-xl font-bold mb-4">Programs</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/admission" className="text-slate-300 hover:text-white transition-colors">
//                   Playgroup
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/admission" className="text-slate-300 hover:text-white transition-colors">
//                   Primary Education
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/admission" className="text-slate-300 hover:text-white transition-colors">
//                   Middle School
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/admission" className="text-slate-300 hover:text-white transition-colors">
//                   Secondary Education
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/admission" className="text-slate-300 hover:text-white transition-colors">
//                   Matric
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/facilities" className="text-slate-300 hover:text-white transition-colors">
//                   Extra-Curricular Activities
//                 </Link>
//               </li>
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             viewport={{ once: true }}
//             className="space-y-4"
//           >
//             <h3 className="text-xl font-bold mb-4">Contact Us</h3>
//             <ul className="space-y-2">
//               <li className="flex items-start">
//                 <span className="text-galaxy-gold mr-2">•</span>
//                 <span className="text-slate-300">Galaxy School Campus, Pakistan</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-galaxy-gold mr-2">•</span>
//                 <span className="text-slate-300">info@galaxyschool.edu.pk</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-galaxy-gold mr-2">•</span>
//                 <span className="text-slate-300">+92 XXX XXXXXXX</span>
//               </li>
//             </ul>
//             <Button onClick={handleWhatsAppClick} className="mt-2 bg-green-600 hover:bg-green-700 text-white w-full">
//               <MessageSquare className="mr-2 h-4 w-4" />
//               Chat on WhatsApp
//             </Button>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="border-t border-slate-800 pt-8 mt-8 text-center"
//         >
//           <p className="text-slate-400 text-sm">
//             &copy; {currentYear} Galaxy School. All rights reserved. Designed with ❤️ for education.
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }




"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Youtube, MessageSquare, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/?text=Hi,%20I%20want%20to%20know%20more%20about%20Galaxy%20School.", "_blank")
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Galaxy School</h3>
            <p className="text-slate-300">
              A premier educational institution committed to nurturing young minds and building a brighter future.
            </p>
            <p className="text-slate-300 italic">"Apke bachon ka mustaqbil yahan se chamakta hai – Galaxy School."</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/thegalaxygroupofcollegesandschoolsystem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/thegalaxypublicschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/galaxypublics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@THEGALAXYeducationonline"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-red-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["/", "/about", "/facilities", "/admission", "/achievements", "/contact"].map((href, i) => (
                <li key={i}>
                  <Link href={href} className="text-slate-300 hover:text-white transition-colors capitalize">
                    {href === "/" ? "Home" : href.replace("/", "").replace("-", " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              {["Playgroup", "Primary Education", "Middle School", "Secondary Education", "Matric"].map((program, i) => (
                <li key={i}>
                  <Link href="/admission" className="text-slate-300 hover:text-white transition-colors">
                    {program}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/facilities" className="text-slate-300 hover:text-white transition-colors">
                  Extra-Curricular Activities
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                📍 The Galaxy Group of Colleges Multan, Bhutta Colony, Multan, Pakistan
              </li>
              <li>📧 niazbukhari30@gmail.com</li>
              <li>📞 (061) 4233171</li>
            </ul>
            <Button onClick={handleWhatsAppClick} className="mt-2 bg-green-600 hover:bg-green-700 text-white w-full">
              <MessageSquare className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8 mt-8 text-center"
        >
         <p className="text-slate-400 text-sm">
  &copy; {currentYear} Galaxy School. All rights reserved. Website crafted with ❤️ by{" "}
  <a
    href="https://www.technesss.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-white transition-colors"
  >
    Technesss
  </a>{" "}
  in collaboration with Galaxy School.
</p>
        </motion.div>
      </div>
    </footer>
  )
}
