import Image from 'next/image'

import {Poppins} from 'next/font/google'

import {cn} from '@/lib/utils'

const font = Poppins({subsets: ['latin'], weight: ['400', '600']})

export const Logo = () => {
  return (
    <div className="hidden items-center gap-x-2 md:flex">
      <Image
        src="/logo.svg"
        alt="Jotion"
        width={'40'}
        height={'40'}
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        alt="Jotion"
        width={'40'}
        height={'40'}
        className="hidden dark:block"
      />
      <p className={cn('font-semibold', font.className)}>Jotion</p>
    </div>
  )
}
