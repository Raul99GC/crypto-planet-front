'use client'

import { Button } from '@/components/ui/button'
import { NavLink } from 'react-router'
import { SlLogin } from 'react-icons/sl'
import { CgProfile } from 'react-icons/cg'
import { ChevronDown } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa'

import { FiGrid } from 'react-icons/fi'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'

import logoImg from '@/assets/images/logo.svg'

const SiteHeader = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background flex justify-center items-center'>
      <div className='container flex h-16 items-center justify-between'>
        {/* Logo Section */}
        <div className=''>
          <NavLink to='/' className='flex items-center space-x-2'>
            <img src={logoImg} className='h-9 w-auto' alt='CryptoBrains Logo' />
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className='lg:hidden'>
            <Button variant='ghost' size='icon' className='md:hidden'>
              <FiGrid className='h-8 w-8' />
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='w-full sm:w-[300px] flex flex-col'>
            <SheetHeader className='border-b pb-4 mb-4'>
              <SheetTitle className='flex justify-between items-center'>
                <NavLink to='/' className='flex items-center space-x-2'>
                  <img src={logoImg} className='h-9 w-auto' alt='CryptoBrains Logo' />
                </NavLink>
              </SheetTitle>
            </SheetHeader>

            <div className='flex-1 overflow-auto'>
              <div className='space-y-4'>
                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between py-2 text-base font-medium'>
                    Contact Us <ChevronDown className='h-4 w-4' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className='pl-4 space-y-2'>
                    <NavLink to='/career' className='block py-2 text-sm text-muted-foreground'>Career</NavLink>
                    <NavLink to='/support' className='block py-2 text-sm text-muted-foreground'>Support</NavLink>
                    <NavLink to='/offices' className='block py-2 text-sm text-muted-foreground'>Offices</NavLink>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between py-2 text-base font-medium'>
                    Knowledge <ChevronDown className='h-4 w-4' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className='pl-4 space-y-2'>
                    <NavLink to='/learn' className='block py-2 text-sm text-muted-foreground'>Learn</NavLink>
                    <NavLink to='/blog' className='block py-2 text-sm text-muted-foreground'>Blog</NavLink>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between py-2 text-base font-medium'>
                    Services <ChevronDown className='h-4 w-4' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className='pl-4 space-y-2'>
                    <NavLink to='/market' className='block py-2 text-sm text-muted-foreground'>Market</NavLink>
                    <NavLink to='/trade' className='block py-2 text-sm text-muted-foreground'>Trade</NavLink>
                    <NavLink to='/earn' className='block py-2 text-sm text-muted-foreground'>Earn</NavLink>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between py-2 text-base font-medium'>
                    Press <ChevronDown className='h-4 w-4' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className='pl-4 space-y-2'>
                    <NavLink to='/news' className='block py-2 text-sm text-muted-foreground'>News</NavLink>
                    <NavLink to='/media' className='block py-2 text-sm text-muted-foreground'>Media Kit</NavLink>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className='flex w-full items-center justify-between py-2 text-base font-medium'>
                    Crypto Brains <ChevronDown className='h-4 w-4' />
                  </CollapsibleTrigger>
                  <CollapsibleContent className='pl-4 space-y-2'>
                    <NavLink to='/about' className='block py-2 text-sm text-muted-foreground'>About</NavLink>
                    <NavLink to='/team' className='block py-2 text-sm text-muted-foreground'>Team</NavLink>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>

            <div className='mt-auto pt-4 border-t'>
              <div className='flex justify-center space-x-4 mb-4'>
                <a href='#' className='text-blue-600 hover:text-blue-500'>
                  <FaFacebookF className='h-6 w-6' />
                </a>
                <a href='#' className='text-blue-600 hover:text-blue-500'>
                  <FaInstagram className='h-6 w-6' />

                </a>
                <a href='#' className='text-blue-600 hover:text-blue-500'>
                  <FaXTwitter className='h-6 w-6' />
                </a>
                <a href='#' className='text-blue-600 hover:text-blue-500'>
                  <FaTelegramPlane className='h-6 w-6' />
                </a>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <Button variant='outline' className='w-full border-blue-600 text-blue-600' asChild>
                  <NavLink to='/login'>Log In</NavLink>
                </Button>
                <Button className='w-full bg-blue-600 text-white' asChild>
                  <NavLink to='/signup'>Sign Up</NavLink>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Menu Section */}
        <NavigationMenu className='hidden md:flex'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-gray-500 text-sm'>Market</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='w-[400px] p-4'>
                  <NavigationMenuLink asChild>
                    <div className='space-y-3'>
                      <h4 className='text-sm font-medium leading-none '>Market Overview</h4>
                      <p className='text-sm text-muted-foreground'>
                        View real-time cryptocurrency prices and market data
                      </p>
                    </div>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-gray-500 text-sm'>Trade</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='w-[400px] p-4'>
                  <NavigationMenuLink asChild>
                    <div className='space-y-3'>
                      <h4 className='text-sm font-medium leading-none'>Trading Platform</h4>
                      <p className='text-sm text-muted-foreground'>
                        Advanced trading tools and features
                      </p>
                    </div>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-gray-500 text-sm'>Earn</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='w-[400px] p-4'>
                  <NavigationMenuLink asChild>
                    <div className='space-y-3'>
                      <h4 className='text-sm font-medium leading-none'>Earn Rewards</h4>
                      <p className='text-sm text-muted-foreground'>
                        Stake your crypto and earn passive income
                      </p>
                    </div>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-gray-500'
                to='/about'
              >
                About
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-gray-500'
                to='/career'
              >
                Career
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Buttons Section */}
        <div className='hidden md:flex items-center space-x-4'>
          <Button variant='outline' className='border-blue-600 text-blue-600 hover:bg-blue-500 hover:border-blue-500 hover:text-white' asChild>
            <NavLink to='/login'>
              <SlLogin />
              Login
            </NavLink>
          </Button>
          <Button asChild className='bg-blue-600 text-white hover:bg-blue-500'>
            <NavLink to='/signup'>
              <CgProfile />
              Sign Up
            </NavLink>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
