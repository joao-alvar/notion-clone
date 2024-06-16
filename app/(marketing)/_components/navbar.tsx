'use client'

import {useState, useEffect} from 'react'
import {useConvexAuth} from 'convex/react'
import {SignInButton, UserButton} from '@clerk/clerk-react'
import Link from 'next/link'

import {useScrollTop} from '@/hooks/use-scroll-top'
import {ModeToggle} from '@/components/mode-toggle'
import {Button} from '@/components/ui/button'
import {Spinner} from '@/components/spinner'
import {cn} from '@/lib/utils'

import {Logo} from './logo'

export const Navbar = () => {
  const {isAuthenticated, isLoading} = useConvexAuth()
  const [mounted, setMounted] = useState(false)
  const scrolled = useScrollTop()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a loading spinner or skeleton screen
  }

  return (
    <div
      className={cn(
        'fixed top-0 z-50 flex w-full items-center bg-background p-6 dark:bg-[#1F1F1F]',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Sendtype free</Button>
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
        <ModeToggle />
      </div>
    </div>
  )
}
