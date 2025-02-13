import moment from 'moment-jalaali'

// تنظیم زبان به فارسی
moment.locale('fa') // زبان فارسی برای تاریخ‌های میلادی
moment.loadPersian({ usePersianDigits: true }) // فعال‌سازی اعداد و ماه‌های فارسی

const GetTime = () => {
  const today = moment().format('jYYYY/jMM/jDD') // تاریخ امروز شمسی
  const todayWithMonthName = moment().format('jDD jMMMM jYYYY') // تاریخ امروز شمسی با نام ماه فارسی

  return (
    <div className='text-end '>
      <p className='text-lg text-[#ffffff] lg:font-bold'>
         امروز :   {todayWithMonthName}
      </p>
    </div>
  )
}

export default GetTime
