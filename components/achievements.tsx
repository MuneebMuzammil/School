// "use client"

// import { motion } from "framer-motion"
// import { useInView } from "framer-motion"
// import { useRef, useState, useEffect } from "react"
// import { Users, GraduationCap, Award, BookOpen } from "lucide-react"

// export default function Achievements() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.3 })

//   // Counter state
//   const [counts, setCounts] = useState({
//     students: 0,
//     faculty: 0,
//     years: 0,
//     results: 0,
//   })

//   // Target values
//   const targetCounts = {
//     students: 1200,
//     faculty: 100,
//     years: 15,
//     results: 98,
//   }

//   // Animation duration in ms
//   const animationDuration = 2000

//   useEffect(() => {
//     if (isInView) {
//       const interval = 30 // Update interval in ms
//       const steps = animationDuration / interval

//       const incrementValues = {
//         students: targetCounts.students / steps,
//         faculty: targetCounts.faculty / steps,
//         years: targetCounts.years / steps,
//         results: targetCounts.results / steps,
//       }

//       let currentStep = 0

//       const timer = setInterval(() => {
//         currentStep += 1

//         setCounts({
//           students: Math.min(Math.round(incrementValues.students * currentStep), targetCounts.students),
//           faculty: Math.min(Math.round(incrementValues.faculty * currentStep), targetCounts.faculty),
//           years: Math.min(Math.round(incrementValues.years * currentStep), targetCounts.years),
//           results: Math.min(Math.round(incrementValues.results * currentStep), targetCounts.results),
//         })

//         if (currentStep >= steps) {
//           clearInterval(timer)
//         }
//       }, interval)

//       return () => clearInterval(timer)
//     }
//   }, [isInView])

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

//   const achievements = [
//     {
//       title: "Students Enrolled",
//       value: counts.students,
//       suffix: "+",
//       icon: <Users className="h-10 w-10" />,
//       color: "bg-blue-500 dark:bg-blue-600",
//     },
//     {
//       title: "Faculty Members",
//       value: counts.faculty,
//       suffix: "+",
//       icon: <GraduationCap className="h-10 w-10" />,
//       color: "bg-purple-500 dark:bg-purple-600",
//     },
//     {
//       title: "Years of Excellence",
//       value: counts.years,
//       suffix: "+",
//       icon: <Award className="h-10 w-10" />,
//       color: "bg-amber-500 dark:bg-amber-600",
//     },
//     {
//       title: "Matric Results 2023",
//       value: counts.results,
//       suffix: "%",
//       icon: <BookOpen className="h-10 w-10" />,
//       color: "bg-emerald-500 dark:bg-emerald-600",
//     },
//   ]

//   return (
//     <section id="achievements" className="py-20 bg-slate-900 text-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Results & Achievements</h2>
//           <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
//           <p className="max-w-2xl mx-auto text-slate-300">
//             Galaxy School has a proven track record of academic excellence and student achievement.
//           </p>
//         </motion.div>

//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {achievements.map((achievement, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700"
//             >
//               <div className={`p-4 ${achievement.color} flex justify-center`}>{achievement.icon}</div>
//               <div className="p-6 text-center">
//                 <div className="text-4xl font-bold mb-2">
//                   {achievement.value}
//                   {achievement.suffix}
//                 </div>
//                 <h3 className="text-lg text-slate-300">{achievement.title}</h3>
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
import { useRef, useState, useEffect } from "react"
import { Users, GraduationCap, Award, BookOpen } from "lucide-react"

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const [counts, setCounts] = useState({
    students: 0,
    faculty: 0,
    years: 0,
    results: 0,
  })

  const targetCounts = {
    students: 1200,
    faculty: 100,
    years: 15,
    results: 98,
  }

  const animationDuration = 2000

  useEffect(() => {
    if (isInView) {
      const interval = 30
      const steps = animationDuration / interval

      const incrementValues = {
        students: targetCounts.students / steps,
        faculty: targetCounts.faculty / steps,
        years: targetCounts.years / steps,
        results: targetCounts.results / steps,
      }

      let currentStep = 0

      const timer = setInterval(() => {
        currentStep += 1

        setCounts({
          students: Math.min(Math.round(incrementValues.students * currentStep), targetCounts.students),
          faculty: Math.min(Math.round(incrementValues.faculty * currentStep), targetCounts.faculty),
          years: Math.min(Math.round(incrementValues.years * currentStep), targetCounts.years),
          results: Math.min(Math.round(incrementValues.results * currentStep), targetCounts.results),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isInView])

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

  const achievements = [
    {
      title: "Students Enrolled",
      value: counts.students,
      suffix: "+",
      icon: <Users className="h-10 w-10" />,
      color: "bg-blue-500 dark:bg-blue-600",
    },
    {
      title: "Faculty Members",
      value: counts.faculty,
      suffix: "+",
      icon: <GraduationCap className="h-10 w-10" />,
      color: "bg-purple-500 dark:bg-purple-600",
    },
    {
      title: "Years of Excellence",
      value: counts.years,
      suffix: "+",
      icon: <Award className="h-10 w-10" />,
      color: "bg-amber-500 dark:bg-amber-600",
    },
    {
      title: "Matric Results 2023",
      value: counts.results,
      suffix: "%",
      icon: <BookOpen className="h-10 w-10" />,
      color: "bg-emerald-500 dark:bg-emerald-600",
    },
  ]

  return (
    <section id="achievements" className="py-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-serif text-white">Results & Achievements</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg">
            Galaxy School has a proven track record of academic excellence and student achievement.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-700 transition hover:shadow-xl"
            >
              <div className={`p-5 ${achievement.color} flex justify-center items-center`}>
                {achievement.icon}
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2">
                  {achievement.value}
                  {achievement.suffix}
                </div>
                <h3 className="text-base sm:text-lg text-slate-300">{achievement.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
