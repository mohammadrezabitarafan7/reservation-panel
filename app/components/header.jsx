'use client'
import Link from 'next/link'
import { useContext, useState, useEffect } from 'react'
import { select, User, Avatar, Skeleton, Divider, Badge } from '@heroui/react'
import clsx from 'clsx'
import axios from 'axios'
import useSWR from 'swr'
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline'
import ExpiredDate from './expired-date'
import { useRouter } from 'next/navigation'

const Header = () => {
  const [selected, setSelected] = useState(false)
  const router = useRouter()

  return (
    <header
      className='h-[53px] bg-[#24303c] shadow-xl  border-b-2
     border-myOrange fixed w-full top-0 flex flex-row-reverse justify-between px-7 lg:hidden'
    >
      <div className='flex flex-row-reverse gap-2 text-right'>
        <span className={`text-[#ffffff] text-xs my-auto`}>مجتبی منسوبی</span>
        {/* <Divider orientation='vertical' className='h-6 bg-white my-auto' /> */}
      </div>
      <div className='flex flex-row-reverse justify-between my-auto gap-3'>
        {/* <Badge className='bg-myOrange text-white' showOutline={false} variant='solid' size='sm' content={6} shape='circle'>
          <BellIcon className={`w-5 h-5 text-[#ffffff] text-xs my-auto `} />
        </Badge> */}
        <ExpiredDate />
        <Divider orientation='vertical' className='h-6 bg-white mya' />
        <ArrowLeftStartOnRectangleIcon
          onClick={() => router.replace('/')}
          className={`w-6 h-6 text-[#ffffff] text-xs my-auto `}
        />
      </div>
    </header>
  )
}
export default Header
