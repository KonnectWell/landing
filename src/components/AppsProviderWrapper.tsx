'use client'
import { LayoutProvider } from '@/context'
import { SessionProvider } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { useEffect, type ReactNode, useState } from 'react'

const handleChangeTitle = () => {
  if (typeof document === 'undefined') return
  
  if (document.visibilityState == 'hidden')
    document.title = 'Please come back :-('
  else
    document.title =
      'KonnectWell - Financial Advising Matchmaking Service'
}

const AppsProviderWrapper = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof document === 'undefined') return
    
    const e = document.querySelector<HTMLDivElement>('#__next_splash')
    if (e?.hasChildNodes()) {
      document.querySelector('#splash-screen')?.classList.add('remove')
    }
    e?.addEventListener('DOMNodeInserted', () => {
      document.querySelector('#splash-screen')?.classList.add('remove')
    })

    import('preline/preline')

    document.addEventListener('visibilitychange', handleChangeTitle)
    return () => {
      document.removeEventListener('visibilitychange', handleChangeTitle)
    }
  }, [isMounted])

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return
    
    const timeout = setTimeout(() => {
      if (window.HSStaticMethods) window.HSStaticMethods.autoInit()
    }, 400)

    return () => clearTimeout(timeout)
  }, [pathname, isMounted])

  return (
    <SessionProvider>
      <LayoutProvider>{children}</LayoutProvider>
    </SessionProvider>
  )
}

export default AppsProviderWrapper
