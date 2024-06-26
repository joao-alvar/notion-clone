'use client'

import Image from 'next/image'
import {motion} from 'framer-motion'
import {useRef} from 'react'
import {useState} from 'react'
import {
  PiBookOpenTextLight,
  PiCompassLight,
  PiHeadset,
  PiMegaphoneLight,
  PiRocketLaunchFill,
  PiSparkleLight,
} from 'react-icons/pi'

const tabs = [
  {
    icon: <PiSparkleLight />,
    name: 'Engineering',
    image: '/assets/DancingDoodle.svg',
  },
  {
    icon: <PiBookOpenTextLight />,
    name: 'Design',
    image: '/assets/DogJumpDoodle.svg',
  },
  {
    icon: <PiRocketLaunchFill />,
    name: 'Product',
    image: '/assets/MeditatingDoodle.svg',
  },
  {
    icon: <PiMegaphoneLight />,
    name: 'Marketing',
    image: '/assets/ReadingDoodle.svg',
  },
  {
    icon: <PiCompassLight />,
    name: 'Operations',
    image: '/assets/SittingDoodle.svg',
  },
  {
    icon: <PiHeadset />,
    name: 'HR',
    image: '/assets/SleekDoodle.svg',
  },
]

const FifthSection = () => {
  const ref = useRef(null)

  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <div className="relative mx-auto flex flex-col items-center justify-center px-8 md:px-0 xl:w-3/4 2xl:w-[55%]">
      <div className="pb-8 pt-20 text-center text-3xl font-semibold lg:pt-0 xl:text-5xl">
        Every team, side-by-side
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 md:row-span-1 lg:grid-cols-6 xl:gap-6 xl:px-0">
        {tabs.map((tab) => (
          <motion.div
            key={tab.name}
            className={`flex cursor-pointer p-1 md:p-8 
              ${
                activeTab.name === tab.name
                  ? 'flex w-min items-center justify-center rounded-md border-gray-200 bg-[#f6f5f4] p-1 md:rounded-xl md:border md:bg-white'
                  : 'items-center justify-center rounded-md p-1 hover:bg-[#eae7e7] md:bg-[#f6f5f4] xl:rounded-xl'
              } `}
            onClick={() => setActiveTab(tab)}
          >
            <div className="mx-auto flex flex-col items-center md:justify-center">
              <div className="hidden text-4xl md:flex">{tab.icon}</div>
              <div className="text-sm font-semibold md:mt-1 xl:text-lg">
                {tab.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Display content based on the active tab */}
      <div className="w-full py-10 md:px-16 lg:px-16 xl:px-0">
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
  )
}

export default FifthSection
