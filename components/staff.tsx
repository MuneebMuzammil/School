// "use client"

// import { motion } from "framer-motion"
// import { useInView } from "framer-motion"
// import { useRef } from "react"

// export default function Staff() {
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

//   const staff = [
//     {
//       name: "Dr. Aisha Khan",
//       role: "Senior Science Teacher",
//       description: "Ph.D. in Chemistry with 15 years of teaching experience",
//     },
//     {
//       name: "Mr. Fahad Ahmed",
//       role: "Mathematics Department Head",
//       description: "M.Sc. in Mathematics, specialized in advanced problem-solving techniques",
//     },
//     {
//       name: "Ms. Sana Malik",
//       role: "English Language Specialist",
//       description: "M.Phil in English Literature with international teaching certification",
//     },
//   ]

//   return (
//     <section id="staff" className="py-20 bg-white dark:bg-slate-950">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-slate-900 dark:text-white">
//             Our Dedicated Staff
//           </h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
//           <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
//             Meet some of our exceptional educators who are committed to nurturing the next generation of leaders.
//           </p>
//         </motion.div>

//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//         >
//           {staff.map((person, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{
//                 y: -10,
//                 transition: { duration: 0.3 },
//               }}
//               className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700"
//             >
//               <div className="h-64 bg-slate-200 dark:bg-slate-700 relative">
//                 <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500">
//                   <p className="text-center px-4">
//                     Insert teacher photo here. Use professional portrait from school staff directory.
//                   </p>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">{person.name}</h3>
//                 <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{person.role}</p>
//                 <p className="text-slate-600 dark:text-slate-300">{person.description}</p>
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

export default function Staff() {
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

  const staff = [
    {
      name: "Dr. Aisha Khan",
      role: "Senior Science Teacher",
      description: "Ph.D. in Chemistry with 15 years of teaching experience",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mr. Fahad Ahmed",
      role: "Mathematics Department Head",
      description: "M.Sc. in Mathematics, specialized in advanced problem-solving techniques",
      image: "https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ms. Sana Malik",
      role: "English Language Specialist",
      description: "M.Phil in English Literature with international teaching certification",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ]

  return (
    <section id="staff" className="py-10 bg-[#f7faff] dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-slate-900 dark:text-white">
            Our Dedicated Staff
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
            Meet some of our exceptional educators who are committed to nurturing the next generation of leaders.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {staff.map((person, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">{person.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{person.role}</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                  {person.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
