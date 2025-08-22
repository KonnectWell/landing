import type { Metadata } from 'next'
import Experts from './components/Experts'
import Feature1 from './components/Feature1'
import Feature2 from './components/Feature2'
import Feature3 from './components/Feature3'
import Hero from './components/Hero'
import MarqueeGroup from './components/MarqueeGroup'
import OnBoarding from './components/OnBoarding'
import SearchPlan from './components/SearchPlan'
import { TopNavBar, Footer } from '@/components'
// import ValuableAssets from './components/ValuableAssets'

export const metadata: Metadata = {
  title: 'KonnectWell - Financial Advising Matchmaking Service',
  description: 'Trusted connections. Data-driven fit. Find your perfect financial advisor match with KonnectWell.',
}

const KonnectWell = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'KonnectWell',
    description: 'Financial advising matchmaking service that connects you with the perfect financial advisor',
    url: 'https://konnectwell.com',
    logo: 'https://konnectwell.com/logo.png',
    slogan: 'Trusted connections. Data-driven fit.',
    serviceType: 'Financial Advising Matchmaking',
    areaServed: 'United States',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Financial Advisory Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Financial Advisor Matching',
            description: 'AI-powered algorithm to find your perfect financial advisor match'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Financial Planning Consultation',
            description: 'Expert financial planning and consultation services'
          }
        }
      ]
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@konnectwell.com',
      telephone: '+1-555-123-4567'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <TopNavBar
        menuItems={['home', 'experts', 'features', 'onboarding']}
        position="fixed"
        hasDownloadButton
      />

      <Hero />

      <MarqueeGroup />

      <Experts />

      <Feature1 />

      <Feature2 />

      <Feature3 />

      {/* <ValuableAssets /> */}

      <OnBoarding />

      <SearchPlan />

      <Footer />
    </>
  )
}

export default KonnectWell
