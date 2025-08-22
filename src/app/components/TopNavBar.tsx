'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { LuNewspaper, LuMenu, LuX } from 'react-icons/lu'

import logo from '@/assets/images/konnect-well.png'
const logoSize = 60

const TopNavBar = ({
  menuItems,
  position = 'static',
  hasDownloadButton = false,
}: {
  menuItems: string[]
  position?: 'static' | 'fixed'
  hasDownloadButton?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMounted, setIsMounted] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  // Ensure component is mounted before accessing DOM
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const activeSectionCallback = useCallback(() => {
    if (!isMounted) return
    
    const sections = menuItems.map((item) => document.getElementById(item))
    const scrollPosition = window.scrollY + 100

    sections.forEach((section, index) => {
      if (section) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(menuItems[index])
        }
      }
    })
  }, [menuItems, isMounted])

  useEffect(() => {
    if (!isMounted) return

    const handleScroll = () => {
      activeSectionCallback()
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeSectionCallback, isMounted])

  const scrollToSection = (sectionId: string) => {
    if (!isMounted) return
    
    const element = document.getElementById(sectionId)
    if (element && navRef.current) {
      const offsetTop = element.offsetTop - navRef.current.offsetHeight
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <nav className={`${position === 'fixed' ? 'fixed' : 'static'} top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50`}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {menuItems.map((item) => (
                <div key={item} className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav
      ref={navRef}
      className={`${position === 'fixed' ? 'fixed' : 'static'} top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="KonnectWell Logo"
                height={logoSize}
                width={logoSize}
                className="flex h-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            {hasDownloadButton && (
              <div className="inline-flex shrink gap-2">
                <Link href="#onboarding" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-1.5 text-base text-white transition-all hover:bg-primary-700">
                  <LuNewspaper className="h-4 w-4 fill-white/40" />
                  <span className="hidden sm:block">Get Started</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            >
              {isOpen ? <LuX className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item)
                    setIsOpen(false)
                  }}
                  className={`block w-full px-3 py-2 text-left text-base font-medium transition-colors hover:text-primary ${
                    activeSection === item ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}

              {hasDownloadButton && (
                <div className="inline-flex shrink gap-2 lg:hidden">
                  <Link href="#onboarding" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-1.5 text-base text-white transition-all hover:bg-primary-700">
                    <LuNewspaper className="h-4 w-4 fill-white/40" />
                    <span className="hidden sm:block">Get Started</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default TopNavBar
