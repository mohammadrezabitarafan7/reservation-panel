import { Button } from '@heroui/react'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const DayForm = () => {
  const [loading1, setLoading1] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmitDays = async data => {
    setLoading1(true)
    try {
    } catch (error) {}
  }
  return (
    <div>
      <div className='flex flex-col gap-3'>
        <h1 className='text-end text-xs font-bold '>
          حداکثر تعداد روز های مشاهده شده توسط کاربر
        </h1>
        <form
          onSubmit={handleSubmit(onSubmitDays)}
          className='flex flex-row-reverse gap-3 justify-between'
        >
          <input
            type='number'
            className=' border-1 flex-1 text-end outline-none p-2 rounded-md text-xs '
            placeholder='تعداد روز'
            {...register('days', { required: true })}
            aria-invalid={errors.days ? 'true' : 'false'}
          />
          <Button
            size='sm'
            isLoading={loading1}
            className=' bg-myOrange text-white mx-auto'
            type='submit'
            radius='md'
          >
            ثبت
          </Button>
        </form>
      </div>
    </div>
  )
}
export default DayForm
