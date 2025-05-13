// "use client"

// import { motion } from "framer-motion"
// import { useInView } from "framer-motion"
// import { useRef } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { MessageSquare } from "lucide-react"

// export default function Admission() {
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

//   const handleWhatsAppClick = () => {
//     window.open("https://wa.me/?text=Hi,%20I%20want%20to%20know%20about%20the%20admission%20process.", "_blank")
//   }

//   return (
//     <section
//       id="admission"
//       className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950"
//     >
//       <div className="container mx-auto px-4">
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="max-w-5xl mx-auto"
//         >
//           <motion.div variants={itemVariants} className="text-center mb-12">
//             <div className="inline-block py-1 px-3 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
//               Admissions Open
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-slate-900 dark:text-white">
//               Limited Seats Available
//             </h2>
//             <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
//               Secure your child's future with Galaxy School. Our admission process is designed to be straightforward and
//               parent-friendly.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
//               <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Admission Inquiry</h3>

//               <form className="space-y-4">
//                 <div>
//                   <Label htmlFor="name">Parent Name</Label>
//                   <Input id="name" placeholder="Enter your full name" />
//                 </div>

//                 <div>
//                   <Label htmlFor="phone">Phone Number</Label>
//                   <Input id="phone" placeholder="Enter your phone number" />
//                 </div>

//                 <div>
//                   <Label htmlFor="childName">Child's Name</Label>
//                   <Input id="childName" placeholder="Enter your child's name" />
//                 </div>

//                 <div>
//                   <Label htmlFor="grade">Grade Applying For</Label>
//                   <select
//                     id="grade"
//                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                   >
//                     <option value="">Select Grade</option>
//                     <option value="playgroup">Playgroup</option>
//                     <option value="nursery">Nursery</option>
//                     <option value="kg">Kindergarten</option>
//                     <option value="1">Grade 1</option>
//                     <option value="2">Grade 2</option>
//                     <option value="3">Grade 3</option>
//                     <option value="4">Grade 4</option>
//                     <option value="5">Grade 5</option>
//                     <option value="6">Grade 6</option>
//                     <option value="7">Grade 7</option>
//                     <option value="8">Grade 8</option>
//                     <option value="9">Grade 9</option>
//                     <option value="10">Grade 10 (Matric)</option>
//                   </select>
//                 </div>

//                 <div>
//                   <Label htmlFor="message">Additional Information (Optional)</Label>
//                   <Textarea id="message" placeholder="Any specific questions or requirements?" />
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full bg-blue-800 hover:bg-blue-900 text-white dark:bg-blue-700 dark:hover:bg-blue-800"
//                 >
//                   Submit Inquiry
//                 </Button>
//               </form>
//             </motion.div>

//             <motion.div variants={itemVariants} className="space-y-6">
//               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border-l-4 border-amber-500">
//                 <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Admission Process</h3>
//                 <ol className="space-y-3 text-slate-700 dark:text-slate-300">
//                   <li className="flex items-start">
//                     <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
//                       1
//                     </span>
//                     <span>Fill out the inquiry form or contact us directly</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
//                       2
//                     </span>
//                     <span>Schedule a campus visit and interview</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
//                       3
//                     </span>
//                     <span>Complete admission assessment (for grades 1 and above)</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
//                       4
//                     </span>
//                     <span>Receive admission offer and complete registration</span>
//                   </li>
//                 </ol>
//               </div>

//               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
//                 <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Required Documents</h3>
//                 <ul className="space-y-2 text-slate-700 dark:text-slate-300">
//                   <li>• Birth certificate</li>
//                   <li>• Previous school records (if applicable)</li>
//                   <li>• Passport-sized photographs</li>
//                   <li>• Parent/guardian CNIC copy</li>
//                   <li>• Completed application form</li>
//                 </ul>
//               </div>

//               <Button onClick={handleWhatsAppClick} className="w-full bg-green-600 hover:bg-green-700 text-white">
//                 <MessageSquare className="mr-2 h-4 w-4" />
//                 Chat on WhatsApp
//               </Button>
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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare } from "lucide-react"

export default function Admission() {
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

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/?text=Hi,%20I%20want%20to%20know%20about%20the%20admission%20process.", "_blank")
  }

  return (
    // <section
    //   id="admission"
    //   className="py-20 bg-gradient-to-b from-orange-50 via-yellow-50 to-white dark:from-[#1a1a1a] dark:via-[#101010] dark:to-black transition-colors duration-300"
    // >

    <section
    id="admission"
    className="py-10 bg-gradient-to-br from-[#f1f5f9] via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-black transition-colors duration-300"
  >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-block py-1 px-4 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium mb-4">
              Admissions Open
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
              Limited Seats Available
            </h2>
            <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300 text-base sm:text-lg">
              Secure your child's future with Galaxy School. Our admission process is straightforward and parent-friendly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left: Form */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-yellow-100">Admission Inquiry</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Parent Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div>
                  <Label htmlFor="childName">Child's Name</Label>
                  <Input id="childName" placeholder="Enter your child's name" />
                </div>
                <div>
                  <Label htmlFor="grade">Grade Applying For</Label>
                  <select
                    id="grade"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Select Grade</option>
                    {["Playgroup", "Nursery", "KG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10 (Matric)"].map((grade, idx) => (
                      <option key={idx} value={grade.toLowerCase()}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea id="message" placeholder="Any specific questions or requirements?" />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold"
                >
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>

            {/* Right: Process & Documents */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Admission Process</h3>
                <ol className="space-y-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                  {[
                    "Fill out the inquiry form or contact us directly",
                    "Schedule a campus visit and interview",
                    "Complete admission assessment (for grades 1 and above)",
                    "Receive admission offer and complete registration",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start">
                      <span className="bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-300 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs font-bold">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Required Documents</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                  <li>• Birth certificate</li>
                  <li>• Previous school records (if applicable)</li>
                  <li>• Passport-sized photographs</li>
                  <li>• Parent/guardian CNIC copy</li>
                  <li>• Completed application form</li>
                </ul>
              </div>

              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white shadow-sm"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
