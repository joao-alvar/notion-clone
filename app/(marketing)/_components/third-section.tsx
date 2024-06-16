import Image from 'next/image'
import React from 'react'

import {Lora} from 'next/font/google'
import {cn} from '@/lib/utils'

const font = Lora({
  subsets: ['latin'],
  weight: ['400'],
})

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center pt-24 xl:pt-32">
      <div className="mx-auto w-3/5 text-center text-3xl font-semibold xl:w-1/3 xl:text-5xl 2xl:w-3/5">
        Consolidate tools. Cut costs.
      </div>

      <Image
        src="/assets/canva-logo.png"
        alt="Canva logo"
        width={1000}
        height={1000}
        className="w-4/5 pt-10 
                xl:w-1/3
                xl:pt-10

                
                "
      />

      <div
        className={cn(
          'flex w-4/5 items-center justify-center px-8 pb-4 pt-10  text-center text-xl  xl:py-10  xl:text-2xl ',
          font.className
        )}
      >
        &quot;We got rid of nearly a dozen different tools because of what
        Sendtype does for us.&quot;
      </div>

      <div className="flex flex-col items-center justify-center">
        <Image
          src="/logos/logoipsum-327.svg"
          alt="Canva logo"
          width={1000}
          height={1000}
          className="w-10 pt-2  xl:w-14 xl:pt-0 "
        />

        <div className=" text-center">
          <div className="pt-4  text-sm font-medium">Rodrigo Hernandez</div>
          <div className="text-sm">Marketing Director, Palium Software</div>
        </div>
      </div>
    </div>
  )
}

export default ThirdSection
