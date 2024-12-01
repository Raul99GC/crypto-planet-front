import { NavLink } from 'react-router'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

import ilustrationImg from '@/assets/images/invest-img.svg'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

export default function LoginPage () {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='w-full bg-white lg:grid lg:grid-cols-2'>

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

      {/* Right Section - Login Form */}
      <div className='px-6 pb-8 pt-6 lg:flex lg:items-center lg:px-12'>
        <div className='mx-auto w-full max-w-sm space-y-6'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Welcome Back!</h1>
            <p className='text-sm text-gray-500'>
              Login for Access the Latest Experience of CryptoBrains Performance.
            </p>
          </div>

          <form className='space-y-4'>
            <div className='space-y-2'>
              <Input
                type='email'
                placeholder='Username or Email'
                className='h-12 bg-[#F7FAFF] border-none'
              />
            </div>
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

            <div className='flex items-center justify-between text-sm'>
              <button type='button' className='text-blue-600 hover:underline'>
                Open Scanner to Login
              </button>
              <button type='button' className='text-gray-500 hover:text-gray-900'>
                Forgot Password?
              </button>
            </div>

            <Button type='submit' className='h-12 w-full bg-blue-600 text-white hover:bg-blue-700'>
              Login
            </Button>

            <div className='relative my-6'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-white px-2 text-gray-500'>Or continue with</span>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-3'>
              <Button
                variant='outline'
                className='h-12 w-full bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              >
                <FcGoogle className='mr-3 w-5 h-5' />
                Google
              </Button>
              <Button
                variant='outline'
                className='h-12 w-full bg-[#24292E] text-white hover:bg-[#24292E]/90'
              >
                <FaGithub className='mr-3 h-5 w-5' />
                GitHub
              </Button>
            </div>

            {/* Mobile Sign Up Link - Only visible on mobile */}
            <div className='text-center text-sm lg:hidden'>
              <NavLink to='/signup' className='text-blue-600 hover:underline'>
                Sign Up Here.
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
