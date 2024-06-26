'use client'

import React, {useEffect, useState} from 'react'

import {Button} from '@/components/ui/button'

import {X, AlignJustify} from 'lucide-react'
import Link from 'next/link'
import DropdownMenu from './drop-down-menu'

import {useConvexAuth} from 'convex/react'
import {SignInButton, UserButton} from '@clerk/clerk-react'

import {useScrollTop} from '@/hooks/use-scroll-top'
import {Spinner} from '@/components/spinner'

const ActionButtons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const {isAuthenticated, isLoading} = useConvexAuth()
  const scrolled = useScrollTop()

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible)
  }

  const closeDropdown = () => {
    setDropdownVisible(false)
  }

  useEffect(() => {
    if (isDropdownVisible) {
      document.querySelector('html')?.classList.add('mx:overflow-hidden')
    } else {
      document.querySelector('html')?.classList.remove('mx:overflow-hidden')
    }
  }, [isDropdownVisible])

  return (
    <div className="pr-2">
      <div className="flex items-center justify-center">
        <div className="flex xl:space-x-4">
          <Link href={'/contact-sales'} className="hidden items-center lg:flex">
            <div className="">Request a demo</div>
          </Link>
          <div className="hidden items-center font-thin lg:flex">|</div>
        </div>

        <div className="flex items-center pr-4 lg:space-x-4">
          {isLoading && <Spinner />}
          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button
                  variant={'outline'}
                  className="text-md hidden items-center border-none lg:flex"
                >
                  Log in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button className="hidden lg:block">Get Sendtype Free</Button>
              </SignInButton>
            </>
          )}
          {isAuthenticated && !isLoading && (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/documents">Enter Sendtype</Link>
              </Button>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
        </div>

        {isDropdownVisible && (
          <div onClick={toggleDropdown} className="z-10 rounded-full xl:hidden">
            <X className="h-5 w-5 items-center justify-center rounded-full" />
          </div>
        )}
        {!isDropdownVisible && (
          <div onClick={toggleDropdown} className="flex lg:hidden">
            <AlignJustify className="mr-2 h-6 w-6 items-center justify-center" />
          </div>
        )}

        {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
      </div>
    </div>
  )
}

export default ActionButtons
