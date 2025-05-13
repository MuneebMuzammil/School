"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: "Home", href: "/all" },
    { name: "About", href: "/about" },
    { name: "Facilities", href: "/facilities" },
    { name: "Admission", href: "/admission" },
    { name: "Achievements", href: "/achievements" },
    { name: "Staff", href: "/staff" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#00245D]/90 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/all" className="flex items-center">
              <span className="text-2xl font-bold text-white">Galaxy School</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-1">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.href)
                        ? "text-[#FFD200] bg-white/10"
                        : "text-white/70 hover:text-[#FFD200] hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center ml-4 space-x-3">
              <ThemeToggle />

              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Select language"
                    className="rounded-full bg-white text-[#00245D] hover:bg-gray-200"
                  >
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>اردو</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}

              <Link href="/admission">
                <Button className="bg-[#FFD200] hover:bg-yellow-400 text-[#00245D]">Apply Now</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="rounded-full bg-white text-[#00245D] hover:bg-gray-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 max-h-[60vh] overflow-y-auto rounded-md border border-border bg-[#00245D] p-4 shadow-lg"
          >
            <ul className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive(item.href)
                        ? "text-[#FFD200] bg-white/10"
                        : "text-white/70 hover:text-[#FFD200] hover:bg-white/5"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {/* Language Selector */}
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full justify-start text-[#00245D] bg-white">
                      <Globe className="h-4 w-4 mr-2" />
                      Language
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>English</DropdownMenuItem>
                    <DropdownMenuItem>اردو</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              {/* Apply Now Button */}
              <li>
                <Link href="/admission" className="block w-full">
                  <Button className="w-full bg-[#FFD200] hover:bg-yellow-400 text-[#00245D]">
                    Apply Now
                  </Button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}






// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Menu, X, Globe } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { ThemeToggle } from "@/components/theme-toggle"

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const pathname = usePathname()

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   const navItems = [
//     { name: "Home", href: "/all" },
//     { name: "About", href: "/about" },
//     { name: "Facilities", href: "/facilities" },
//     { name: "Admission", href: "/admission" },
//     { name: "Achievements", href: "/achievements" },
//     { name: "Staff", href: "/staff" },
//     { name: "Gallery", href: "/gallery" },
//     { name: "Contact", href: "/contact" },
//   ]

//   const isActive = (path: string) => {
//     if (path === "/" && pathname === "/") return true
//     if (path !== "/" && pathname.startsWith(path)) return true
//     return false
//   }

//   return (
//     <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-colors duration-300">
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex items-center justify-between">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center"
//           >
//             <Link href="/all" className="flex items-center">
//               <span className="text-2xl font-bold text-gradient">Galaxy School</span>
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             <ul className="flex space-x-1">
//               {navItems.map((item, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Link
//                     href={item.href}
//                     className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
//                       isActive(item.href)
//                         ? "text-primary bg-primary/10"
//                         : "text-foreground/70 hover:text-primary hover:bg-primary/5"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>

//             <div className="flex items-center ml-4 space-x-3">
//               <ThemeToggle />

//               {/* <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button
//                     variant="outline"
//                     size="icon"
//                     aria-label="Select language"
//                     className="rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
//                   >
//                     <Globe className="h-5 w-5" />
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="end">
//                   <DropdownMenuItem>English</DropdownMenuItem>
//                   <DropdownMenuItem>اردو</DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu> */}

//               <Link href="/admission">
//                 <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Apply Now</Button>
//               </Link>
//             </div>
//           </div>

//           {/* Mobile Navigation Toggle */}
//           <div className="md:hidden flex items-center space-x-3">
//             <ThemeToggle />
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={toggleMenu}
//               aria-label="Toggle menu"
//               className="rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden mt-2 max-h-[60vh] overflow-y-auto rounded-md border border-border bg-background p-4 shadow-lg"
//           >
//             <ul className="flex flex-col space-y-2">
//               {navItems.map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     href={item.href}
//                     className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
//                       isActive(item.href)
//                         ? "text-primary bg-primary/10"
//                         : "text-foreground/70 hover:text-primary hover:bg-primary/5"
//                     }`}
//                     onClick={toggleMenu}
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}

//               {/* Language Selector */}
//               <li>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button variant="outline" size="sm" className="w-full justify-start">
//                       <Globe className="h-4 w-4 mr-2" />
//                       Language
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent>
//                     <DropdownMenuItem>English</DropdownMenuItem>
//                     <DropdownMenuItem>اردو</DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </li>

//               {/* Apply Now Button */}
//               <li>
//                 <Link href="/admission" className="block w-full">
//                   <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
//                     Apply Now
//                   </Button>
//                 </Link>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   )
// }

