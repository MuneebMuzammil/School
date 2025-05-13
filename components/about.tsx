// "use client"

// import { motion } from "framer-motion"
// import { useInView } from "framer-motion"
// import { useRef } from "react"

// export default function About() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.3 })

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

//   return (
//     <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
//       <div className="container mx-auto px-4">
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="max-w-4xl mx-auto"
//         >
//           <motion.div variants={itemVariants} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">About Galaxy School</h2>
//             <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <motion.div variants={itemVariants} className="order-2 md:order-1">
//               <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
//                 Our Educational Vision
//               </h3>
//               <p className="text-slate-700 dark:text-slate-300 mb-4">
//                 Under the visionary leadership of Director Niaz Bukhari, Galaxy School has established itself as a
//                 premier educational institution in Pakistan. Our mission is to nurture young minds through a balanced
//                 approach to education that emphasizes academic excellence, character development, and practical skills.
//               </p>
//               <p className="text-slate-700 dark:text-slate-300 mb-6">
//                 We believe in creating an environment where students can discover their potential and develop into
//                 confident, responsible, and innovative individuals ready to face the challenges of tomorrow.
//               </p>

//               Discipline
//             </motion.div>

//             <motion.div variants={itemVariants} className="order-1 md:order-2">
//               <div className="relative h-80 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 transition-colors duration-300">
//                 <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500">
//                   {/* <p className="text-center px-4">
//                     Insert high-quality image of the school campus or students engaged in learning activities.
//                   </p> */}
//                   <img src="https://scontent.fmux3-1.fna.fbcdn.net/v/t1.6435-9/51508070_2318532071511568_8744146165856993280_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeHLt-5OzBUB9j75ZI51rlX1LbuI4VmnZUMtu4jhWadlQ8O1B59x9L2xR4Onjebk6j-7W1ZKNKna9mPU9em2macB&_nc_ohc=veBTGXaOXtgQ7kNvwENWb7m&_nc_oc=AdlOtVMl3XHvkyLMHk5JGPgA-LQkBeLgviC73KP5nD6YZewy3xS0EPy94IHXq-oyV9M&_nc_zt=23&_nc_ht=scontent.fmux3-1.fna&_nc_gid=cCm_d0wINzy4axsofmOuHA&oh=00_AfJUiJ6yP0EmKn5H6ab2ISd6mkF4FRst_VzhHk19g5M69g&oe=684AB313" alt="" />
//                 </div>
//               </div>

//               <motion.div
//                 variants={itemVariants}
//                 className="mt-8 bg-white dark:bg-slate-800 p-6 rounded-lg border-l-4 border-amber-500 shadow-md transition-colors duration-300"
//               >
//                 <p className="text-slate-700 dark:text-slate-300 italic mb-2">
//                   "Education is not preparation for life; education is life itself."
//                 </p>
//                 <p className="text-right text-slate-600 dark:text-slate-400 font-medium">– John Dewey</p>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }











"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="about" className="py-10 bg-[#f4f7fb] dark:bg-[#0c1a2e] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-yellow-300">
              About Galaxy School
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center px-4 md:px-6 ">
            {/* Text Section */}
            <motion.div variants={itemVariants} className="space-y-6 order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-semibold text-[#1e293b] dark:text-yellow-100">
                Our Educational Vision
              </h3>
              <p className="text-[#475569] dark:text-slate-300 leading-relaxed text-base">
                Under the leadership of Director Niaz Bukhari, Galaxy School aims to empower young minds with
                education, character, and creativity. We foster academic excellence and life-readiness.
              </p>
              <p className="text-[#475569] dark:text-slate-300 leading-relaxed text-base">
                Our environment promotes confidence, curiosity, and innovation – preparing students for a bright future.
              </p>

<div className="grid grid-cols-2 gap-4">
  {[
    { title: "Discipline", color: "blue", desc: "Building character through structure and respect" },
    { title: "Innovation", color: "emerald", desc: "Embracing new ideas and technologies" },
    { title: "Confidence", color: "amber", desc: "Empowering students to express and lead" },
    { title: "Academics", color: "purple", desc: "Pursuing excellence in knowledge" },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:shadow-md overflow-hidden"
    >
      {/* Top Color Bar */}
      <div className={`h-2 w-full bg-${item.color}-500`}></div>

      {/* Content */}
      <div className="p-4">
        <h4 className={`font-bold text-${item.color}-700 dark:text-${item.color}-400 mb-2`}>
          {item.title}
        </h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
      </div>
    </div>
  ))}
</div>
            </motion.div>

            {/* Image + Quote Section */}
            <motion.div variants={itemVariants} className="order-1 md:order-2">
              <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700">
                <img
                  src="https://scontent.fmux3-1.fna.fbcdn.net/v/t1.6435-9/51508070_2318532071511568_8744146165856993280_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeHLt-5OzBUB9j75ZI51rlX1LbuI4VmnZUMtu4jhWadlQ8O1B59x9L2xR4Onjebk6j-7W1ZKNKna9mPU9em2macB&_nc_ohc=veBTGXaOXtgQ7kNvwENWb7m&_nc_oc=AdlOtVMl3XHvkyLMHk5JGPgA-LQkBeLgviC73KP5nD6YZewy3xS0EPy94IHXq-oyV9M&_nc_zt=23&_nc_ht=scontent.fmux3-1.fna&_nc_gid=cCm_d0wINzy4axsofmOuHA&oh=00_AfJUiJ6yP0EmKn5H6ab2ISd6mkF4FRst_VzhHk19g5M69g&oe=684AB313"
                  alt="Galaxy School"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                variants={itemVariants}
                className="mt-6 bg-yellow-100 dark:bg-slate-800 p-6 rounded-lg border-l-4 border-yellow-400 shadow-md"
              >
                <p className="text-slate-700 dark:text-yellow-200 italic mb-2">
                  "Education is not preparation for life; education is life itself."
                </p>
                <p className="text-right text-slate-600 dark:text-yellow-300 font-medium">– John Dewey</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
