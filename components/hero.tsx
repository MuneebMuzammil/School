// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { MessageSquare } from "lucide-react"
// import Link from "next/link"

// export default function Hero() {
//   const handleWhatsAppClick = () => {
//     window.open("https://wa.me/?text=Hi,%20I%20want%20to%20know%20about%20the%20admission%20process.", "_blank")
//   }

//   return (
//     <section className="relative min-h-[90vh] flex items-center overflow-hidden">
//       {/* Background placeholder */}
//       <div className="absolute inset-0 bg-slate-200 dark:bg-slate-900 z-0 transition-colors duration-300">
//         <div className="absolute inset-0 bg-hero-gradient opacity-70 z-10 transition-colors duration-300"></div>
//         <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500 z-0">
//           <p className="text-center px-4">
//             Insert high-quality school-related image here. Use real campus photos from Facebook Page or royalty-free
//             school images (classroom, students, activities, etc.) from Unsplash/Pexels.
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 relative z-20">
//         <div className="max-w-3xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mb-2 inline-block py-1 px-3 bg-amber-400/20 dark:bg-amber-400/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium backdrop-blur-sm"
//           >
//             Admissions Open – Playgroup to Matric
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md"
//           >
//             A New Galaxy of Education Awaits
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-xl md:text-2xl text-white/90 mb-4 italic drop-shadow-sm"
//           >
//             Taleem ka ek naya galaxy – jahan har bacha chamakta hai!
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="text-lg text-white/80 mb-8 max-w-2xl drop-shadow-sm"
//           >
//             Discover a world-class education system where every child shines with knowledge, confidence, and character.
//             Join the Galaxy School family today.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="flex flex-wrap gap-4"
//           >
//             <Link href="/admission">
//               <Button
//                 size="lg"
//                 className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
//               >
//                 Apply Now
//               </Button>
//             </Link>
//             <Button
//               size="lg"
//               variant="outline"
//               className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white transition-colors duration-300"
//               onClick={handleWhatsAppClick}
//             >
//               <MessageSquare className="mr-2 h-4 w-4" />
//               Message on WhatsApp
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/?text=Hi,%20I%20want%20to%20know%20about%20the%20admission%20process.", "_blank")
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://scontent.fmux3-1.fna.fbcdn.net/v/t1.6435-9/51481982_2318527014845407_3251492046405369856_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=GyIIBmbkznEQ7kNvwHP7lV8&_nc_oc=Adn9gk6CUhvgUdT-wh0jmL8xatBi7eJupXH-JjBEbuEvKHd2D4Q1zTno1Jd1TrsBRoQ&_nc_zt=23&_nc_ht=scontent.fmux3-1.fna&_nc_gid=-O9xppq5dONp3CAuuIPBGg&oh=00_AfJ7JjIqCXNptxTfbZCAz-pAnFGP2l1wnBCiz_45nPPokg&oe=6849FAD9"
          alt="Galaxy School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001e40]/60 via-[#001e40]/50 to-[#001e40]/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-12 sm:pt-32 sm:pb-20">
        <div className="max-w-3xl text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-3 inline-block py-1 px-4 bg-yellow-400/20 text-yellow-200 rounded-full text-sm font-medium backdrop-blur-md shadow-sm"
          >
            Admissions Open – Playgroup to Matric
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow"
          >
            A New Galaxy of Education Awaits
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-4 italic"
          >
            Taleem ka ek naya galaxy – jahan har bacha chamakta hai!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-blue-100/90 mb-8 max-w-2xl mx-auto sm:mx-0"
          >
            Discover a world-class education system where every child shines with knowledge, confidence, and character.
            Join the Galaxy School family today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4"
          >
            <Link href="/admission">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-300 text-[#001e40] font-semibold shadow-md transition w-full sm:w-auto"
              >
                Apply Now
              </Button>
            </Link>
            <Button
  size="lg"
  variant="outline"
  className="w-full sm:w-auto border border-blue-500 dark:border-blue-400 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-white/10 hover:bg-blue-100 dark:hover:bg-white/20 backdrop-blur-sm transition font-semibold"
  onClick={handleWhatsAppClick}
>
  <MessageSquare className="mr-2 h-4 w-4" />
  Message on WhatsApp
</Button>


          </motion.div>
        </div>
      </div>
    </section>
  )
}
