import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { HiSwitchHorizontal } from 'react-icons/hi'

import { PiUsersThree } from 'react-icons/pi'
import { BsCoin } from 'react-icons/bs'
import { FiShoppingBag } from 'react-icons/fi'
import { FaRegBuilding } from 'react-icons/fa'

import manImage from '@/assets/images/man-with-phone.png'
import dotsImg from '@/assets/images/responsive_dot_pattern.svg'
import crossImage from '@/assets/images/responsive_cross.svg'
import womenImage from '@/assets/images/women-with-phone.jpg'
import cartImage from '@/assets/images/dashboar-imagen.png'

const HomePage = () => {
  const metrics = [
    {
      value: '15M+',
      label: 'Trusted Users',
      icon: PiUsersThree
    },
    {
      value: '₹08B+',
      label: 'Total Investment',
      icon: BsCoin
    },
    {
      value: '₹90M+',
      label: 'Coins Purchased',
      icon: FiShoppingBag
    },
    {
      value: '05+',
      label: 'Established Years',
      icon: FaRegBuilding
    }
  ]

  return (
    <div className='w-full flex flex-col items-center'>
      <section className='w-full flex flex-col bg-background items-center bg-gradient-to-r from-[#F7FAFE] to-[#FEF9F9] relative'>
        <div className='absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none' />
        <div className='absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none' />
        <div className='container relative overflow-hidden '>

          <div className='container px-4 mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center pt-12'>
              <div className='space-y-8'>
                <div className='space-y-4'>
                  <h1 className='text-4xl text-center md:text-5xl lg:text-6xl xl:text-left font-bold tracking-tight text-balance mb-8'>
                    Create Your{' '}
                    <span className='text-blue-500'>Portfolio </span>
                    With CryptoBrains
                  </h1>
                  <p className='text-lg text-muted-foreground text-center xl:text-left xl:max-w-[600px]'>
                    Sign up today and buy 65+ cryptocurrencies in minutes. Get started with as little as $10.
                  </p>
                </div>

                <div className='flex flex-col sm:flex-row gap-2 items-center max-w-2xl'>

                  <div className='relative flex-1 w-full'>
                    <Input
                      type='number'
                      placeholder='Enter Here'
                      className='pr-20 py-10 appearance-none'
                    />
                    <div className='absolute top-1/2 right-[20px] w-20 transform -translate-y-1/2'>
                      <Select defaultValue='BTC'>
                        <SelectTrigger className='h-3/5'>
                          <SelectValue placeholder='BTC' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='BTC'>BTC</SelectItem>
                          <SelectItem value='ETH'>ETH</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    variant='ghost'
                    className='sm:flex w-12 h-12'
                  >
                    <HiSwitchHorizontal
                      className='text-blue-500'
                      style={{ width: '40px', height: '40px' }}
                    />
                  </Button>

                  <div className='relative flex-1 w-full'>
                    <Input
                      type='number'
                      placeholder='Enter Here'
                      className='pr-20 py-10 appearance-none'
                    />
                    <div className='absolute top-1/2 right-[20px] w-20 transform -translate-y-1/2'>
                      <Select defaultValue='INR'>
                        <SelectTrigger className='h-full'>
                          <SelectValue placeholder='INR' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='INR'>INR</SelectItem>
                          <SelectItem value='USD'>USD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

              </div>

              <div className='relative h-[300px] md:h-[400px] lg:h-[500px] flex justify-center'>
                <div className='relative h-full'>
                  {/* Grid debajo de la imagen */}
                  <div
                    className='absolute w-[37%] aspect-square z-0 top-[12%] right-[-7%]'
                  >
                    <img src={dotsImg} alt='' className='w-full h-full' />
                  </div>
                  <div className='absolute w-[55%] z-0 top-[20%] left-[10%]'>
                    <img src={crossImage} className='w-full h-full' alt='' />
                  </div>

                  {/* Imagen */}
                  <img
                    src={manImage}
                    alt='Crypto trading illustration'
                    className='object-contain h-full relative z-10'
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      <section className='container py-16 px-4 md:py-24 bg-[#f0f7ff] md:bg-background'>
        <div className='w-full'>
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-primary mb-4'>
              Over Success From Starting.
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
            {metrics.map((metric, index) => (
              <Card key={index} className='border-none shadow-sm md:shadow-none'>
                <CardContent className='p-6 text-center flex flex-col items-center'>
                  <div className='w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center'>
                    <metric.icon className='w-6 h-6 text-primary' />
                  </div>
                  <div className='text-2xl md:text-3xl font-bold text-primary mb-2'>
                    {metric.value}
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    {metric.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='container mx-auto px-4 py-12 md:py-24'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          <div className='w-full md:w-1/2 relative flex '>
            <div className='w-3/4 relative'>
              <img
                src={womenImage}
                alt='Woman using trading platform'
                width={600}
                height={600}
                className='rounded-lg'
              />
              <div className='absolute -top-10 -right-[80px] p-2 rounded-lg w-[50%] '>
                <img
                  src={cartImage}
                  alt='Trading chart'
                  className='w-full'
                />
              </div>
            </div>

          </div>
          <div className='w-full md:w-1/2 space-y-6 text-center md:text-left'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e2a47]'>
              Crypto Brains Is Best Trading Platform In Market
            </h1>
            <p className='text-gray-600 '>
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
            </p>
            <Button className='bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold py-2 px-6 rounded-full'>
              Start Trading
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomePage
