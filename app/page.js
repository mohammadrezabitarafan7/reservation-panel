'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@heroui/button'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Image from 'next/image.js'
import logo from './public/barbershop waiting clients-rafiki (1).png'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const onSubmit = async data => {
    setLoading(true)
    // شرط تست
    if (data.phone === '123' && data.password === '123') {
      // toast.success('ورود موفقیت آمیز بود!')
      // Cookies.set('token', 'TOKEN', { expires: 2 });
      router.replace('/dashboard')
    }
    // else {
    //   toast.error('نام کاربری یا رمز عبور اشتباه است.')
    // }
    setLoading(false)
  }

  return (
    <div
      className='flex flex-row-reverse bg-[#E5F0FF] h-screen relative w-full
     bg--gradient-primary  items-center justify-center overflow-hidden max-md:flex-col max-md:bg-[#24303c]'
    >
      <h1 className='text-white text-xl text-center pb-6 font-bold md:hidden'>
        به سامانه رزرو خوش آمدید
      </h1>
      <div className=' basis-1/2  flex justify-center p-2 max-md:basis-0 max-md:bg-white max-md:rounded-lg'>
        <div
          className=' w-full mx-auto  p-12 flex flex-col
          '
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-1 flex-col gap-12 justify-evenly'
          >
            <input
              type='text'
              className=' border-1 outline-none p-2 rounded-md text-[12px] '
              placeholder='نام کاربری'
              {...register('phone', { required: true })}
              aria-invalid={errors.price ? 'true' : 'false'}
            />
            {errors.phone?.type === 'required' && (
              <p className='text-myOrange text-[12px] ' role='alert'>
                لطفا نام کاربری خود را وارد کنید
              </p>
            )}
            <input
              type='text'
              className='border-1 outline-none p-2 rounded-md text-[12px]'
              placeholder='رمز عبور'
              {...register('password', { required: true })}
              aria-invalid={errors.price ? 'true' : 'false'}
            />
            {errors.password?.type === 'required' && (
              <p className='text-myOrange text-[12px] ' role='alert'>
                لطفا رمز عبور خود را وارد کنید
              </p>
            )}

            <Button
              className='bg-myOrange text-white w-1/2 mx-auto'
              type='submit'
              radius='sm'
              isLoading={loading}
              spinner={
                <svg
                  className='animate-spin h-5 w-5 text-current'
                  fill='none'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  />
                  <path
                    className='opacity-75'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    fill='currentColor'
                  />
                </svg>
              }
            >
              ورود
            </Button>
          </form>
        </div>
      </div>

      <div className='basis-1/2 bg-[#24303c]  flex justify-center max-md:hidden h-full'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-white text-xl text-center font-bold'>
            به سامانه رزرو خوش آمدید
          </h1>
          <Image className='' alt='sefidsar' width={350} src={logo} />
        </div>
      </div>
    </div>
  )
}
export default LoginPage
