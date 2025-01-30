'use client'
import { useDisclosure } from "@heroui/react"
import Link from 'next/link'
import clsx from 'clsx'
import {
  ChartPieIcon,
  ShoppingBagIcon,
  ArrowRightOnRectangleIcon,
  UsersIcon,
  Cog8ToothIcon,
  ScissorsIcon,
  CalendarDateRangeIcon
} from '@heroicons/react/24/outline'
import { usePathname, useRouter } from 'next/navigation'

const NavLinks = () => {
  const itemClasses = {
    base: 'py-0 w-full',
    title: 'font-normal text-sm text-end text-white',
    trigger:
      'py-2 data-[hover=true]:bg-default-500 rounded-md  flex items-center',
    indicator: 'text-sm',
    content: 'text-xs'
  }

  const links = [
    { name: 'داشبورد', href: '/dashboard', icon: ChartPieIcon },
    { name: 'کاربران', href: '/dashboard/users', icon: UsersIcon },
    { name: 'خدمات', href: '/dashboard/services', icon: ScissorsIcon },
    { name: 'گزارش ', href: '/dashboard/report', icon: CalendarDateRangeIcon },
    { name: 'تنظیمات', href: '/dashboard/setting', icon: Cog8ToothIcon },
  ]
  const router = useRouter()
  const pathname = usePathname()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const signOut = () => {
    router.replace('/')
  }

  return (
    <div className=' flex flex-col gap-3  p-2 overflow-y-auto h-full'>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={clsx(
            'flex flex-row-reverse gap-2  rounded-md items-center py-2 text-center text-sm',
            pathname === link.href
              ? 'bg-[#2e4050] text-white select-none'
              : 'text-white hover:bg-[#2e4050]'
          )}
        >
          <link.icon className='h-5 w-5 text-[#e0e0e0]' aria-hidden='true' />
          <span className='text-sm'>{link.name}</span>
        </Link>
      ))}

      {/* خروج */}
      <span
        className='flex flex-row-reverse gap-2 rounded-md py-2 text-sm text-white hover:bg-[#2e4050]  cursor-pointer'
        onClick={signOut}
      >
        <ArrowRightOnRectangleIcon
          className='h-5 w-5 text-[#e0e0e0]'
          aria-hidden='true'
        />
        خروج
      </span>
    </div>
  )
}
export default NavLinks
