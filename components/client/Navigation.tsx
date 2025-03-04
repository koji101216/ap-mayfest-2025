"use client"

import { useState, useEffect, useRef } from "react"
import { NavigationMenu } from "@/components/client/NavigationMenu"
import { NavItem } from "@/components/types/navigation"
import { motion } from "framer-motion"

const navItems: NavItem[] = [
  { id: "about", label: "概要" },
  { id: "exhibition-list", label: "展示一覧" },
  { id: "magazine", label: "応用物理の散歩道" },
  { id: "may-fest", label: "五月祭" },
  { id: "access", label: "アクセス" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const frameRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      
      if (lastScrollY.current !== currentScrollY) {
        frameRef.current = requestAnimationFrame(() => {
          setIsScrolled(currentScrollY > 50)
          lastScrollY.current = currentScrollY
        })
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-colors duration-200 ease-in-out
        ${isScrolled ? "bg-black/60" : "bg-transparent"}
      `}
      aria-label="メインナビゲーション"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors z-50">
            <span className="font-serif">工学博覧会</span>
          </a>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: 0.3,
              ease: [0.04, 0.62, 0.23, 0.98]
            }}
          >
            <NavigationMenu items={navItems} />
          </motion.div>
        </div>
      </div>
    </nav>
  )
} 