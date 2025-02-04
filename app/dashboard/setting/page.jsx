'use client'
import { Button } from '@heroui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import DayForm from '@/app/components/day-form'
import WeeksForm from '@/app/components/weeks-form'

const Setting = () => {
  const days = [
    { key: 'sat', label: 'شنبه' },
    { key: 'sund', label: 'یکشنبه' },
    { key: 'mon', label: 'دوشنبه' },
    { key: 'tus', label: 'سه شنبه' },
    { key: 'wed', label: 'چهار شنبه' },
    { key: 'thur', label: 'پنج شنیه' },
    { key: 'fry', label: 'جمعه' }
  ]
  const [loading2, setLoading2] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmitTimes = async data => {
    setLoading2(true)
    try {
    } catch (error) {}
  }

  return (
    <div className='flex flex-col gap-5 p-4'>
      <div className='bg-[#24303c] shadow-sm rounded-md flex flex-col gap-5 p-6 '>
        <h1 className='text-myOrange font-bold text-medium text-end'>
          تنظیمات
        </h1>
      </div>

      <div className='flex flex-col bg-white p-4 gap-5 shadow-sm rounded-md'>
        {/* day from */}
        <DayForm />

        {/* time from */}
        <div className='flex flex-col gap-3'>
          <h1 className='text-end text-xs font-bold'>ساعات کاری </h1>
          <form
            onSubmit={handleSubmit(onSubmitTimes)}
            className='flex flex-row-reverse gap-3 justify-between'
          >
            <input
              type='number'
              
              min='8'
              max='12'
              inputMode='numeric'
              className=' border-1 flex-1 text-end outline-none p-2 rounded-md  text-base '
              placeholder='از ساعت'
              {...register('fromhoure', { required: true })}
              aria-invalid={errors.fromhoure ? 'true' : 'false'}
            />
            <input
              inputMode='numeric'
              type='number'
              min='8'
              max='22'
              step='1'
              className=' border-1 flex-1 text-end outline-none p-2 rounded-md text-base '
              placeholder='تا ساعت'
              {...register('tillhoure', { required: true })}
            />
            <Button
              size='sm'
              isLoading={loading2}
              className=' bg-myOrange text-white mx-auto'
              type='submit'
              radius='md'
            >
              ثبت
            </Button>
          </form>
        </div>

        {/* روز های کاری */}

        <WeeksForm />
      </div>
    </div>
  )
}

export default Setting
