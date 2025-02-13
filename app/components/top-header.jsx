import GetTime from '../components/get-time'
import barber from '../public/pay (2).png'
import Image from 'next/image'
import { Button } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const TopHeader = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const Charge = () => {
    setLoading(true)
    router.push('/charge-wallet')
  }

  return (
    <div className=' flex flex-row-reverse gap-5   max-md:flex-col-reverse '>
      <div className='basis-[70%] bg-[#24303c] shadow-sm rounded-md flex flex-col justify-evenly gap-5 p-6 '>
        <h1 className='text-white  text-xl  text-end lg:font-bold'>
          ! به  نوبت پرو خوش آمدید
        </h1>
        {/* <h1 className='text-myOrange text-sm font-semibold text-end max-md:hidden'>
          لیست کاربرانی که درخواست داده اند
        </h1> */}
        <GetTime />

        <div className='flex flex-row-reverse justify-between'>
          <div className='text-end flex my-auto flex-row gap-2 justify-end basis-[80%]'>
            <h1 className='text-myOrange text-sm'> نفر در حال انتظار</h1>
            <h1 className='text-myOrange text-sm '>۱۲</h1>
          </div>

          <div className='basis-[20%] flex flex-col lg:hidden'>
            <Button onClick={Charge} radius='sm' color='primary' size='md'>
              تمدید اعتبار
            </Button>
          </div>
        </div>
      </div>

      <div className='basis-[30%] bg-[#24303c] flex flex-col gap-3  pb-4 shadow-sm rounded-md max-md:hidden'>
        <Image
          className='m-auto flex justify-center'
          alt='payment'
          width={180}
          src={barber}
        />
        <Button
          isLoading={loading}
          onClick={Charge}
          className='w-1/2 m-auto'
          radius='sm'
          color='primary'
          size='md'
        >
          تمدید اعتبار
        </Button>
      </div>
    </div>
  )
}
export default TopHeader
