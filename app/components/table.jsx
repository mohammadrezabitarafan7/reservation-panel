import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  Button,
  Pagination
} from '@heroui/react'
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { useState, useCallback } from 'react'

export const columns = [
  { name: 'عملیات', uid: 'actions' },
  { name: 'ساعت', uid: 'hour' },
  { name: 'روز', uid: 'date' },
  { name: 'نام', uid: 'name' },
  { name: '#', uid: 'id' }
]

export const data = [
  {
    id: 1,
    name: 'محمدرضا بیطرفان',
    hour: '۱۲',
    date: '۱۰/۱۲',
    phone: '۰۹۱۲۸۹۲۹۷۲۸',
    day: 'دوشنبه'
  },
  {
    id: 2,
    name: 'محمدرضا بیطرفان',
    hour: '۱۲',
    date: '۱۰/۱۲',
    phone: '۰۹۱۲۸۹۲۹۷۲۸',
    day: 'دوشنبه'
  },
  {
    id: 3,
    name: 'محمدرضا بیطرفان',
    hour: '۱۲',
    date: '۱۰/۱۲',
    phone: '۰۹۱۲۸۹۲۹۷۲۸',
    day: 'دوشنبه'
  },
  {
    id: 1,
    name: 'محمدرضا بیطرفان',
    hour: '۱۲',
    date: '۱۰/۱۲',
    phone: '۰۹۱۲۸۹۲۹۷۲۸',
    day: 'دوشنبه'
  },
  {
    id: 1,
    name: 'محمدرضا بیطرفان',
    hour: '۱۲',
    date: '۱۰/۱۲',
    phone: '۰۹۱۲۸۹۲۹۷۲۸',
    day: 'دوشنبه'
  },
  {
    id: 1,
    name: 'محمدرضا بیطرفان',
    hour: '۱۲',
    date: '۱۰/۱۲',
    phone: '۰۹۱۲۸۹۲۹۷۲۸',
    day: 'دوشنبه'
  },
]

export default function WaitingTable () {
  const [page, setPage] = useState(1)
  const itemsPerPage = 3
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPageData = data.slice(startIndex, endIndex)

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey]

    switch (columnKey) {
      case 'id':
        return <span className='text-tiny underline'>{user.id}</span>

      case 'hour':
        return (
          <Chip
            size='sm'
            className='text-myOrange'
            color='default'
            variant='light'
            // classNames={{
            //   base: "border-small border-myOrange",
            //   content: "drop-shadow shadow-black text-myOrange",
            // }}
          >
            
            {user.hour}
          </Chip>
          // (<span className='text-myOrange text-center underline font-semibold text-tiny'>
          //   {user.hour}
          // </span>)
        )
      case 'date':
        return (
          // <span className='text-black font-semibold text-medium'>
          //   {user.date}
          // </span> */}
          <Chip
            size='sm'
            classNames={{
              base: '',
              content: ''
            }}
            className='text-myOrange font-bold'
            color='flat'
            variant='solid'
          >
            {user.date}-{user.day}
          </Chip>
        )
      case 'actions':
        return (
          <div className='flex items-center justify-end '>
            <Tooltip content='انصراف'>
              <Button
                variant='light'
                isIconOnly
                aria-label='Like'
                className='text-default-400'
              >
                <XCircleIcon className='w-6 h-6' />
              </Button>
            </Tooltip>
            <Tooltip content='تایید'>
              <Button
                variant='light'
                isIconOnly
                aria-label='Like'
                color='success'
              >
                <CheckCircleIcon className='w-6 h-6' />
              </Button>
            </Tooltip>
          </div>
        )
      case 'name':
        return (
          <div className='flex flex-col text-end gap-2'>
            <p className='font- text-black text-tiny '>{cellValue}</p>
            {/* <p className='text-sm text-black'>{user.phone}</p> */}
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  return (
    <Table
      className='rtl'
      radius='sm'
      aria-label='Example table with pagination'
      layout='auto'
      bottomContent={
        <div className='flex w-full justify-center my-4'>
          <Pagination
            isCompact
            showControls
            showShadow
            color='primary'
            page={page}
            total={Math.ceil(data.length / itemsPerPage)} // کل صفحات
            onChange={page => setPage(page)} // تغییر صفحه
          />
        </div>
      }
    >
      <TableHeader columns={columns}>
        {column => (
          <TableColumn key={column.uid} align='end'>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={currentPageData}>
        {item => (
          <TableRow align='end' key={item.id}>
            {columnKey => (
              <TableCell className='text-end'>
                {renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
