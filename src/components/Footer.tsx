import { NavLink } from 'react-router'

export default function Footer () {
  return (
    <footer className='w-full bg-white py-8 text-sm'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-5'>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-blue-700'>Contact Us</h3>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Career</NavLink>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Community</NavLink>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Customer Chat</NavLink>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Technical Support</NavLink>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-blue-700'>Knowledge</h3>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Articles</NavLink>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Video Tutorials</NavLink>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Beginner's Guide</NavLink>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-blue-700'>Services</h3>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>API Service</NavLink>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Token Listing</NavLink>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Ticket Services</NavLink>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-blue-700'>Press</h3>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>News</NavLink>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Events</NavLink>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Blogs</NavLink>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-blue-700'>Crypto Brains</h3>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>FAQ</NavLink>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Team</NavLink>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>About Us</NavLink>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Road Map</NavLink>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-blue-700'>Legal</h3>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Terms of Use</NavLink>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Privacy Policy</NavLink>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Risk Disclosure</NavLink>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-blue-700'>Exchange</h3>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>P2P</NavLink>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Spot Market</NavLink>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>Spot Trading</NavLink>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-blue-700'>Developer</h3>
            <NavLink to='#' className='text-gray-500 hover:text-gray-700'>API Document</NavLink>
          </div>

          <div className='col-span-2 flex flex-col gap-3 md:col-span-3 lg:col-span-5'>
            <h3 className='font-semibold text-blue-700'>Company</h3>
            <p className='text-gray-500'>+91 12345-67890</p>
            <p className='text-gray-500'>dummyemail@gmail.com</p>
            <p className='text-gray-500'>35 No, Back Wand Street, Saint George, 84330 United States</p>
          </div>
        </div>

        <div className='mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-gray-500 md:flex-row'>
          <p>©Copyright 2022 All Rights Are Reserved.</p>
          <div className='flex gap-6'>
            <NavLink to='#' className='hover:text-gray-700'>Facebook</NavLink>
            <NavLink to='#' className='hover:text-gray-700'>Twitter</NavLink>
            <NavLink to='#' className='hover:text-gray-700'>Telegram</NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
