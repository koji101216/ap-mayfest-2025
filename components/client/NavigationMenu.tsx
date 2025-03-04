"use client"

import { useState, useEffect, useCallback, memo, useRef, forwardRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LuX, LuMenu } from "react-icons/lu"
import { NavItem } from "@/components/types/navigation"

type NavigationMenuProps = {
  items: NavItem[]
}

const MenuItem = memo(forwardRef<HTMLButtonElement, {
  item: NavItem
  onClick: (id: string) => void
}>(({ item, onClick }, ref) => (
  <motion.li 
    whileHover={{ scale: 1.05 }} 
    whileTap={{ scale: 0.95 }}
    className="min-h-[44px] flex items-center"
  >
    <button
      ref={ref}
      onClick={() => onClick(item.id)}
      className="text-white hover:text-purple-300 transition-colors text-lg md:text-base font-medium py-2 px-3"
    >
      {item.label}
    </button>
  </motion.li>
)))

MenuItem.displayName = 'MenuItem'

export function NavigationMenu({ items }: NavigationMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  const [hasBackdropSupport, setHasBackdropSupport] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    try {
      setHasBackdropSupport(CSS.supports('backdrop-filter', 'blur(8px)'))
    } catch {
      setHasBackdropSupport(false)
    }
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    setIsOpen(false)
    const header = document.querySelector('nav')
    const section = document.getElementById(sectionId)
    
    if (!section || !header) return
    
    const headerHeight = header.getBoundingClientRect().height
    const offsetTop = section.offsetTop - headerHeight
    
    window.scrollTo({ top: offsetTop, behavior: "smooth" })
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) setIsOpen(false)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) return
    
    document.body.style.overflow = isOpen ? 'hidden' : ''
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, isMobile])

  const toggleMenu = () => setIsOpen(!isOpen)
  
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  return (
    <div className="relative z-50">
      {isMobile ? (
        <>
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-purple-300 transition-colors z-50 relative"
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isOpen}
          >
            {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed top-0 left-0 right-0 h-screen pt-16 bg-black/70 z-40"
                style={hasBackdropSupport ? {
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)'
                } : {}}
                onClick={handleOverlayClick}
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
        </>
      ) : (
        <ul className="flex flex-row space-x-6 px-4 py-2">
          {items.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-purple-300 transition-colors text-base font-medium"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
} 