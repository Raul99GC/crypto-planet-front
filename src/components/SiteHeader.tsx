import { Button } from '@/components/ui/button'

import { NavLink } from 'react-router'
import { SlLogin } from 'react-icons/sl'
import { CgProfile } from 'react-icons/cg'
import logoImg from '@/assets/images/logo.svg'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'

const SiteHeader = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background flex justify-center items-center'>
      <div className='container flex h-16 items-center justify-between'>

        {/* Logo Secction */}
        <div className=''>
          <NavLink to='/' className='flex items-center space-x-2'>
            {/* <p className='text-xl font-bold text-[#1B70F1]'>Crypto<span className='text-[#193E79]'>Brains</span></p> */}
            <img src={logoImg} className='h-9 w-auto' alt='' />
          </NavLink>
        </div>

        {/* Menu Secction */}
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
              {/* Eliminar el NavLink envolvente aquí */}
              <NavLink
                className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-gray-500 '
                to='/about'
              >
                About
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink
                className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-gray-500 '
                to='/career'
              >
                Career
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Buttons Secction */}
        <div className='flex items-center space-x-4'>
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
