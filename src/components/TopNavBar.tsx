'use client';
import { toSentenceCase } from '@/helpers';
import { cn } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { LuNewspaper, LuMenu, LuX } from 'react-icons/lu';

import logo from '@/assets/images/konnect-well.png';
const logoSize = 50;

const TopNavBar = ({
  menuItems,
  position,
  hasDownloadButton,
}: {
  menuItems: string[];
  position: 'sticky' | 'fixed';
  hasDownloadButton?: boolean;
}) => {

  const navbarRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [activation, setActivation] = useState<string>(menuItems[0]);
  
  // Ensure component is mounted before accessing DOM
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const activeSection = useCallback(() => {
    if (!isMounted || typeof window === 'undefined') return;
    
    const scrollY = window.scrollY;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      const section = menuItems[i];
      const el: HTMLElement | null = document.getElementById(section)
      if (el && el.offsetTop <= scrollY + 100) {
        setActivation(section);
        return;
      }
    }
  }, [menuItems, isMounted]);

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined' || typeof document === 'undefined') return;

    const handleScroll = () => {
      activeSection();
      if (navbarRef.current) {
        if (window.scrollY >= 80) navbarRef.current.classList.add('nav-sticky');
        else navbarRef.current.classList.remove('nav-sticky');
      }
    };

    document.addEventListener('scroll', handleScroll);

    // Handle initial hash navigation after mount
    const timeout = setTimeout(() => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const hash = window.location.hash;
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'instant' });
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, isMounted]);

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <header className={cn(
        position,
        'inset-x-0 top-0 z-[60] w-full border-b border-transparent bg-white transition-all duration-300 dark:bg-default-50 lg:bg-transparent'
      )}>
        <div className="flex h-full items-center py-4">
          <div className="container">
            <nav className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
              <div className="flex w-full items-center justify-between lg:w-auto">
                <div className="h-10 w-10 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-7 w-7 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="hidden lg:flex lg:items-center lg:space-x-8">
                {menuItems.map((item, idx) => (
                  <div key={idx} className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        ref={navbarRef}
        id="navbar"
        className={cn(
          position,
          'inset-x-0 top-0 z-[60] w-full  border-b border-transparent bg-white transition-all duration-300 dark:bg-default-50 lg:bg-transparent [&.nav-sticky]:bg-white/90 [&.nav-sticky]:shadow-md [&.nav-sticky]:backdrop-blur-3xl dark:[&.nav-sticky]:bg-default-50/80'
        )}
      >
        <div className="flex h-full items-center py-4">
          <div className="container">
            <nav className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
              <div className="flex w-full items-center justify-between lg:w-auto">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="KonnectWell Logo"
                    height={logoSize}
                    width={logoSize}
                    className="flex"
                  />
                </Link>
                <div className="flex items-center gap-2">
                  {hasDownloadButton && (
                    <div className="inline-flex shrink gap-2 lg:hidden">
                      <Link href="#onboarding" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-1.5 text-base text-white transition-all hover:bg-primary-700">
                        <LuNewspaper className="h-4 w-4 fill-white/40" />
                        <span className="hidden sm:block">Get Started</span>
                      </Link>
                    </div>
                  )}
                  <button
                    className="hs-collapse-toggle inline-block lg:hidden"
                    data-hs-overlay="#mobile-menu"
                  >
                    <LuMenu className="h-7 w-7 text-default-600 hover:text-default-900" />
                  </button>
                </div>
              </div>
              <ul className="menu relative mx-auto hidden grow items-center justify-center lg:flex">
                {menuItems.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className={cn(
                        'menu-item mx-2 text-default-800 transition-all duration-300 hover:text-primary [&.active]:text-primary',
                        activation === item && 'active'
                      )}
                    >
                      <Link
                        className="inline-flex items-center rounded-full px-2 py-0.5 text-sm font-medium capitalize lg:text-base"
                        href={`#${item}`}
                      >
                        {toSentenceCase(item)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="ms-auto hidden shrink gap-2 lg:inline-flex">
                <Link
                  href="#onboarding"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-1.5 text-base text-white transition-all hover:bg-primary-700"
                >
                  <LuNewspaper className="h-4 w-4 fill-white/40" />
                  <span className="hidden sm:block">Get Started</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className="hs-overlay fixed bottom-0 left-0 top-0 z-[61] hidden h-screen w-full max-w-[270px] -translate-x-full transform border-r border-default-200 bg-white transition-all [--body-scroll:true] [--overlay-backdrop:false] hs-overlay-open:translate-x-0 dark:bg-default-50"
        tabIndex={-1}
      >
        <div className="flex h-[74px] items-center justify-between border-b border-dashed border-default-200 px-4 transition-all duration-300">
          <Link href="/">
            <Image
              src={logo}
              alt="KonnectWell Logo"
              height={logoSize}
              width={logoSize}
              className="flex h-10"
            />
          </Link>
          <div data-hs-overlay="#mobile-menu" className="hs-collapse-toggle">
            <LuX size={24} />
          </div>
        </div>
        <div className="h-[calc(100%-4rem)] overflow-y-auto">
          <nav className="hs-accordion-group flex h-full w-full flex-col flex-wrap p-4">
            <ul className="space-y-1">
              {menuItems.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={cn(
                      'rounded text-sm font-medium capitalize text-default-900 transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary',
                      activation == `${item}` && 'active'
                    )}
                  >
                    <a className="block w-full px-4 py-2.5" href={`#${item}`}>
                      {toSentenceCase(item)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
