'use client'

import Image from 'next/image'
import {useRef, useState} from 'react'
import {cn} from '@/lib/utils'

import {TbSwitch3} from 'react-icons/tb'
import {PiEyeLight, PiPaletteLight, PiArrowRight} from 'react-icons/pi'
import {Lora} from 'next/font/google'

const font = Lora({
  subsets: ['latin'],
  weight: ['400'],
})

const tabs = [
  {
    text: '1M+',
    subtext: 'community members',
  },
  {
    text: '150+',
    subtext: 'community groups',
  },
  {
    text: '50+',
    subtext: 'countries represented',
  },

  {
    header: 'Customize the info you track',
    subheading:
      'Create your own labels, tags, owners, and more, so everyone has context and everything stays organized.',

    image: '/assets/DumpingDoodle.svg',
  },

  {
    header: 'Choose from a variety of colors',
    subheading:
      'Everything is customizable. Choose your own colors, icons, and more to make Sendtype work for you.',
    image: '/assets/CoffeeDoddle.svg',
  },

  {
    icon: <TbSwitch3 className="mr-2 rounded-md text-3xl text-sky-600" />,
    title: 'Visualize, filter & sort any way you want',
    description:
      'Show only tasks assigned to you, or items marked as urgent. Break down any project in the way that is most helpful to you.',
    images: [
      {title: 'Event in New York', picture: '/assets/ZombieingDoodle.svg'},
      {
        title: 'Community meet up in London',
        picture: '/assets/SprintingDoodle.svg',
      },
      {title: 'Conference in Brazil', picture: '/assets/UnboxingDoodle.svg'},
      {title: 'Milan Tech Week', picture: '/assets/RollingDoodle.svg'},
      {title: 'Madrid tech festival', picture: '/assets/DogJumpDoodle.svg'},
    ],
  },
  {
    profile: '/assets/DoogieDoodle.svg',
    userName: 'Carlos Hernandez',
    userHandle: '@carlos',
    userText: (
      <div className="md:mt-6">
        <span className="text-sky-500">@Sendtypesoftware </span>
        it is definitely the best tool I have ever used.
      </div>
    ),
  },
  {
    profile: '/assets/DoogieDoodle.svg',
    userName: 'John Wright',
    userHandle: '@johnwrigh31t',
    userText: (
      <div className="md:mt-6">
        <span className="text-sky-500">@Sendtypesoftware </span>
        it is definitely the best tool I have ever used.
      </div>
    ),
  },
  {
    profile: '/assets/DoogieDoodle.svg',
    userName: 'Jessica Smith',
    userHandle: '@JessicaS1',
    userText: (
      <div className="md:mt-6">
        <span className="text-sky-500">@Sendtypesoftware </span>
        it is definitely the best tool I have ever used.
      </div>
    ),
  },
]

const SixthSection = () => {
  const ref = useRef(null)

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const handleDotClick = (index: any) => {
    setActiveImageIndex(index)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20 xl:pt-24">
        <div className="w-3/4 text-center text-3xl font-semibold xl:w-1/2 xl:text-5xl">
          Join a global movement. Unleash your creativity.
        </div>
        <div className="px-10 py-4  text-center md:w-2/3 xl:w-1/2 2xl:w-1/3">
          Our vibrant community produces content, teaches courses, and leads
          events all over the world.
        </div>
        <div className="flex items-center text-sky-500 hover:cursor-pointer hover:underline">
          Learn more <PiArrowRight className="ml-3 text-sm " />
        </div>
        <div className="mx-auto mt-8 grid grid-cols-12 gap-4 px-8 md:row-span-2 md:w-full md:px-16 xl:w-3/4 xl:gap-6 xl:px-0 2xl:w-[55%]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`
              col-span-12
              ${
                index <= 2
                  ? 'flex rounded-xl bg-[#f6f5f4] p-6 md:col-span-6 lg:col-span-4'
                  : index <= 4
                    ? 'flex rounded-xl bg-[#f6f5f4] p-6 md:col-span-6'
                    : index === 5
                      ? ' rounded-xl  bg-[#f6f5f4]  p-6    md:col-span-6 lg:col-span-8 lg:row-span-3 '
                      : index > 5
                        ? 'col-span-12 flex-col  rounded-xl bg-[#f6f5f4] p-6 md:col-span-4 lg:col-span-4 '
                        : 'l'
              }
            `}
            >
              {index <= 2 ? (
                <div className="flex flex-col">
                  <div className="text-5xl font-semibold text-sky-600">
                    {tab.text}
                  </div>
                  <div className="text-sm">{tab.subtext}</div>
                </div>
              ) : index <= 4 ? (
                <div>
                  <div className="text-2xl font-semibold">{tab.header}</div>
                  <div className="mt-2 text-sm">{tab.subheading}</div>
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={tab.image || ''}
                      width={1025}
                      height={500}
                      alt="logo"
                      className="w-full rounded-xl p-10 xl:p-20"
                    />
                  </div>
                </div>
              ) : index === 5 ? (
                <>
                  {tab.images && (
                    <div className="flex flex-col items-center justify-center">
                      <Image
                        src={tab.images[activeImageIndex].picture}
                        alt={`${tab.images[activeImageIndex].title} Image`}
                        width={1025}
                        height={500}
                        className="w-full rounded-xl"
                      />

                      <div>
                        <div className="mt-10 pb-4 text-xl font-semibold md:mt-0">
                          {tab.images[activeImageIndex].title}
                        </div>
                      </div>

                      <div className="flex space-x-2 xl:mt-10 xl:space-x-6">
                        {tab.images.map((image, index) => (
                          <div
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`${
                              index === activeImageIndex
                                ? 'rounded-full bg-green-400 p-2'
                                : 'rounded-full bg-blue-400 p-2'
                            }  `}
                          ></div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                index > 5 && (
                  <>
                    <div className="flex flex-col">
                      <Image
                        src={tab.profile || ''}
                        width={500}
                        height={500}
                        alt="logo"
                        className="h-10 w-10 rounded-full border p-1"
                      />
                    </div>
                    <div className="text-xl font-normal">{tab.userName}</div>
                    <div className="text-sm font-normal">{tab.userHandle}</div>
                    <div className="mt-10 pb-4 text-sm font-normal md:mt-0">
                      {tab.userText}
                    </div>
                  </>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SixthSection
