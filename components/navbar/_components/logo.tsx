import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <>
      <Link href={'/'} className="ml-6 mr-4 max-w-max">
        <Image
          src="/logo-black.png"
          alt="Sendtype logo"
          width={140}
          height={70}
        />
      </Link>
    </>
  )
}

export default Logo
