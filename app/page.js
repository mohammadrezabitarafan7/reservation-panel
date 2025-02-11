'use client'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@heroui/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image.js'
import logo from './public/barbershop waiting clients-rafiki (1).png'
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
    document.documentElement.classList.add('overflow-hidden') // جلوگیری از اسکرول کل صفحه
    return () => document.documentElement.classList.remove('overflow-hidden') // پاک کردن هنگام خروج
  }, [])

  const onSubmit = async data => {
    // if (data.phone === '123' && data.password === '123') {
    // Cookies.set('UserCookie', 'UserCookie', { expires: 0.0001736  })
    setLoading(true)
    router.replace('/dashboard')
  }

  return (
    <div className='flex flex-col md:flex-row-reverse bg-[#cecece] h-screen w-screen items-center justify-center max-md:bg-[#24303c]'>
      {/* بخش چپ (تصویر و خوش‌آمدگویی) */}
      <div className='hidden md:flex md:w-1/2 h-full bg-[#24303c] items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-white text-2xl font-bold mb-4'>
            به سامانه رزرو خوش آمدید
          </h1>
          <Image alt='sefidsar' width={350} src={logo} />
        </div>
      </div>

      {/* بخش راست (فرم ورود) */}
      <div className='w-full md:w-1/2 flex justify-center px-6 md:px-12'>
        <div className='w-full max-w-sm bg-white p-8 rounded-xl shadow-md'>
          <h1 className='text-gray-800 text-xl font-bold text-center mb-6 md:hidden'>
            به سامانه رزرو خوش آمدید
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            <div>
              <input
                inputMode='numeric'
                type='text'
                className='w-full text-base border border-gray-300 outline-none p-3 rounded-md focus:border-myOrange transition'
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
                className='w-full text-base border border-gray-300 outline-none p-3 rounded-md focus:border-myOrange transition'
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
              className='w-full bg-myOrange text-white text-lg py-3 rounded-md shadow-lg  transition'
              type='submit'
              radius='sm'
              isLoading={loading}
            >
              ورود
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
