import Image from 'next/image'
import logo from '/public/logo-black.png'
import logoDark from '/public/logo-white.png'

export const Logo = () => {
  return (
    <div className="hidden items-center gap-x-2 md:flex">
      <Image
        src={logo}
        alt="Sendtype"
        width={'170'}
        height={'80'}
        className="dark:hidden"
      />
      <Image
        src={logoDark}
        alt="Sendtype"
        width={'170'}
        height={'80'}
        className="hidden dark:block"
      />
    </div>
  )
}
