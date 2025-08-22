import type { Metadata } from 'next'
import TopNavBar from '@/components/TopNavBar'
import Footer from '@/components/Footer'
import Experts from './components/Experts'
import Feature1 from './components/Feature1'
import Feature2 from './components/Feature2'
import Feature3 from './components/Feature3'
import Hero from './components/Hero'
import MarqueeGroup from './components/MarqueeGroup'
import OnBoarding from './components/OnBoarding'
import SearchPlan from './components/SearchPlan'
import ValuableAssets from './components/ValuableAssets'

export const metadata: Metadata = {
  title: 'KonnectWell - Financial Advising Matchmaking Service',
  description: 'Trusted connections. Data-driven fit. Find your perfect financial advisor match with KonnectWell.',
}

const KonnectWell = () => {
  return (
    <>
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
