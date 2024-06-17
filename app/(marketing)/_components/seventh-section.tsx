import {
  PiAirplaneFill,
  PiArrowRight,
  PiCalendarCheckFill,
  PiCheckCircleFill,
  PiClipboardLight,
  PiFlag,
  PiFlagCheckeredFill,
  PiHouseFill,
  PiHouseLight,
  PiWatchFill,
} from 'react-icons/pi'
import Image from 'next/image'

const items = [
  {
    icon: <PiHouseFill className="text-2xl text-red-500" />,
    name: 'Company wiki',
    button: (
      <div className="flex items-center pt-6 text-sky-500 hover:cursor-pointer hover:underline">
        Get template <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
    image: '/company-wiki-template.webp',
  },
  {
    icon: <PiFlagCheckeredFill className="text-2xl text-sky-600" />,
    name: 'Product roadmap',
    button: (
      <div className="flex items-center pt-6 text-sky-500 hover:cursor-pointer hover:underline">
        Get template <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
  },
  {
    icon: <PiCheckCircleFill className="text-2xl text-orange-500" />,
    name: 'OKRs',
    button: (
      <div className="flex items-center pt-6 text-sky-500 hover:cursor-pointer hover:underline">
        Get template <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
  },
  {
    icon: <PiClipboardLight className="text-2xl text-green-500" />,
    name: 'Meeting notes',
    button: (
      <div className="flex items-center pt-6 text-sky-500 hover:cursor-pointer hover:underline">
        Get template <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
  },
  {
    icon: <PiAirplaneFill className="text-2xl text-red-500" />,
    name: 'Vacation Planner',
    button: (
      <div className="flex items-center pt-6 text-sky-500 hover:cursor-pointer hover:underline">
        Get template <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
  },
  {
    icon: <PiCalendarCheckFill className="text-2xl text-emerald-500" />,
    name: 'Editorial calendar',
    button: (
      <div className="flex items-center pt-6 text-sky-500 hover:cursor-pointer hover:underline">
        Get template <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
  },

  {
    icon: <PiWatchFill className="text-2xl text-indigo-500" />,
    name: 'Habit tracker',
    button: (
      <div className="flex items-center pt-6 text-sky-500 hover:cursor-pointer hover:underline">
        Get template <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
  },
]

const SeventhSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-32">
        <div className="flex items-center justify-center text-3xl font-semibold xl:text-5xl">
          Endless ways to use it
        </div>
        <div className="flex items-center pt-6 text-sky-500 hover:cursor-pointer hover:underline">
          Browse all templates <PiArrowRight className="ml-3 text-sm " />
        </div>
      </div>
      <div className="mx-auto mt-8  grid gap-4  px-8  md:row-span-1 md:w-full md:grid-cols-2 md:px-16 xl:w-3/4 xl:grid-cols-4  xl:gap-6 xl:px-0 2xl:w-[55%]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 0
                ? ' flex-col md:col-span-2  md:flex-row  xl:col-span-2 xl:row-span-3 xl:flex-col'
                : ''
            } flex rounded-xl bg-[#f6f5f4]  p-6 ${
              index === 0 ? 'justify-between' : ''
            }`}
          >
            <div className="flex flex-col ">
              {item.icon}
              <div className="mt-2 text-lg font-semibold">{item.name}</div>
              {item.button}
            </div>
            {item.image && (
              <div
                className={` ${
                  index !== 0 ? 'justify-between' : 'flex-col justify-end'
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.name} Image`}
                  width={1000}
                  height={1000}
                  className="mt-10 w-96 rounded-xl"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default SeventhSection
