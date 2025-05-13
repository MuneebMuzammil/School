// "use client"

// import { motion } from "framer-motion"
// import { useInView } from "framer-motion"
// import { useRef, useState } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function Gallery() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.3 })
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   }

//   // Placeholder gallery images
//   const galleryImages = [
//     "Classroom activities",
//     "Science fair projects",
//     "Sports day events",
//     "Annual function performances",
//     "Art and craft exhibitions",
//     "Educational field trips",
//   ]

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
//   }

//   return (
//     <section id="gallery" className="py-20 bg-slate-50 dark:bg-slate-900">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-slate-900 dark:text-white">
//             School Gallery
//           </h2>
//           <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
//           <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
//             Take a visual tour of our campus, activities, and student achievements.
//           </p>
//         </motion.div>

//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="max-w-4xl mx-auto"
//         >
//           <motion.div variants={itemVariants} className="relative">
//             <div className="relative h-80 md:h-96 bg-slate-200 dark:bg-slate-700 rounded-xl overflow-hidden">
//               <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500">
//                 <p className="text-center px-4">
//                   Add real school photos here from the Facebook gallery: {galleryImages[currentSlide]}
//                 </p>
//               </div>

//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 rounded-full"
//                 onClick={prevSlide}
//               >
//                 <ChevronLeft className="h-6 w-6" />
//                 <span className="sr-only">Previous slide</span>
//               </Button>

//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 rounded-full"
//                 onClick={nextSlide}
//               >
//                 <ChevronRight className="h-6 w-6" />
//                 <span className="sr-only">Next slide</span>
//               </Button>
//             </div>

//             <div className="flex justify-center mt-4 space-x-2">
//               {galleryImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-3 h-3 rounded-full ${
//                     currentSlide === index ? "bg-blue-600 dark:bg-blue-500" : "bg-slate-300 dark:bg-slate-600"
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </motion.div>

//           <motion.div variants={itemVariants} className="mt-8 text-center">
//             <Button className="bg-blue-800 hover:bg-blue-900 text-white dark:bg-blue-700 dark:hover:bg-blue-800">
//               View Full Gallery
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }







"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [currentSlide, setCurrentSlide] = useState(0)

  const galleryImages = [
    "https://scontent.fmux3-1.fna.fbcdn.net/v/t1.6435-9/51481982_2318527014845407_3251492046405369856_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=GyIIBmbkznEQ7kNvwHP7lV8&_nc_oc=Adn9gk6CUhvgUdT-wh0jmL8xatBi7eJupXH-JjBEbuEvKHd2D4Q1zTno1Jd1TrsBRoQ&_nc_zt=23&_nc_ht=scontent.fmux3-1.fna&_nc_gid=-O9xppq5dONp3CAuuIPBGg&oh=00_AfJ7JjIqCXNptxTfbZCAz-pAnFGP2l1wnBCiz_45nPPokg&oe=6849FAD9",
     "https://scontent.fmux3-1.fna.fbcdn.net/v/t39.30808-6/486098921_9949645718400127_1511323920036481120_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG6SD92A57Lbo2zrkGa4kqdfcj_KZVKmkR9yP8plUqaRJBNfNNaxGAdcEE7BFCMpgq3ZxHuNPbp1fJah3foqJiY&_nc_ohc=DsKuk1vyKTgQ7kNvwE3kG2v&_nc_oc=Admlc4YYcBLBuPn9X_aE6RMvnEpRH6rw6jn06658lt9IpOmGvtz39bdsRHWR1n1qtzk&_nc_zt=23&_nc_ht=scontent.fmux3-1.fna&_nc_gid=GrkJrUO4qj-qSbML_1aPIQ&oh=00_AfJR41gCH_ge3QnYozcI4WBRzL62arLLlSrsyIIFj7OAyg&oe=68292EA6",
     "https://scontent.fmux3-1.fna.fbcdn.net/v/t39.30808-6/486447362_9949643968400302_878129630566518733_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHfM_ejJ_Esngba9KTWQ1esIwV1DFIv7mwjBXUMUi_ubOg-zYExtOmKYStXt7UXQ-NwureYhTh0cLok88Dv-Aq4&_nc_ohc=YlN_x1GPB0EQ7kNvwHisswc&_nc_oc=Admh6A7-_nAKV4VHbyAIEIwk0r-8F8ciTxDn5C3SGo2cATMIp1wyUYbMkypaDRyqJR8&_nc_zt=23&_nc_ht=scontent.fmux3-1.fna&_nc_gid=1grXCXdIHcqoG9ldO_-13g&oh=00_AfLWy4hjbUQgBtcTJfgVRtItb1GHp0BT-gilgjl1S-b0Pg&oe=68292DF3",
     "https://scontent.fmux3-1.fna.fbcdn.net/v/t39.30808-6/486252677_9949645781733454_6046797263846852017_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGD1Vo8q4uHcWj7J158nKEODK3-AXnCVgsMrf4BecJWC-AOUpkBiSALWzKvY4-AglUYWdlx9Yt8hZ8YXnthCQBc&_nc_ohc=MFPPes-yCI8Q7kNvwHUiA_z&_nc_oc=AdkYsXNcKXhB3zLyTJBnxHkKjrKA5rPGMaiU3hnD77Rcoj5VQh7KSD0m2cWtAQXgrSo&_nc_zt=23&_nc_ht=scontent.fmux3-1.fna&_nc_gid=JurSCkLQ8XLEfNaqfL8o_w&oh=00_AfKsiiLE6Tf_THlQARt9ncfWh0zxL4MeVQPUllg5lcsRaw&oe=682957B8",
     "https://scontent.fmux3-1.fna.fbcdn.net/v/t39.30808-6/487551299_9990003437697688_6033045634765907376_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFiZPNdpi8cLSE8cH4i4owCYPhdIH2PEytg-F0gfY8TK5EEwmdcHCIOCrTG_L7csHg7Df3a4LSma-iG0vBt2l9f&_nc_ohc=gajKZtBq93wQ7kNvwFNshzt&_nc_oc=AdkpGs2Qjl2GdaOoGabR1Yofi3eAgveB5FCx-kgBA0gGdEj7BrL_tpkBt__91v11oxQ&_nc_zt=23&_nc_ht=scontent.fmux3-1.fna&_nc_gid=xq9FfV3JXiymPn07pBDVqA&oh=00_AfINWo--HKTRQIYb_7MIPHUfkhpzMN0jC-U5-JfELMp3Kg&oe=6829560E",
     "https://scontent.fmux3-1.fna.fbcdn.net/v/t39.30808-6/487817485_9990003431031022_2657630117504469834_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFqQVOkZEYC97lE8LuGH9Z1zLoA7K9PTCfMugDsr09MJ50bS9fNz3cFOHXQSCiXYsB3JX_w-aK480AfbDUrl99G&_nc_ohc=yUo1T7ZHhZwQ7kNvwFXT2Qu&_nc_oc=AdnV0GWsWF4rbKcZfNNYCEbfoDPlpvP_CCtU9uny7L4Z9-kjFZhCHoLnBIiC0WoEOqU&_nc_zt=23&_nc_ht=scontent.fmux3-1.fna&_nc_gid=EG1pbzBRDEtJz2fd5uPvyg&oh=00_AfJDhCMmcyy3l--c2AudH6dXBZiUGV8PbKXq78MfD6qdhg&oe=68295850",
     "https://scontent.fmux3-1.fna.fbcdn.net/v/t39.30808-6/487776566_10003744206323611_1063891639233389112_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeED6N4ScCtPEXSFzizT0HKC2zmPT_8Qo0XbOY9P_xCjRVRNmsgxtrmfFizQK8cSfjaQC9OIrZRpY2RzyplgRrkk&_nc_ohc=-cafgpSk8NUQ7kNvwFAvS7e&_nc_oc=Adl3q46S608YEOMgOs9Qezn5gJYgIROskBrQyVv9uLga0sT6w-Tp9XsyVYjiYZFdjPs&_nc_zt=23&_nc_ht=scontent.fmux3-1.fna&_nc_gid=Gf1KQzxXoY8K5lN_v2-QDA&oh=00_AfLIFBsTvnfVJfhrOXguLl7qiTFzVLQln5qPv03h5Kh3XQ&oe=68293206",
     "https://scontent.fmux3-1.fna.fbcdn.net/v/t39.30808-6/487852812_10003744149656950_902668545697642868_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGgV6wLjULJKUr0f_W4cah6qEeERsbAJZ-oR4RGxsAlnzw4-BRMIEHmRTw-5QOJjpcSze4V8XNSuk__6Hl0wvrR&_nc_ohc=rh-dlheeECYQ7kNvwEuz_hG&_nc_oc=Adn2MkkQ4XMR843tKbnlQgCpRm5mI-lcnyPhrjxK6ggSaR0k9c8FiZfcVta-gsoWpFI&_nc_zt=23&_nc_ht=scontent.fmux3-1.fna&_nc_gid=Ytz1C8z1koNROCRe5Sm36A&oh=00_AfJcdZjkEfgCVvEBMizkyFV-P4y07YSvUSY-smBJi6UOug&oe=682936FB",
     "https://scontent.fmux3-1.fna.fbcdn.net/v/t39.30808-6/488265113_10003744202990278_8409610182245002492_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHks5VsriuObpJhptXm6arLYNsjGwWPcd9g2yMbBY9x34vG9mrDeJpSjHdr0gpwMiB3WOo6pKnwrhWwMoJaKJzP&_nc_ohc=7_Aa4jNv4wAQ7kNvwH6j1Ud&_nc_oc=Adm2Qub0Y49Fz8ioJx4K-8ZhC7pwMR71xaIxZgNBVR_mkRwOwFuXCpASFqvaareZoq8&_nc_zt=23&_nc_ht=scontent.fmux3-1.fna&_nc_gid=xDrpSIRZlzmTjtoPoVllWA&oh=00_AfKRL8_91F2FDFPQM7i84bBEQewdVrR0oQnuDdKYkBZD-A&oe=682930AC",
     "https://scontent.fmux3-1.fna.fbcdn.net/v/t39.30808-6/485338823_9914641708567195_1252194892223428042_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeForhc6_RDUcwclfuzctb_qFgUXky3AvTkWBReTLcC9OXZ4647hIzHG9dp980LBNFsXFx7HBZ9H3G1xKPCtsrWq&_nc_ohc=7j1wDl0dgsMQ7kNvwEkig8k&_nc_oc=Adn3zbABl4enYbc5zeQXC05n23jMyYRXSZztCdMc05HUjnjNqhJMtpa-TrFD8uaV3F8&_nc_zt=23&_nc_ht=scontent.fmux3-1.fna&_nc_gid=coKLLk0MDR9Q4mDybiilyQ&oh=00_AfLaEpOnw3i25PizZiYAr9EhYuKFUotcO9lOPbVSz2CNwA&oe=682929B0",
   ]

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      )
    }, 3000)
    return () => clearInterval(interval)
  }, [galleryImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    )
  }

  return (
    <section id="gallery" className="py-10 bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-slate-900 dark:text-white">
            School Gallery
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
            Take a visual tour of our campus, activities, and student achievements.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div className="relative">
            {/* Image Display */}
            <div className="relative h-80 md:h-[450px] bg-slate-200 dark:bg-slate-700 rounded-xl overflow-hidden">
              <img
                src={galleryImages[currentSlide]}
                alt={`Gallery image ${currentSlide + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />

              {/* Prev/Next Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 rounded-full"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 rounded-full"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    currentSlide === index ? "bg-blue-600 dark:bg-blue-400" : "bg-slate-300 dark:bg-slate-700"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div className="mt-8 text-center">
            <Button className="bg-blue-800 hover:bg-blue-900 text-white dark:bg-blue-700 dark:hover:bg-blue-800">
              View Full Gallery
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
