// "use client"

// import { motion } from "framer-motion"
// import { useInView } from "framer-motion"
// import { useRef } from "react"
// import { Monitor, GraduationCap, Bus, FlaskRoundIcon as Flask, Trophy, BookOpen } from "lucide-react"

// export default function Facilities() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.2 })

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   }

//   const facilities = [
//     {
//       title: "Digital Classrooms",
//       description: "Modern classrooms equipped with digital learning tools and interactive whiteboards",
//       icon: <Monitor className="h-10 w-10" />,
//       color: "from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600",
//       hoverColor: "dark:hover:border-blue-400/50",
//     },
//     {
//       title: "Experienced Faculty",
//       description: "Highly qualified teachers with years of experience in education",
//       icon: <GraduationCap className="h-10 w-10" />,
//       color: "from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600",
//       hoverColor: "dark:hover:border-purple-400/50",
//     },
//     {
//       title: "Transport Facility",
//       description: "Safe and reliable transportation service for students from various areas",
//       icon: <Bus className="h-10 w-10" />,
//       color: "from-amber-500 to-amber-700 dark:from-amber-400 dark:to-amber-600",
//       hoverColor: "dark:hover:border-amber-400/50",
//     },
//     {
//       title: "Science & Computer Labs",
//       description: "Well-equipped laboratories for practical learning and experiments",
//       icon: <Flask className="h-10 w-10" />,
//       color: "from-emerald-500 to-emerald-700 dark:from-emerald-400 dark:to-emerald-600",
//       hoverColor: "dark:hover:border-emerald-400/50",
//     },
//     {
//       title: "Sports Ground",
//       description: "Spacious grounds for physical education and sports activities",
//       icon: <Trophy className="h-10 w-10" />,
//       color: "from-red-500 to-red-700 dark:from-red-400 dark:to-red-600",
//       hoverColor: "dark:hover:border-red-400/50",
//     },
//     {
//       title: "Islamic & Moral Education",
//       description: "Comprehensive Islamic studies and character building programs",
//       icon: <BookOpen className="h-10 w-10" />,
//       color: "from-teal-500 to-teal-700 dark:from-teal-400 dark:to-teal-600",
//       hoverColor: "dark:hover:border-teal-400/50",
//     },
//   ]

//   return (
//     <section id="facilities" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Facilities & Features</h2>
//           <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
//           <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
//             Galaxy School provides state-of-the-art facilities to ensure a comprehensive learning experience for all
//             students.
//           </p>
//         </motion.div>

//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {facilities.map((facility, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{
//                 y: -10,
//                 transition: { duration: 0.3 },
//               }}
//               className={`bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 group transition-all duration-300 ${facility.hoverColor} card-glow`}
//             >
//               <div className={`p-6 bg-gradient-to-r ${facility.color} text-white transition-colors duration-300`}>
//                 <div className="flex justify-center">{facility.icon}</div>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
//                   {facility.title}
//                 </h3>
//                 <p className="text-slate-600 dark:text-slate-300">{facility.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }








"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Monitor, GraduationCap, Bus, FlaskRoundIcon as Flask, Trophy, BookOpen } from "lucide-react"

export default function Facilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const facilities = [
    {
      title: "Digital Classrooms",
      description: "Modern classrooms equipped with digital learning tools and interactive whiteboards",
      icon: <Monitor className="h-10 w-10" />,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Experienced Faculty",
      description: "Highly qualified teachers with years of experience in education",
      icon: <GraduationCap className="h-10 w-10" />,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Transport Facility",
      description: "Safe and reliable transportation service for students from various areas",
      icon: <Bus className="h-10 w-10" />,
      color: "from-amber-400 to-yellow-500",
    },
    {
      title: "Science & Computer Labs",
      description: "Well-equipped laboratories for practical learning and experiments",
      icon: <Flask className="h-10 w-10" />,
      color: "from-emerald-500 to-emerald-700",
    },
    {
      title: "Sports Ground",
      description: "Spacious grounds for physical education and sports activities",
      icon: <Trophy className="h-10 w-10" />,
      color: "from-rose-500 to-red-600",
    },
    {
      title: "Islamic & Moral Education",
      description: "Comprehensive Islamic studies and character building programs",
      icon: <BookOpen className="h-10 w-10" />,
      color: "from-teal-500 to-teal-700",
    },
  ]

  return (
    <section id="facilities" className="py-10 bg-[#eaf4ff] dark:bg-slate-950  transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-yellow-300">Facilities & Features</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300 text-base sm:text-lg">
            Galaxy School offers top-notch facilities designed to enrich student life and academic excellence.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 group transition-all duration-300"
            >
              <div className={`p-6 bg-gradient-to-r ${facility.color} text-white flex justify-center`}>
                {facility.icon}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-yellow-500 transition-colors duration-300">
                  {facility.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
