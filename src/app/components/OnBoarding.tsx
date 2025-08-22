import brand1 from '@/assets/images/brand/1.png'
import brand2 from '@/assets/images/brand/2.png'
import brand3 from '@/assets/images/brand/3.png'
import brand4 from '@/assets/images/brand/4.png'
import brand5 from '@/assets/images/brand/5.png'
import brand6 from '@/assets/images/brand/6.png'
import finance6 from '@/assets/images/landing/finance/img-6.jpg'
import finance7 from '@/assets/images/landing/finance/img-7.png'
import Image from 'next/image'

const brands = [brand1, brand2, brand3, brand4, brand5, brand6]
const OnBoarding = () => {
  return (
    <section id="onboarding" className="py-10 lg:py-20">
      <div className="container">
        <div className="grid items-center gap-6 lg:grid-cols-2">

          <div className="relative lg:mb-0">
            <div className="relative h-full">
              <Image
                alt="KonnectWell matching process"
                src={finance6}
                className="mx-auto h-full rounded-xl"
              />
            </div>
            <div className="absolute inset-x-0 -bottom-14 hidden sm:block">
              <Image
                alt="KonnectWell advisor profiles"
                src={finance7}
                className="h-full rounded-xl"
              />
            </div>
          </div>

          <div>
            <div className="max-w-2xl">
              <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                Simple Matching Process
              </span>
              <h2 className="mt-4 text-4xl font-medium text-default-950">
                Three Easy Steps to Your Perfect Financial Planning Partner
              </h2>
              <p className="mt-5 text-base">
                Our streamlined financial advisor matching process makes finding your ideal certified financial planner simple and efficient. Answer a few questions about your investment goals and retirement planning needs, review your personalized advisor matches, and start building your financial future with confidence through expert wealth management guidance.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {brands.map((image, idx) => {
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-default-200 p-10"
                  >
                    <Image alt="brand-image" src={image} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnBoarding
