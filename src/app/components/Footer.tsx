'use client'
import { footerLinks } from '@/assets/data'
import { Fragment, useState } from 'react'
import { LuMoveRight, LuCheck, LuX } from 'react-icons/lu'

import logo from '@/assets/images/konnect-well.png'
import Link from 'next/link'
import Image from 'next/image'

const logoSize = 90;

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    setIsSubmitting(true)
    setStatus('idle')
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(data.message || 'Thank you for subscribing!')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }
  }

  return (
    <footer>
      <div className="border-y border-default-200">
        <div className="container py-20">
          <div className="grid gap-10 md:grid-cols-3 lg:gap-16 xl:grid-cols-5">
            <div className="md:col-span-3 xl:col-span-2">
              <div>
                <Link href="">
                  <Image
                    src={logo}
                    height={logoSize}
                    width={logoSize}
                    alt="KonnectWell Logo"
                    className="flex"
                  />
                </Link>
                <p className="mt-6  text-base">
                  KonnectWell connects you with trusted financial advisors through our advanced matching algorithm. Trusted connections. Data-driven fit.
                </p>
                <form
                  onSubmit={onSubmit}
                  className="mt-6 space-y-2"
                >
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="h-12 w-full rounded-lg bg-default-100 py-4 pe-16 ps-4 text-default-950 placeholder:text-default-600 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter your email for financial tips"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="absolute end-[6px] top-[6px] inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary/20 px-6 text-primary transition-all duration-500 hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                      ) : (
                        <LuMoveRight className="h-6 w-6" />
                      )}
                    </button>
                  </div>
                  {/* Status Message */}
                  {status !== 'idle' && (
                    <div className={`flex items-center gap-2 text-sm ${
                      status === 'success' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {status === 'success' ? (
                        <LuCheck className="h-4 w-4" />
                      ) : (
                        <LuX className="h-4 w-4" />
                      )}
                      <span>{message}</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
            {footerLinks.map((item, idx) => {
              return (
                <div key={idx}>
                  <ul className="flex flex-col gap-3">
                    <h5 className="mb-2 font-medium text-default-800 lg:text-lg xl:text-xl">
                      {item.title}
                    </h5>
                    {item.items.map((item, idx) => {
                      const Icon = item.icon
                      return (
                        <Fragment key={idx}>
                          {Icon ? (
                            <li className="group flex items-center gap-5">
                              <Link
                                href={`${item.link ? item.link : ''}`}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-default-300 text-default-800 transition-all duration-700 group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                              >
                                <Icon className="h-5 w-5" />
                              </Link>
                              <h5 className="text-base font-medium text-default-800">
                                {item.name}
                              </h5>
                            </li>
                          ) : (
                            <li>
                              <Link
                                href={`${item.link ? item.link : ''}`}
                                className="text-base text-default-700 transition-all hover:text-default-950"
                              >
                                {item.name}
                              </Link>
                            </li>
                          )}
                        </Fragment>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="container flex h-full flex-wrap items-center justify-center text-center md:justify-between md:text-start">
          <p className="text-base text-default-900">
            {new Date().getFullYear()} © KonnectWell. All rights reserved.
          </p>
          <p className="text-base">
            <Link href="">Terms Conditions &amp; Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
