'use client'
import Link from 'next/link'
import { useContext, useState, useEffect } from 'react'
import {
  select,
  User,
  Avatar,
  Skeleton,
  Divider,
  Badge
} from "@heroui/react"
import clsx from 'clsx'
import axios from 'axios'
import useSWR from 'swr'
import {
  Bars3Icon,
  BellIcon,
  UserIcon,
  ArrowsPointingOutIcon
} from '@heroicons/react/24/outline'

const Header = () => {
  const [selected, setSelected] = useState(false)

  return (
    <header className='h-[53px]  bg-white shadow-sm   flex flex-row-reverse justify-between px-7'>
      <div className='flex flex-row justify-around my-auto '>
        <span
          className={`text-[#6c6c6c] text-medium mx-auto font-bold hover:text-[#1a1a1a] max-md:hidden`}
        >
          پنل کاربری
        </span>
      </div>
      <div className='flex flex-row justify-around my-auto gap-3'>
        <UserIcon className={`w-5 h-5 text-[#6c6c6c] text-xs my-auto `} />
        <ArrowsPointingOutIcon
          className={`w-5 h-5 text-[#6c6c6c] text-xs my-auto `}
        />
        <Badge color='danger' size='sm' content={5} shape='circle'>
          <BellIcon className={`w-5 h-5 text-[#6c6c6c] text-xs my-auto `} />
        </Badge>
        <Divider orientation='vertical' className='h-6' />

        <div className='flex flex-row-reverse justify-start gap-2 my-auto'>
          <div className='flex flex-col text-right'>
            <span className={`text-[#6c6c6c] text-xs my-auto`}>ادمین ارشد</span>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
