import { NavLink } from 'react-router'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'

import ilustrationImg from '@/assets/images/invest-img.svg'

export default function SignupPage () {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className=' w-full bg-white lg:grid lg:grid-cols-2'>
      {/* Left Section with Illustration */}

      {/* Mobile Illustration - Only visible on mobile */}
      <div
        className='mx-auto flex items-center w-full max-w-sm lg:max-w-4xl'
        style={{
          background: `
            radial-gradient(circle at top left, white, rgba(243, 237, 241, 0) 70%),
            radial-gradient(circle at top right, white, rgba(243, 237, 241, 0) 70%),
            radial-gradient(circle at bottom left, white, rgba(243, 237, 241, 0) 70%),
            radial-gradient(circle at bottom right, white, rgba(243, 237, 241, 0) 70%),
            #F3EDF1
    `
        }}
      >
        <img
          src={ilustrationImg}
          alt='Analytics Illustration'
          width={400}
          height={300}
          className='h-auto w-full'
        />
      </div>

      {/* Right Section - Signup Form */}
      <div className='px-6 pb-8 pt-6 lg:flex lg:items-center lg:px-12'>
        <div className='mx-auto w-full max-w-sm space-y-6'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Create New Account</h1>
            <p className='text-sm text-gray-500'>
              Sign Up and Access the Latest Experience of CryptoBrains Performance.
            </p>
          </div>

          <form className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <Input
                type='text'
                placeholder='First Name'
                className='h-12 bg-[#F7FAFF] border-none'
              />
              <Input
                type='text'
                placeholder='Last Name'
                className='h-12 bg-[#F7FAFF] border-none'
              />
            </div>

            <Input
              type='tel'
              placeholder='Phone No'
              className='h-12 bg-[#F7FAFF] border-none'
            />

            <Input
              type='email'
              placeholder='Email Address'
              className='h-12 bg-[#F7FAFF] border-none'
            />

            <div className='relative'>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                className='h-12 pr-10 bg-[#F7FAFF] border-none'
              />
              <Button
                type='button'
                variant='ghost'
                size='icon'
                className='absolute right-2 top-2 h-8 w-8 text-gray-400'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
              </Button>
            </div>

            <div className='flex items-start space-x-3'>
              <Checkbox id='terms' className='mt-1' />
              <label htmlFor='terms' className='text-sm text-gray-600'>
                I agree to the{' '}
                <NavLink to='/terms' className='text-blue-600 hover:underline'>
                  Terms of Use
                </NavLink>
                {' '}and{' '}
                <NavLink to='/privacy' className='text-blue-600 hover:underline'>
                  Privacy Policy
                </NavLink>
                .
              </label>
            </div>

            <Button type='submit' className='h-12 w-full bg-blue-600 text-white hover:bg-blue-700'>
              Sign Up
            </Button>

            <div className='text-center text-sm'>
              <NavLink to='/login' className='text-blue-600 hover:underline'>
                Login Here.
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
