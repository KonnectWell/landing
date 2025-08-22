'use client'
import { useEffect, useState } from 'react'

const useScrollEvent = () => {
  const [scrollPassed, setScrollPassed] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  const handleScroll = () => {
    if (typeof window === 'undefined') return
    
    setScrollY(window.scrollY)
    setScrollPassed(
      ((window.scrollY + window.innerHeight) * 100) / document.body.offsetHeight
    )
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined' || typeof document === 'undefined') return

    window.addEventListener('scroll', handleScroll, { passive: true })
    setScrollY(window.scrollY)
    setScrollHeight(document.body.offsetHeight)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMounted])

  return {
    scrollPassed,
    scrollY,
    scrollHeight,
  }
}

export default useScrollEvent
