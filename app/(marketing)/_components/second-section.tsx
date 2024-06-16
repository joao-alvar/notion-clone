import Image from 'next/image'
import React from 'react'
import {PiArrowRight} from 'react-icons/pi'

const logos = [
  {image: '/logos/logoipsum-265.svg'},
  {image: '/logos/logoipsum-222.svg'},
  {image: '/logos/logoipsum-243.svg'},
  {image: '/logos/logoipsum-258.svg'},
  {image: '/logos/logoipsum-317.svg'},
  {image: '/logos/logoipsum-289.svg'},
  {image: '/logos/logoipsum-297.svg'},
  {image: '/logos/logoipsum-311.svg'},
  {image: '/logos/logoipsum-264.svg'},
  {image: '/logos/logoipsum-264.svg'},
]

const SecondSection = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-16">
      <div className="w-3/4 text-center text-4xl font-semibold xl:text-5xl">
        Millions run on Sendtype every day
      </div>
      <div className="px-8 py-4 text-center xl:w-1/2">
        Powering the world&apos;s best teams, from next-generation startups to
        established enterprises.
      </div>
      <div className="flex items-center text-sky-500 hover:cursor-pointer hover:underline">
        Read customer stories <PiArrowRight className="ml-3 text-sm " />
      </div>

      <div className="mx-auto grid  grid-cols-3 items-center justify-center  gap-10 px-10 pt-10 text-center md:px-20 lg:w-1/2 lg:px-0 xl:grid-cols-4">
        {logos.map((logo, index) => (
          <div key={index} className="">
            <Image
              src={logo.image}
              alt="logo"
              width={500}
              height={500}
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SecondSection
