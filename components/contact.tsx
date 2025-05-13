"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
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
    window.open("https://wa.me/?text=Hi,%20I%20want%20to%20know%20more%20about%20Galaxy%20School.", "_blank")
  }

  return (
    // <section id="contact" className="py-20 bg-white dark:bg-slate-950">
    <section
    id="contact"
    className="py-10 bg-gradient-to-br from-[#e0f2fe] via-[#f8fafc] to-white dark:from-slate-900 dark:via-slate-950 dark:to-black transition-colors duration-300"
  >
   <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-slate-900 dark:text-white">Contact Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
            We're here to answer any questions you may have about our programs, admission process, or facilities.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-slate-900 dark:text-white">Phone</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                  (061) 4233171</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Monday to Friday, 8am to 4pm</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <div className="flex items-start">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-slate-900 dark:text-white">Email</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                  niazbukhari30@gmail.com</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">We'll respond as soon as possible</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <div className="flex items-start">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-slate-900 dark:text-white">Location</h3>
                  <p className="text-slate-600 dark:text-slate-300">Bhutta Colony Opposite To Timber Market, Multan, Pakistan, 60000</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Visit us for a campus tour</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <div className="flex items-start">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">
                  <MessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-slate-900 dark:text-white">WhatsApp</h3>
                  <p className="text-slate-600 dark:text-slate-300">+92 XXX XXXXXXX</p>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="mt-2 bg-green-600 hover:bg-green-700 text-white"
                    size="sm"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Chat Now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Send us a Message</h3>

              <form className="space-y-4">
                <div>
                  <Label htmlFor="contactName">Your Name</Label>
                  <Input id="contactName" placeholder="Enter your full name" />
                </div>

                <div>
                  <Label htmlFor="contactEmail">Email Address</Label>
                  <Input id="contactEmail" type="email" placeholder="Enter your email" />
                </div>

                <div>
                  <Label htmlFor="contactPhone">Phone Number</Label>
                  <Input id="contactPhone" placeholder="Enter your phone number" />
                </div>

                <div>
                  <Label htmlFor="contactSubject">Subject</Label>
                  <Input id="contactSubject" placeholder="What is this regarding?" />
                </div>

                <div>
                  <Label htmlFor="contactMessage">Message</Label>
                  <Textarea id="contactMessage" placeholder="How can we help you?" rows={4} />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white dark:bg-blue-700 dark:hover:bg-blue-800"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>

      
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  viewport={{ once: true }}
  className="mt-16 rounded-xl overflow-hidden shadow-md"
>
  <iframe
    title="Galaxy Group of Colleges - Bhutta Colony Multan"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6805.771177734132!2d71.4504008!3d30.1730557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b31c1e76eabff%3A0x84f0f4cd11493e01!2sThe%20Galaxy%20Group%20of%20Colleges%20Multan%2C%205FF3%2B72P%2C%20Bhutta%20Colony%2C%20Multan!5e0!3m2!1sen!2s!4v1715632252711!5m2!1sen!2s"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-[350px] md:h-[400px] rounded-xl border-none"
  ></iframe>
</motion.div>

      </div>
    </section>
  )
}
