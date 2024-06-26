'use client'

import {ArrowRight} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {useConvexAuth} from 'convex/react'
import {Spinner} from '@/components/spinner'
import Link from 'next/link'
import {SignInButton} from '@clerk/clerk-react'
// import {useState, useEffect} from 'react'

export const Heading = () => {
  const {isAuthenticated, isLoading} = useConvexAuth()

  return (
    <div
      className="flex flex-1 flex-col items-center
    justify-center gap-y-8 px-6 text-center md:justify-start"
    >
      <div className="max-w-5xl space-y-6">
        <h1 className="text-5xl font-semibold sm:text-5xl md:text-6xl">
          Your Ideas, Documents, & Plans. Unified. Welcome to{' '}
          <span className="underline">Sendtype</span>
        </h1>
        <h3 className="text-base font-medium sm:text-xl md:text-2xl">
          Sendtype is the connected workspace where <br />
          better, faster work happens
        </h3>

        <div>
          {isLoading && (
            <div className="flex w-full items-center justify-center">
              <Spinner size="lg" />
            </div>
          )}

          {isAuthenticated && !isLoading && (
            <Button asChild>
              <Link href="/documents" className="text-lg">
                Enter Sendtype
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}

          {!isAuthenticated && !isLoading && (
            <SignInButton mode="modal">
              <Button>
                <div className="text-lg">Get Sendtype Free</div>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </SignInButton>
          )}
        </div>
      </div>
    </div>
  )
}
