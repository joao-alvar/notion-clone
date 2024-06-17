import Image from 'next/image'
import {Button} from '@/components/ui/button'
import {Heading} from './_components/heading'
import {Heroes} from './_components/heroes'
import {Footer} from '../../components/footer'
import HeroSection from './_components/hero-section'
import SecondSection from './_components/second-section'
import ThirdSection from './_components/third-section'
import FourthSection from './_components/fourth-section'
import FifthSection from './_components/fifth-section'
import SixthSection from './_components/sixth-section'
import SeventhSection from './_components/seventh-section'
import GetStartedFree from './_components/eighth-section'

const MarketingPage = () => {
  return (
    <div className="flex min-h-full flex-col dark:bg-[#1f1f1f]">
      <div>
        <Heading />
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />

        <SixthSection />
        <SeventhSection />
        <GetStartedFree />
      </div>
      <Footer />
    </div>
  )
}

export default MarketingPage
