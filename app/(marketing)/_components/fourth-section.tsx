'use client'

import Image from 'next/image'
import {useRef, useState} from 'react'
import {cn} from '@/lib/utils'

import {TbSwitch3} from 'react-icons/tb'
import {PiEyeLight, PiPaletteLight} from 'react-icons/pi'
import {Lora} from 'next/font/google'

const font = Lora({
  subsets: ['latin'],
  weight: ['400'],
})

const tabs = [
  {
    icon: <TbSwitch3 className="mr-2 rounded-md text-3xl text-sky-600" />,
    header: 'Visualize, filter & sort any way you want',
    subheading:
      'Show only tasks assigned to you, or items marked as urgent. Break down any project in the way that is most helpful to you.',
    images: [
      {title: 'Board', picture: '/assets/ZombieingDoodle.svg'},
      {title: 'Table', picture: '/assets/SprintingDoodle.svg'},
      {title: 'Goal', picture: '/assets/UnboxingDoodle.svg'},
      {title: 'AI', picture: '/assets/RollingDoodle.svg'},
      {title: 'Note', picture: '/assets/DogJumpDoodle.svg'},
      {title: 'List', picture: '/assets/RunningDoodle.svg'},
    ],
    description: 'Choose from a variety of colors',
  },
  {
    icon: <PiEyeLight className="mr-2 rounded-md text-3xl text-sky-600" />,
    header: 'Customize the info you track',
    subheading:
      'Create your own labels, tags, owners, and more, so everyone has context and everything stays organized.',

    image: '/assets/DumpingDoodle.svg',
  },
  {
    icon: <PiPaletteLight className="mr-2 rounded-md text-3xl text-sky-600" />,
    header: 'Choose from a variety of colors',
    subheading:
      'Everything is customizable. Choose your own colors, icons, and more to make Sendtype work for you.',
    image: '/assets/CoffeeDoddle.svg',
  },
]

type Tab = {
  icon: JSX.Element
  header: string
  subheading: string
  images?: {title: string; picture: string}[]
  description?: string
  image?: string
}

const FourthSection = () => {
  const ref = useRef(null)
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0])

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const handleTabClick = (index: any) => {
    setActiveTab(index)
    setActiveImageIndex(0) // Reset activeImageIndex when clicking a new tab
  }

  return (
    <>
      <div className="flex flex-col  items-center justify-center pt-20 xl:py-32">
        <div className="flex items-center justify-center text-3xl font-semibold xl:text-5xl">
          Powerful building blocks
        </div>
        <div className="mx-auto mt-8  grid gap-4  px-8  md:row-span-1 md:w-full  md:grid-cols-2 md:px-16 xl:w-3/4 xl:grid-cols-4  xl:gap-6 xl:px-0 2xl:w-[55%]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`${
                index === 0
                  ? ' flex-col md:col-span-2  xl:col-span-4   xl:row-span-3  xl:flex-col'
                  : 'flex-col xl:col-span-2 xl:row-span-3 '
              } flex rounded-xl bg-[#f6f5f4]  p-6 `}
            >
              <div className="flex flex-col ">
                {tab.icon}
                <div className="mt-2 text-lg font-semibold">{tab.header}</div>
                <div className=" mt-2 ">{tab.subheading}</div>
              </div>
              <>
                {index === 0 && tab.images && (
                  <div className="">
                    <Image
                      src={tab.images[activeImageIndex].picture}
                      alt={`${tab.images[activeImageIndex].title} Image`}
                      width={500}
                      height={500}
                      className="
             mx-auto my-10 flex justify-center rounded-xl
             xl:my-16

                   "
                    />

                    <div className="mx-auto grid grid-cols-5 gap-1 lg:grid-cols-5 xl:w-1/2 xl:grid-cols-6 xl:space-x-2">
                      {tab.images.map((image, index) => (
                        <div
                          key={index}
                          onClick={() => setActiveImageIndex(index)}
                          className={`${
                            index === activeImageIndex
                              ? 'flex items-center justify-center rounded-md bg-[#dbd9d9] p-1 '
                              : '  items-center justify-center rounded-md bg-[#f6f5f4] p-1 hover:bg-[#eae7e7] '
                          }  `}
                        >
                          <div className=" flex items-center justify-center text-sm">
                            {image.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>

              <>
                {index !== 0 && (
                  <div className="mt-4">
                    <Image
                      src={tab?.image || ''}
                      alt={`${tab.header} Image`}
                      width={500}
                      height={500}
                      className="mt-10  rounded-xl"
                    />
                  </div>
                )}
              </>
            </div>
          ))}
        </div>

        <div
          className={cn(
            'flex items-center justify-center px-8 pt-6 text-center text-xl md:w-2/3 md:px-8  xl:w-1/2 xl:py-10 xl:text-2xl ',
            font.className
          )}
        >
          &quot;Sendtype adapts to your needs. It&apos;s as minimal or as
          powerful as you need it to be.&quot;
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image
            src="/logos/logoipsum-327.svg"
            alt="Canva logo"
            width={1000}
            height={1000}
            className="w-10 pt-2  xl:w-14 xl:pt-0 "
          />

          <div className="m text-center">
            <div className="pt-4  text-sm font-semibold">Carlos Hernandez</div>
            <div className="text-sm">Marketing Director, Palium Software</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FourthSection
