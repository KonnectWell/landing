'use client'
import { useState, useEffect } from 'react'
import { LuMaximize, LuMinimize } from 'react-icons/lu'

// Extend Document interface for legacy fullscreen support
interface ExtendedDocument extends Document {
  mozFullScreenElement?: Element | null
  webkitFullscreenElement?: Element | null
  msFullscreenElement?: Element | null
  mozCancelFullScreen?: () => void
  webkitCancelFullScreen?: () => void
  cancelFullScreen?: () => void
  webkitIsFullScreen?: boolean
  mozFullScreen?: boolean
}

// Extend HTMLElement interface for legacy fullscreen support
interface ExtendedHTMLElement extends HTMLElement {
  mozRequestFullScreen?: () => void
  webkitRequestFullscreen?: () => void
}

const MaximizeScreen = () => {
  const [fullScreenOn, setFullScreenOn] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  /*
   * toggle full screen mode
   */
  const toggleFullScreen = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return
    
    const documentElement = document as ExtendedDocument
    const htmlElement = documentElement.documentElement as ExtendedHTMLElement
    
    documentElement.body.classList.add('fullscreen-enable')
    
    if (
      !documentElement.fullscreenElement &&
      /* alternative standard method */ !documentElement.mozFullScreenElement &&
      !documentElement.webkitFullscreenElement
    ) {
      // current working methods
      if (htmlElement.requestFullscreen) {
        htmlElement.requestFullscreen()
      } else if (htmlElement.mozRequestFullScreen) {
        htmlElement.mozRequestFullScreen()
      } else if (htmlElement.webkitRequestFullscreen) {
        htmlElement.webkitRequestFullscreen()
      }
      setFullScreenOn(true)
    } else {
      if (documentElement.exitFullscreen) {
        documentElement.exitFullscreen()
      } else if (documentElement.mozCancelFullScreen) {
        documentElement.mozCancelFullScreen()
      } else if (documentElement.webkitCancelFullScreen) {
        documentElement.webkitCancelFullScreen()
      }
      setFullScreenOn(false)
    }

    // handle fullscreen exit
    const exitHandler = () => {
      if (
        !documentElement.webkitIsFullScreen &&
        !documentElement.mozFullScreen &&
        !documentElement.msFullscreenElement
      ) {
        setFullScreenOn(false)
        documentElement.body.classList.remove('fullscreen-enable')
      }
    }
    documentElement.addEventListener('fullscreenchange', exitHandler)
    documentElement.addEventListener('webkitfullscreenchange', exitHandler)
    documentElement.addEventListener('mozfullscreenchange', exitHandler)
  }

  if (!isMounted) {
    return (
      <button
        type="button"
        className="inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10"
      >
        <div className="size-5 bg-gray-400 rounded animate-pulse"></div>
      </button>
    )
  }

  return (
    <button
      onClick={toggleFullScreen}
      type="button"
      className="inline-flex size-9 flex-shrink-0 items-center justify-center gap-2 rounded-md align-middle font-medium text-zinc-200 transition-all duration-300 hover:bg-white/10"
    >
      {fullScreenOn ? (
        <LuMinimize className="size-5" />
      ) : (
        <LuMaximize className="size-5" />
      )}
    </button>
  )
}

export default MaximizeScreen

