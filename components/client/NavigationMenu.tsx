"use client"

import { useState, useEffect, useCallback, memo, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LuX, LuMenu } from "react-icons/lu"
import { NavItem } from "@/components/types/navigation"

type NavigationMenuProps = {
  items: NavItem[]
}

const MenuItem = memo(({
  item,
  onClick
}: {
  item: NavItem,
  onClick: (id: string) => void
}) => (
  <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <button
      onClick={() => onClick(item.id)}
      className="text-white hover:text-purple-300 transition-colors text-lg md:text-base font-medium"
    >
      {item.label}
    </button>
  </motion.li>
))

MenuItem.displayName = 'MenuItem'

export function NavigationMenu({ items }: NavigationMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  
  const checkIsMobile = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setIsMobile(window.innerWidth < 768)
    }, 200)
  }, [])

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    setIsMounted(true)
    
    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    
    return () => {
      window.removeEventListener("resize", checkIsMobile)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [checkIsMobile])

  const scrollToSection = useCallback((sectionId: string) => {
    setIsMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  if (!isMounted) {
    return <div className="h-6 md:h-10" aria-hidden="true" />
  }

  return (
    <>
      {isMobile ? (
        <div className="relative z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none hover:text-purple-300 transition-colors z-50 relative"
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                id="mobile-menu"
                role="navigation"
                aria-label="モバイルナビゲーション"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed top-0 left-0 right-0 h-screen pt-16 bg-black/60 z-40"
              >
                <ul className="flex flex-col items-center space-y-4 p-4">
                  {items.map((item) => (
                    <MenuItem 
                      key={item.id} 
                      item={item} 
                      onClick={scrollToSection} 
                    />
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div className="relative z-50">
          <ul className="flex flex-row space-x-6 px-4 py-2" role="menubar" aria-label="デスクトップナビゲーション">
            {items.map((item) => (
              <li key={item.id} role="none">
                <button 
                  role="menuitem"
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-purple-300 transition-colors text-base font-medium"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
} 