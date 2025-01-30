'use client'
import clsx from 'clsx'
import NavLinks from './navlinks'
import { Divider } from "@heroui/react"

const SideBar = () => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-between shadow-xl w-[220px] max-md:hidden  overflow-y-auto scrollbar-hide bg-[#24303c]',
        'max-h-screen overflow-y-auto'
      )}
    >
      <div className='h-14 p-3 flex  sticky top-0 bg-inherit z-10'>
        <div className='flex flex-row-reverse justify-around m-auto gap-3'>
          <h1 className='text-white font-bold text-sm'>: مدت اعتبار</h1>
          <div className='flex flex-row gap-2 justify-start text-white font-bold text-sm'>
            <span>روز</span>
            <span className='underline'>12</span>
          </div>
        </div>
      </div>
      <Divider className='bg-[#FF4F00] h-[2px] rounded-lg w-2/3 mx-auto' />

      <NavLinks />
      {/* Span at the bottom */}
      <div className='flex flex-row justify-center py-3 gap-1 mb-1'>
        <span className='text-sm text-[#828E9E] text-center my-auto'>
          © designed by
        </span>
        <svg
          className='my-auto w-3 h-3 text-red-700'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z' />
        </svg>
      </div>
    </div>
  )
}
export default SideBar
