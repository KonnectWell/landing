import { LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'

import finance8 from '@/assets/images/landing/finance/img-8.png'
import Image from 'next/image'

const Feature1 = () => {
  return (
    <section id="features" className="pt-10 lg:pt-20">
      <div className="container">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Smart Matching
            </span>
            <h2 className="mt-4 text-4xl/tight font-medium text-default-950">
              AI-Powered Advisor Matching: Find Your Perfect Financial Fit
            </h2>
            <p className="mt-5 text-base text-default-900">
              Our proprietary algorithm analyzes your financial goals, risk tolerance, investment preferences, and life circumstances to connect you with advisors who specialize in your specific needs. No more guesswork - just data-driven matches that lead to lasting financial relationships.
            </p>
            <div className="group mt-5">
              <Link
                href="#onboarding"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm text-primary transition-all duration-200 hover:bg-primary hover:text-white"
              >
                Start Matching
                <LuMoveRight className="inline-block h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <Image
              alt="KonnectWell smart matching algorithm"
              src={finance8}
              className="h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature1
