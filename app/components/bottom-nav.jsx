'use client'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  UsersIcon,
  Cog8ToothIcon,
  ScissorsIcon
} from '@heroicons/react/24/solid'

const BottomNav = () => {
  const pathname = usePathname()
  const links = [
    { name: 'تنظیمات', href: '/dashboard/setting', icon: Cog8ToothIcon },
    { name: 'کاربران', href: '/dashboard/users', icon: UsersIcon },
    { name: 'خدمات', href: '/dashboard/services', icon: ScissorsIcon },
    { name: 'خانه', href: '/dashboard', icon: HomeIcon }
  ]

  return (
    <div
      className='flex flex-row justify-evenly bg-[#24303c] backdrop-blur-lg p-[3px]  z-50 rounded-xl shadow-inner fixed bottom-2
    left-4 right-4 md:hidden'
    >
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={clsx(
            'flex flex-col gap-2 rounded-md items-center p-2 text-center text-sm',
            pathname === link.href
              ? 'text-[#FF4F00] select-none'
              : 'text-white '
          )}
        >
          <link.icon
            className={clsx(
              'h-5 w-5',
              pathname === link.href
                ? 'text-[#FF4F00] select-none'
                : 'text-white hover:bg-[#1d2430]'
            )}
            aria-hidden='true'
          />
          <span className='text-xs'>{link.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default BottomNav
