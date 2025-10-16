import type { Metadata } from 'next'
import { REM } from 'next/font/google'
import { type ReactNode } from 'react'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'sonner'

import '@/assets/css/style.css'

const rem = REM({
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  adjustFontFallback: false,
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'KonnectWell - Financial Advising Matchmaking Service',
    template: '%s | KonnectWell - Financial Advising Matchmaking Service',
  },
  description: 'KonnectWell is a financial advising matchmaking service that connects you with the perfect financial advisor. Our algorithm is designed to help facilitate trusted connections and data-driven matches for your financial planning needs.',
  keywords: [
    'financial advisor',
    'financial planning',
    'investment advisor',
    'wealth management',
    'retirement planning',
    'financial matchmaking',
    'financial services',
    'personal finance',
    'financial consulting',
    'money management'
  ],
  authors: [{ name: 'KonnectWell Team' }],
  creator: 'KonnectWell',
  publisher: 'KonnectWell',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://konnectwell.com'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://konnectwell.com',
    title: 'KonnectWell - Financial Advising Matchmaking Service',
    description: 'Trusted connections. Data-driven fit. Find your perfect financial advisor match with KonnectWell.',
    siteName: 'KonnectWell',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'KonnectWell - Financial Advising Matchmaking Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KonnectWell - Financial Advising Matchmaking Service',
    description: 'Trusted connections. Data-driven fit. Find your perfect financial advisor match with KonnectWell.',
    images: ['/og-image.jpg'], // Same image as Open Graph
    creator: '@konnectwell', // Update with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    yandex: 'your-yandex-verification-code', // Optional: Add if you use Yandex
    yahoo: 'your-yahoo-verification-code', // Optional: Add if you use Yahoo
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="KonnectWell" />
        <meta name="application-name" content="KonnectWell" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body className={rem.className}>
        <NextTopLoader color="#2563eb" showSpinner={false} />
        <div id="__next_splash">
          {children}
          <Toaster richColors />
        </div>
      </body>
    </html>
  )
}
