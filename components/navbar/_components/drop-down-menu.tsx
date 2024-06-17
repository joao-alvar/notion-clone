import {Button} from '@/components/ui/button'
import Link from 'next/link'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import {
  BarChart,
  Building2,
  Code,
  Code2Icon,
  DollarSign,
  Download,
  GraduationCap,
  Headphones,
  Home,
  Newspaper,
  PaintBucket,
  Settings,
  Smile,
  Sparkles,
  ScreenShare,
  Users,
  UserPlus,
  ArrowRight,
} from 'lucide-react'

import {useConvexAuth} from 'convex/react'
import {SignInButton, UserButton} from '@clerk/clerk-react'
import {useState, useEffect} from 'react'

import {useScrollTop} from '@/hooks/use-scroll-top'
import {Spinner} from '@/components/spinner'

interface DropDownMenuProps {
  onClose: () => void
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({onClose}) => {
  const handleLinkClick = () => {
    onClose()
  }

  const {isAuthenticated, isLoading} = useConvexAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a loading spinner or skeleton screen
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 h-screen w-full items-center justify-center bg-white px-4 xl:hidden">
      <Accordion
        defaultValue="item-1"
        className="
            pl-2
            "
        type="single"
        collapsible
      >
        <AccordionItem className="mt-6 border-b" value="item-1">
          <AccordionTrigger className="">Use Cases</AccordionTrigger>
          <AccordionContent defaultValue="item-1" className="space-y-2">
            <Link
              href={'/team-alignment'}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <UserPlus className="mr-4 h-6 w-6 text-orange-400" />
              </div>
              <div>Team alignment</div>
            </Link>
            <Link href={'/sales'} className="flex" onClick={handleLinkClick}>
              <div>
                <DollarSign className="mr-4 h-6 w-6 text-green-400" />
              </div>

              <div>Sales</div>
            </Link>
            <Link
              href={'/engineering'}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <Code className="mr-4 h-6 w-6 text-indigo-400" />
              </div>

              <div>Engineering</div>
            </Link>
            <Link href={'/design'} className="flex" onClick={handleLinkClick}>
              <div>
                <PaintBucket className="mr-4 h-6 w-6 text-blue-400" />
              </div>

              <div>Design</div>
            </Link>
            <Link
              href={'/marketing'}
              className="flex "
              onClick={handleLinkClick}
            >
              <div>
                <BarChart className="mr-4 h-6 w-6 text-rose-400" />
              </div>

              <div>Marketing</div>
            </Link>
            <Link
              href={'/product-management'}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <Settings className="text-grey-400 mr-4 h-6 w-6" />
              </div>

              <div>Product Management</div>
            </Link>
            <Link href={'/support'} className="flex " onClick={handleLinkClick}>
              <div>
                <Headphones className="mr-4 h-6 w-6 text-amber-400" />
              </div>

              <div>Support</div>
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className=" border-b" value="item-2">
          <AccordionTrigger>For Business</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link
              href={'/team-alignment'}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <UserPlus className="mr-4 h-6 w-6 text-orange-400" />
              </div>
              <div>Team alignment</div>
            </Link>
            <Link href={'/sales'} className="flex" onClick={handleLinkClick}>
              <div>
                <DollarSign className="mr-4 h-6 w-6 text-green-400" />
              </div>

              <div>Sales</div>
            </Link>
            <Link
              href={'/engineering'}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <Code className="mr-4 h-6 w-6 text-indigo-400" />
              </div>

              <div>Engineering</div>
            </Link>
            <Link href={'/design'} className="flex" onClick={handleLinkClick}>
              <div>
                <PaintBucket className="mr-4 h-6 w-6 text-blue-400" />
              </div>

              <div>Design</div>
            </Link>
            <Link
              href={'/marketing'}
              className="flex "
              onClick={handleLinkClick}
            >
              <div>
                <BarChart className="mr-4 h-6 w-6 text-rose-400" />
              </div>

              <div>Marketing</div>
            </Link>
            <Link
              href={'/product-management'}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <Settings className="text-grey-400 mr-4 h-6 w-6" />
              </div>

              <div>Product Management</div>
            </Link>
            <Link href={'/support'} className="flex " onClick={handleLinkClick}>
              <div>
                <Headphones className="mr-4 h-6 w-6 text-amber-400" />
              </div>

              <div>Support</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className=" border-b" value="item-3">
          <AccordionTrigger>Resources</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link
              href={'/team-alignment'}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <UserPlus className="mr-4 h-6 w-6 text-orange-400" />
              </div>
              <div>Team alignment</div>
            </Link>
            <Link href={'/sales'} className="flex" onClick={handleLinkClick}>
              <div>
                <DollarSign className="mr-4 h-6 w-6 text-green-400" />
              </div>

              <div>Sales</div>
            </Link>
            <Link
              href={'/engineering'}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <Code className="mr-4 h-6 w-6 text-indigo-400" />
              </div>

              <div>Engineering</div>
            </Link>
            <Link href={'/design'} className="flex" onClick={handleLinkClick}>
              <div>
                <PaintBucket className="mr-4 h-6 w-6 text-blue-400" />
              </div>

              <div>Design</div>
            </Link>
            <Link
              href={'/marketing'}
              className="flex "
              onClick={handleLinkClick}
            >
              <div>
                <BarChart className="mr-4 h-6 w-6 text-rose-400" />
              </div>

              <div>Marketing</div>
            </Link>
            <Link
              href={'/product-management'}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <Settings className="text-grey-400 mr-4 h-6 w-6" />
              </div>

              <div>Product Management</div>
            </Link>
            <Link href={'/support'} className="flex " onClick={handleLinkClick}>
              <div>
                <Headphones className="mr-4 h-6 w-6 text-amber-400" />
              </div>

              <div>Support</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className=" border-b" value="item-4">
          <AccordionTrigger>Company</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link
              href={'/team-alignment'}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <UserPlus className="mr-4 h-6 w-6 text-orange-400" />
              </div>
              <div>Team alignment</div>
            </Link>
            <Link href={'/sales'} className="flex" onClick={handleLinkClick}>
              <div>
                <DollarSign className="mr-4 h-6 w-6 text-green-400" />
              </div>

              <div>Sales</div>
            </Link>
            <Link
              href={'/engineering'}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <Code className="mr-4 h-6 w-6 text-indigo-400" />
              </div>

              <div>Engineering</div>
            </Link>
            <Link href={'/design'} className="flex" onClick={handleLinkClick}>
              <div>
                <PaintBucket className="mr-4 h-6 w-6 text-blue-400" />
              </div>

              <div>Design</div>
            </Link>
            <Link
              href={'/marketing'}
              className="flex "
              onClick={handleLinkClick}
            >
              <div>
                <BarChart className="mr-4 h-6 w-6 text-rose-400" />
              </div>

              <div>Marketing</div>
            </Link>
            <Link
              href={'/product-management'}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <Settings className="text-grey-400 mr-4 h-6 w-6" />
              </div>

              <div>Product Management</div>
            </Link>
            <Link href={'/support'} className="flex " onClick={handleLinkClick}>
              <div>
                <Headphones className="mr-4 h-6 w-6 text-amber-400" />
              </div>

              <div>Support</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        <Link
          href={'/pricing'}
          className="
            flex
            flex-1
            items-center 
            justify-between
     
          
            border-b
            
            py-4
            "
        >
          Pricing
        </Link>

        <Link
          href={'/contact'}
          className="
            flex
            flex-1
            items-center 
            justify-between
            border-b py-4"
        >
          Request a demo
        </Link>
      </Accordion>

      <div className="pt-12">
        <div className="  flex flex-col space-y-4 px-4">
          {isLoading && <Spinner />}
          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button variant={'outline'} className="w-full">
                  <div onClick={handleLinkClick}>Log in</div>
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button className="w-full">
                  <div onClick={handleLinkClick}>Get Sendtype Free</div>
                </Button>
              </SignInButton>
            </>
          )}
          {isAuthenticated && !isLoading && (
            <>
              <Button variant="ghost" size="sm" asChild className="w-full">
                <Link href="/documents">
                  <div onClick={handleLinkClick}>Enter Sendtype</div>
                </Link>
              </Button>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default DropdownMenu
