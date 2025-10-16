import brand1 from '@/assets/images/brand/1.png'
import brand2 from '@/assets/images/brand/2.png'
import brand3 from '@/assets/images/brand/3.png'
import brand4 from '@/assets/images/brand/4.png'
import brand5 from '@/assets/images/brand/5.png'
import brand6 from '@/assets/images/brand/6.png'
import Feature3 from './Feature3'
import Script from 'next/script'

const brands = [brand1, brand2, brand3, brand4, brand5, brand6]
const OnBoarding = () => {
  return (
    <section id="onboarding" className="flex flex-col items-center justify-center w-full pt-10">
      <div className="w-full container py-10">
      <div data-tf-live="01K7QHK5PWAT0D2F4KWKJQYQAD"></div>
      <Script src="//embed.typeform.com/next/embed.js" strategy="lazyOnload" />
      </div>
    <div  className="py-10 lg:py-20">
      <div className="container">
      <Feature3 />

      </div>
    </div>
    </section>
  )
}

export default OnBoarding
