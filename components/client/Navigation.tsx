"use client"

import { useState, useEffect, useRef } from "react"
import { NavigationMenu } from "@/components/client/NavigationMenu"
import { NavItem } from "@/components/types/navigation"

const navItems: NavItem[] = [
  { id: "about", label: "概要" },
  { id: "exhibition-list", label: "展示一覧" },
  { id: "magazine", label: "応用物理の散歩道" },
  { id: "may-fest", label: "五月祭" },
  { id: "access", label: "アクセス" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setIsScrolled(window.scrollY > 50)
      }, 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50 
      transition-all duration-300 ease-in-out
      ${isScrolled ? "backdrop-blur-md bg-black/60" : "bg-transparent"}
    `}
      aria-label="メインナビゲーション"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors z-50">
            <span className="font-serif">工学博覧会</span>
          </a>
          <NavigationMenu items={navItems} />
        </div>
      </div>
    </nav>
  )
} 