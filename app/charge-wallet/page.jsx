'use client'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Tab,
  Tabs,
  Button,
  Chip
} from '@heroui/react'
import { useRouter } from 'next/navigation'

const ChargeWallet = () => {
  const plans = [
    { id: '1', title: 'پنل طلایی', price: '8,000,000', discount: '' },
    { id: '2', title: 'پنل نقره ای', price: '6,000,000', discount: '' },
    { id: '3', title: 'پنل برنزی', price: '3,000,000', discount: '' }
  ]

  const payment = i => {
    alert(plans[i].id)
  }
  const router = useRouter()
  return (
    <div className='flex w-full h-screen justify-evenly gap-5 flex-col p-5 '>
      <div className='flex flex-wrap justify-center gap-4'>
        {plans.map((i, index) => (
          <Card
            key={index}
            className={`max-w-[400px] shadow-2xl ${
              index === 1 ? 'bg-[#2e4050]' : 'bg-white'
            }`}
          >
            <CardHeader className='flex gap-3 justify-center'>
              <div className='flex flex-col justify-center'>
                <p
                  size='lg'
                  radius='md'
                  className={`text-myOrange ${
                    index === 1 ? 'font-bold text-white' : ''
                  }`}
                >
                  {i.title}
                </p>
              </div>
            </CardHeader>
            <Divider
              className={`text-center text-base ${
                index === 1 ? ' bg-default-500 ' : ' bg-default-200'
              }`}
            />
            <CardBody className='flex flex-col gap-3 justify-evenly px-4'>
              <div className='flex flex-row-reverse justify-center gap-3'>
                <p
                  className={`text-center text-2xl font-bold ${
                    index === 1 ? ' text-white' : ' text-default-600'
                  }`}
                >
                  {i.price}
                </p>
                <p
                  className={`text-center text-2xl ${
                    index === 1 ? ' text-white font-bold' : ' text-default-600'
                  }`}
                >
                  تومان
                </p>
              </div>
              <p
                className={`text-center text-sm ${
                  index === 1 ? ' text-white ' : ' text-default-600'
                }`}
              >
                با انتخاب پنل می‌توانید از امکانات سامانه رزرواسوین استفاده
                نمائید.
              </p>
            </CardBody>
            <Divider
              className={`text-center text-base ${
                index === 1 ? 'bg-default-500' : ' bg-default-200'
              }`}
            />
            <CardFooter>
              <Button
                onClick={() => payment(index)}
                size='md'
                className={`p-4 m-auto w-1/2 ${
                  index === 1
                    ? ' bg-myOrange  text-white'
                    : 'bg-transparent border border-myOrange text-myOrange'
                }`}
              >
                خرید
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Button
        className='lg:w-1/2 lg:mx-auto '
        variant='shadow'
        onClick={() => router.replace('/dashboard')}
      >
        انصراف
      </Button>
    </div>
  )
}
export default ChargeWallet
