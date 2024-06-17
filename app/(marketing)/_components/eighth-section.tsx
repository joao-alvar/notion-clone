import {PiArrowRight} from 'react-icons/pi'
import Image from 'next/image'

const GetStartedFree = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center border-b py-20 xl:py-24">
        <div className="text-center text-4xl font-semibold  xl:text-5xl">
          Get started for free
        </div>
        <div className="px-10 py-4  text-center xl:w-1/3">
          Never lose a great idea again. Capture, organize, and share with
          Sendtype.
        </div>
        <div className="flex items-center text-sky-500 hover:cursor-pointer hover:underline">
          Request a demo <PiArrowRight className="ml-3 text-sm " />
        </div>

        <Image
          src="/assets/MessyDoodle.svg"
          alt="hero image"
          width={1000}
          height={1000}
          className="w-80 pt-10"
        />
      </div>
    </>
  )
}

export default GetStartedFree
