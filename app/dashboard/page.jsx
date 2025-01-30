'use client'
import Image from 'next/image'
import WaitingTable from '../components/table'
import barber from '../public/pay (2).png'
import GetTime from '../components/get-time'
import { Button } from "@heroui/react"
export default function Home () {
  return (
    <div className='flex flex-col gap-3 mb-8'>
      <div className=' flex flex-row-reverse gap-5  max-md:flex-col-reverse'>
        <div className='basis-[70%] bg-[#24303c] shadow-sm rounded-md flex flex-col gap-5 p-6 '>
          <h1 className='text-myOrange font-bold text-lg text-end'>
            ! به پنل کاربری نوبت دهی خوش آمدید
          </h1>
          <h1 className='text-myOrange text-sm font-semibold text-end max-md:hidden'>
            لیست کاربرانی که درخواست داده اند
          </h1>

          <GetTime />

          <div className='text-end flex flex-row gap-3 justify-end'>
            <h1 className='text-white'> نفر در حال انتظار</h1>
            <h1 className='text-myOrange underline font-bold'>۱۲</h1>
          </div>
        </div>
        <div className='basis-[30%] bg-[#24303c] flex flex-col gap-3  pb-4 shadow-sm rounded-md max-md:hidden'>
          <Image className='m-auto flex justify-center' alt='payment' width={180} src={barber} />
          <Button className='w-1/2 m-auto' radius='sm' color='primary' size='md'>شارژ کیف پول</Button>

        </div>
      </div>
      <WaitingTable />
    </div>
  )
}
