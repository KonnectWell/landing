'use client'
import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from 'react'
import type { LayoutState, LayoutTheme, LayoutType } from './layout'

const LayoutContext = createContext<LayoutType | undefined>(undefined)

function useLayoutContext() {
  const context = useContext(LayoutContext)
  if (context === undefined) {
    throw new Error('useLayoutContext must be used within an LayoutProvider')
  }
  return context
}

function LayoutProvider({ children }: Readonly<{ children: ReactNode }>) {
  const INIT_STATE: LayoutState = useMemo(() => ({
    theme: 'light',
  }), [])

  const [settings, setSettings] = useState<LayoutState>(INIT_STATE)
  const [isMounted, setIsMounted] = useState(false)

  const themeMode = settings.theme

  // Ensure component is mounted before accessing DOM
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // update settings
  const updateSettings = useCallback((_newSettings: Partial<LayoutState>) => {
    setSettings({ ...settings, ..._newSettings })
  }, [settings])

  useEffect(() => {
    if (!isMounted || typeof document === 'undefined') return
    
    const html = document.getElementsByTagName('html')[0]
    if (themeMode === 'dark') html.classList.add('dark')
    else html.classList.remove('dark')
  }, [themeMode, isMounted])

  const updateTheme = useCallback((newTheme: LayoutTheme) => {
    updateSettings({ ...settings, theme: newTheme })
  }, [updateSettings, settings])

  const resetSettings = useCallback(() => {
    setSettings(INIT_STATE)
  }, [INIT_STATE])

  return (
    <LayoutContext.Provider
      value={useMemo(
        () => ({
          settings,
          themeMode,
          updateTheme,
          resetSettings,
        }),
        [settings, themeMode, updateTheme, resetSettings]
      )}
    >
      {children}
    </LayoutContext.Provider>
  )
}

export { useLayoutContext, LayoutProvider }
