import { NavLink } from 'react-router'

import { Button } from '@/components/ui/button'

import error404Img from '@/assets/images/404-error.png'

const Error404Page = () => {
  return (

    <div className='w-full h-dvh'>
      <main className='h-full px-4 py-16 md:py-24'>
        <div className='flex flex-col items-center text-center'>
          <div className='space-y-4 mb-8'>
            <h1 className='text-7xl font-bold text-blue-600'>404</h1>
            <h2 className='text-3xl font-semibold tracking-tight'>Page Not Found</h2>
            <p className='text-gray-600 max-w-[600px] mx-auto'>
              Sorry, the page you are looking for does not exist or has been moved to another location.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 mb-12'>
            <NavLink to='/'>
              <Button
                variant='default'
                className='min-w-[140px]'
              >Go to home
              </Button>
            </NavLink>
            <NavLink to='/contact'>
              <Button
                variant='outline'
                className='min-w-[140px]'
              >Contact Support
              </Button>
            </NavLink>
          </div>

          <div className='relative w-full max-w-[600px] h-[300px]'>
            <img
              src={error404Img}
              alt='404 Illustration'
              className='object-contain'
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Error404Page
