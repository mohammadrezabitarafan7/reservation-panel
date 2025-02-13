'use client'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@heroui/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image.js'
import logo from './public/barbershop waiting clients-rafiki (1).png'
import logo1 from './public/logo1.png'
import Cookies from 'js-cookie'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    document.documentElement.classList.add('overflow-hidden')
    return () => document.documentElement.classList.remove('overflow-hidden')
  }, [])

  const onSubmit = async data => {
    // if (data.phone === '123' && data.password === '123') {
    // Cookies.set('UserCookie', 'UserCookie', { expires: 0.0001736  })
    setLoading(true)
    router.replace('/dashboard')
  }

  return (
    <div className='flex flex-col md:flex-row-reverse bg-[#e9e9e9] h-screen w-screen items-center justify-center max-md:bg-[#24303c]'>
      {/* بخش  (تصویر و خوش‌آمدگویی) */}
      <div className='hidden md:flex md:w-1/2 h-full bg-[#24303c] items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-white text-2xl font-bold mb-4'>! خوش آمدید</h1>
          <Image alt='sefidsar' width={350} src={logo} />
        </div>
        <div className='flex flex-row absolute bottom-2 justify-center py-3 gap-1 mb-1'>
          <span className='text-sm text-default-400 text-center my-auto'>
            © designed by
          </span>
          <svg
            className='my-auto w-3 h-3 text-default-400'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
          >
            <path d='m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z' />
          </svg>
        </div>
      </div>

      {/* بخش (فرم ورود) */}
      <div className='w-full md:w-1/2 h-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12'>
        <div className='w-full flex flex-col gap-4 items-center justify-center'>
          <Image alt='nobatpro' className='p-3' width={150} src={logo1} />

          <div className='w-full max-w-sm p-1 '>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
              <div>
                <input
                  inputMode='numeric'
                  type='text'
                  className='w-full text-base border border-gray-300 outline-none p-3 rounded-md  transition'
                  placeholder='شماره موبایل'
                  {...register('phone', { required: true })}
                />
                {errors.phone?.type === 'required' && (
                  <p className='text-red-500 text-sm mt-1'>
                    لطفا نام کاربری خود را وارد کنید
                  </p>
                )}
              </div>

              <div>
                <input
                  type='password'
                  className='w-full text-base border border-gray-300 outline-none p-3 rounded-md transition'
                  placeholder='رمز عبور'
                  {...register('password', { required: true })}
                />
                {errors.password?.type === 'required' && (
                  <p className='text-red-500 text-sm mt-1'>
                    لطفا رمز عبور خود را وارد کنید
                  </p>
                )}
              </div>

              <Button
                className='w-full bg-myOrange text-white text-lg py-3 rounded-md shadow-lg transition'
                type='submit'
                radius='sm'
                isLoading={loading}
              >
                ورود
              </Button>
            </form>
          </div>

          <div className='flex flex-row justify-center gap-1   mt-4 lg:hidden'>
            <span className='text-sm text-default-400 text-center my-auto'>
              © designed by
            </span>
            <svg
              className='my-auto w-3 h-3 text-default-400'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
