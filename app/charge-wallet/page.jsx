'use client'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button
} from '@heroui/react'
import { useRouter } from 'next/navigation'
import { XMarkIcon } from '@heroicons/react/24/outline'

const ChargeWallet = () => {
  const plans = [
    { id: '1', title: 'پنل طلایی', price: '12,000,000', des: 'اشتراک سالیانه' },
    {
      id: '2',
      title: 'پنل نقره ای',
      price: '6,500,000',
      des: 'اشتراک شش ماهه'
    },
    { id: '3', title: 'پنل برنزی', price: '1,200,000', des: 'اشتراک ماهیانه' }
  ]

  const payment = i => {
    alert(plans[i].id)
  }
  const router = useRouter()
  return (
    <div className='flex w-full h-screen  justify-center gap-5 flex-col '>
      <div
        className='h-[53px] bg-[#24303c] shadow-xl border-b-2 flex fixed justify-center items-center border-myOrange z-30 top-0 w-full
        px-7'
      >
        <span className='text-white text-sm text-center my-auto'>
          انتخاب اشتراک
        </span>

        <XMarkIcon
          className='w-5 h-5 text-white absolute right-2 my-auto cursor-pointer'
          onClick={() => router.replace('/dashboard')}
        />
      </div>

      <div className='flex flex-wrap justify-center mt-5 p-6 gap-4'>
        {plans.map((i, index) => (
          <Card
            key={index}
            className={`max-w-[400px] shadow-2xl ${
              index === 0 ? 'bg-myOrange' : 'bg-white'
            }`}
          >
            <CardHeader className='flex gap-3 justify-center'>
              <div className='flex flex-col justify-center'>
                <p
                  size='lg'
                  radius='md'
                  className={`text-myOrange ${index === 0 ? 'text-white' : ''}`}
                >
                  {i.title}
                </p>
              </div>
            </CardHeader>
            <Divider
              className={`text-center text-base ${
                index === 0 ? ' bg-default-900/10 ' : ' bg-default-200'
              }`}
            />
            <CardBody className='flex flex-col gap-3 justify-evenly px-4'>
              <div className='flex flex-row-reverse justify-center gap-3'>
                <p
                  className={`text-center text-2xl font-bold ${
                    index === 0 ? ' text-white' : ' text-default-600'
                  }`}
                >
                  {i.price}
                </p>
                <p
                  className={`text-center text-2xl ${
                    index === 0 ? ' text-white font-bold' : ' text-default-600'
                  }`}
                >
                  تومان
                </p>
              </div>
              <p
                className={`text-center text-sm mx-28 ${
                  index === 0 ? ' text-white ' : ' text-default-600'
                }`}
              >
                {i.des}
              </p>
            </CardBody>
            <Divider
              className={`text-center text-base ${
                index === 0 ? 'bg-default-900/10' : ' bg-default-200'
              }`}
            />
            <CardFooter>
              <Button
                onClick={() => payment(index)}
                size='md'
                className={`p-4 m-auto w-1/2 ${
                  index === 0
                    ? 'bg-white  text-myOrange'
                    : 'bg-myOrange text-white'
                }`}
              >
                خرید
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
export default ChargeWallet
