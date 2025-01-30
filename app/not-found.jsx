'use client'
import Image from 'next/image'
import not from './public/404.png'
import Link from 'next/link'
import { Button } from "@heroui/react"
import { useRouter } from 'next/navigation'
export default function NotFound () {
  const router = useRouter()
  return (
    <div className='h-screen flex flex-col gap-1 justify-center items-center'>
      <Image src={not} width={350} />
      <h1>!صفحه پیدا نشد</h1>
      <p>.متاسفیم صفحه‌ای که به دنبال آن بودید وجود ندارد</p>
      <Button
        onClick={() => router.replace('/dashboard')}
        className='mt-4'
        size='sm'
        color='primary'
        radius='full'
        variant='solid'
      >
        صفحه اصلی
      </Button>
    </div>
  )
}
