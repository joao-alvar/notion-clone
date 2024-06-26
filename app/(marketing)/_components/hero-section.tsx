'use client'

import Image from 'next/image'
// import Link from "next/link";

import {motion} from 'framer-motion'
import {useRef} from 'react'
// import { useInView } from "framer-motion";

import {useMediaQuery} from 'react-responsive'

import {useState} from 'react'
import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from 'react-icons/pi'

const tabs = [
  {
    icon: (
      <PiSparkleLight className="rounded-md bg-purple-100 p-1 text-3xl text-purple-600 md:mr-2" />
    ),
    name: 'AI',
    feature: 'Now with Q&A',
    description: 'Ask literally anything. Sendtype Will answer.',
    more: (
      <div className="flex items-center text-purple-600">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: '/assets/GroovyDoodle.svg',
  },
  {
    icon: (
      <PiBookOpenTextLight className="rounded-md bg-red-100 p-1 text-3xl text-red-600 md:mr-2" />
    ),
    name: 'Wikis',
    description: 'Centralize your knowledge. Make it accessible.',
    more: (
      <div className="flex items-center text-red-600">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: '/assets/PlantDoodle.svg',
  },

  {
    icon: (
      <PiTargetLight className="rounded-md bg-blue-100 p-1 text-3xl text-blue-600 md:mr-2" />
    ),
    name: 'Projects',
    description: 'Manage complex projects without the chaos',
    more: (
      <div className="flex items-center text-blue-600">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: '/assets/CoffeeDoddle.svg',
  },
  {
    icon: (
      <PiFileThin className="rounded-md bg-yellow-100 p-1 text-3xl text-yellow-600 md:mr-2" />
    ),
    name: 'Docs',
    description: 'Simple, powerfulm beautiful. Next-gen notes & docs.',
    more: (
      <div className="flex items-center text-yellow-600">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: '/assets/RunningDoodle.svg',
  },
]

const HeroSection = () => {
  const ref = useRef(null)

  const [activeTab, setActiveTab] = useState(tabs[0])

  const isSmallScreen = useMediaQuery({maxWidth: 767})

  return (
    <div className="flex flex-col md:items-center">
      <div className="items-center justify-center pt-10 xl:pt-20">
        <Image
          src="/assets/ReadingSideDoodle.svg"
          alt="hero image"
          width={1000}
          height={1000}
          className="mx-auto flex w-60 items-center justify-center xl:w-80"
        />
      </div>
      {isSmallScreen ? (
        <div className="px-8">
          <div className="mt-8 grid grid-cols-4 gap-4 md:row-span-1 xl:gap-6 xl:px-0">
            {tabs.map((tab) => (
              <motion.div
                key={tab.name}
                className={`flex cursor-pointer p-1 md:p-8
                ${
                  activeTab.name === tab.name
                    ? 'flex items-center justify-center rounded-md border-gray-200 bg-[#f6f5f4] p-1 md:rounded-xl md:border md:bg-white'
                    : 'items-center justify-center rounded-md p-1 hover:bg-[#eae7e7] md:bg-[#f6f5f4] xl:rounded-xl'
                } `}
                onClick={() => setActiveTab(tab)}
              >
                <div className="mx-auto flex flex-col items-center md:justify-center">
                  <div className="text-4xl md:flex">{tab.icon}</div>
                  <div className="mt-1 text-sm  font-semibold xl:text-lg">
                    {tab.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Display content based on the active tab */}
          <div className="w-full pt-6 md:px-16 md:py-10 lg:px-16 xl:px-0">
            {activeTab && (
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={activeTab.image}
                  width={1025}
                  height={500}
                  alt="logo"
                  className="w-full rounded-xl border p-20 xl:p-40"
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          className="grid auto-rows-fr grid-cols-2 gap-4 sm:my-10 lg:w-3/4 lg:grid-cols-4 xl:my-0
          2xl:w-[55%] tl:grid-cols-1"
        >
          {tabs.map((tab) => (
            <motion.div
              key={tab.name}
              className={`w-50 h-36 cursor-pointer justify-center space-x-4 xl:flex xl:pt-4
                ${
                  activeTab === tab
                    ? 'rounded-xl border bg-white py-4'
                    : 'm rounded-xl bg-[#f6f5f4]  py-4 shadow-md'
                }
              `}
              onMouseEnter={() => setActiveTab(tab)}
            >
              <div className="px-4">
                <div className="flex items-center">
                  <div>{tab.icon}</div>
                  <div className="text-2xl font-semibold">{tab.name}</div>

                  {/* Render feature tag only for "AI" tab */}
                  {tab.name === 'AI' && (
                    <div className="ml-auto rounded-full bg-purple-100 px-2 py-1 text-xs font-semibold text-purple-600">
                      {tab.feature}
                    </div>
                  )}
                </div>

                <motion.div
                  className="flex flex-col text-sm"
                  initial={{y: 0}}
                  animate={{y: activeTab === tab ? 10 : 25}}
                  transition={{duration: 0.2}}
                >
                  <div className="justify-start">
                    {/* Only animate the description */}
                    <motion.div
                      initial={{opacity: 0, y: 10}}
                      animate={{opacity: 1, y: 0}}
                      transition={{duration: 0.3}}
                    >
                      {tab.description}
                    </motion.div>
                  </div>

                  {/* Conditional rendering for "Learn more" link */}
                  {activeTab === tab && (
                    <div className="mt-2 text-sm">{tab.more}</div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Display content based on the active tab */}
      <div className="hidden w-3/4 px-8 py-10 md:flex md:px-0 2xl:w-[55%]">
        {activeTab && (
          <div className="w-full items-center justify-center space-x-6 hover:cursor-pointer md:flex">
            <Image
              src={activeTab.image}
              width={500}
              height={500}
              alt="logo"
              className="w-full rounded-xl bg-[#f6f5f4] p-20 shadow-md xl:p-40"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroSection
