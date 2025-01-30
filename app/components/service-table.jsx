'use client'
import React, { useState } from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  Button
} from '@heroui/react'
import useSWR from 'swr'
import axios from 'axios'
import { TrashIcon } from '@heroicons/react/24/outline'

export const columns = [
  { name: 'عملیات', uid: 'actions' },
  { name: '(ساعت) مدت زمان انجام', uid: 'time' },
  { name: 'وضعیت', uid: 'status' },
  { name: 'عنوان', uid: 'title' },
  { name: '#', uid: 'id' }
]

const statusColorMap = {
  active: 'bg-myOrange text-white',
  paused: 'bg-default-400 text-black',
  vacation: 'bg-yellow-200 text-yellow-800'
}

export default function ServiceTable () {
  const fetcher = url => axios.get(url).then(res => res.data)
  const [categoryToDelete, setCategoryToDelete] = useState(null)

  const data = [{ id: '12', title: 'اصلاح سر', time: '2' }]

  // const {
  //   data: fetchedData,
  //   error,
  //   isLoading
  // } = useSWR('/api/services/get-services', fetcher)

  // به روز رسانی داده‌ها پس از بارگذاری اولیه
  // React.useEffect(() => {
  //   if (fetchedData) {
  //     setData(fetchedData)
  //   }
  // }, [fetchedData])

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey]

    // const deleteCategory = async id => {
    //   try {
    //     if (id) {
    //       // ارسال درخواست حذف به سرور
    //       const response = await axios.post(`/api/services/delete-service`, {
    //         data: id
    //       })
    //       if (response.status === 200) {
    //         // حذف محصول از داده‌ها و جدول
    //         setData(prevData => prevData.filter(user => user.id !== id))
    //         alert('Category is deleted') // اطلاع‌رسانی موفقیت‌آمیز
    //       }
    //     }
    //   } catch (error) {
    //     console.error('Error deleting category:', error)
    //     alert('Error deleting category') // اطلاع‌رسانی خطا
    //   }
    // }

    switch (columnKey) {
      case 'id':
        return <span className='text-medium'>{user.id}</span>

      case 'status':
        return (
          <Chip
            className={`${statusColorMap[user.status]}`}
            size='sm'
            variant='flat'
          >
            {user.status === 'active' ? 'فعال' : 'غیر فعال'}
          </Chip>
        )

      case 'time':
        return <span className='text-black'>{user.time}</span>
      case 'actions':
        return (
          <div className='flex items-center justify-end'>
            <Tooltip content='حذف'>
              <Button
                variant='light'
                isIconOnly
                aria-label='Delete'
                className='text-default-400'
                onClick={() => deleteCategory(user.id)} // حذف آیتم
              >
                <TrashIcon className='w-5 h-5' />
              </Button>
            </Tooltip>
          </div>
        )
      case 'title':
        return <p className='text-sm text-black'>{user.title}</p>

      default:
        return cellValue
    }
  }, [])

  // بررسی وضعیت داده‌ها
  // if (isLoading) return <div>در حال بارگذاری...</div>
  // if (error) return <div>خطا در بارگذاری داده‌ها</div>
  if (!data) return <div>داده‌ای وجود ندارد</div>

  return (
    <Table radius='sm' aria-label='جدول نمونه با سلول‌های سفارشی'>
      <TableHeader columns={columns}>
        {column => (
          <TableColumn key={column.uid} align='end'>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {data.map(item => (
          <TableRow key={item.id}>
            {columnKey => (
              <TableCell className='text-end'>
                {renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
