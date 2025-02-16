'use client'
import Report from '@/app/components/report'
import UsersTable from '@/app/components/users-table'

const Users = () => {
  return (
    <div className='flex flex-col gap-4 p-4 max-md:mb-52'>
      <div className='flex flex-col gap-5 justify-end bg-[#24303c] shadow-md rounded-md p-8'>
        <h1 className='text-end text-myOrange font-semibold text-md'>
          کاربران
        </h1>
        <h1 className='text-white text-sm text-end'>
          مشاهده کاربران و گزارش گیری
        </h1>
      </div>
      {/* <div className='flex flex-col gap-5'>
        <div className='flex flex-row-reverse justify-between gap-5'>
          <input
            placeholder='شماره موبایل کاربر را وارد نمایید'
            type='text'
            inputMode='numeric'
            className='border-1 w-full text-end outline-none p-2 rounded-md text-xs'
          />
          <Button
            type='submit'
            className='px-8  mx-auto bg-myOrange text-white'
            radius='sm'
            size='sm'
          >
            جستجو
          </Button>
        </div>
      </div> */}
      <Report />
      <UsersTable />
    </div>
  )
}
export default Users
