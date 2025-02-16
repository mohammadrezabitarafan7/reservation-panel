import { Button, DateInput, Divider } from '@heroui/react'
import { CalendarDate } from '@internationalized/date'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
const Report = () => {
  const services = [
    { value: '', title: 'اصلاح سر' },
    { value: '', title: 'فشیال پوست' },
    { value: '', title: 'سولار' },
    { value: '', title: 'پکیج داماد' }
  ]

  return (
    <div className='flex flex-col gap-5 bg-white p-4 shadow-md rounded-md'>
      <div className='flex flex-col '>
        {/* first row */}
        <div className='grid grid-cols-2 gap-6  p-6 rounded-md'>
          <div className='flex flex-col'>
            <p className='text-xs font-bold text-right mb-2'>از تاریخ</p>
            <div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
              <DateInput
                radius='sm'
                className='max-w-full text-start '
                variant='underlined'
                endContent={
                  <CalendarDaysIcon className='w-5 h-5 text-default-400 pointer-events-none flex-shrink-0' />
                }
                placeholderValue={new CalendarDate(2, 11, 1995)}
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='text-xs font-bold text-right mb-2'>تا تاریخ</p>
            <DateInput
              radius='sm'
              color='default'
              className='max-w-full text-end '
              variant='underlined'
              endContent={
                <CalendarDaysIcon className='w-5 h-5 text-default-400 pointer-events-none flex-shrink-0' />
              }
              placeholderValue={new CalendarDate(2, 11, 1995)}
            />
          </div>
        </div>

        {/* <Divider className='bg-myOrange/30  mx-auto' /> */}
        {/* second row */}
        <div className='grid grid-cols-2 gap-6  p-6 rounded-md'>
          <div className='flex flex-col'>
            <p className='text-xs font-bold text-right mb-2'>وفاداری</p>
            <input
              type='number'
              itemType='numeric'
              className='block w-full px-4 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none  text-right text-sm'
            />
          </div>
          <div className='flex flex-col'>
            <p className='text-xs font-bold text-right mb-2'>نوع خدمات</p>
            <select className='block w-full px-4 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none text-right text-sm'>
              {services.map((i, key) => (
                <option className='text-xs' value={i.value} key={i.value}>
                  {i.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <Button
        type='submit'
        className='px-8 w-full lg:w-1/4  mx-auto bg-myOrange text-white'
        radius='sm'
        size='sm'
      >
        تایید
      </Button>
    </div>
  )
}
export default Report
