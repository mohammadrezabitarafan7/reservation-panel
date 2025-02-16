import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Button,
  Pagination
} from '@heroui/react'
import { useState, useCallback } from 'react'

export const columns = [
  { name: 'خدمات', uid: 'service' },
  { name: 'وفاداری', uid: 'count' },
  { name: 'نام', uid: 'name' },
  { name: '#', uid: 'id' }
]

export const data = [
  {
    id: 1,
    name: 'محمدرضا بیطرفان',
    hour: '15',
    date: '۱۰/۱۲',
    phone: '۰۹۱۲۸۹۲۹۷۲۸',
    day: 'دوشنبه',
    service: 'اصلاح سر'
  },
  {
    id: 2,
    name: 'شایان محمودی',
    hour: '19',
    date: '۱۰/12',
    phone: '۰۹۱۲۸۹۲۹۷۲۸',
    day: 'دوشنبه',
    service: 'اصلاح سر'
  },
  {
    id: 3,
    name: 'علی اسلامی',
    hour: '12',
    date: '۱۰/13',
    phone: '۰۹۱۲۸۹۲۹۷۲۸',
    day: 'دوشنبه',
    service: 'فشیال پوست'
  },
  {
    id: 4,
    name: 'حمیدرضا بقایی',
    hour: '16',
    date: '۱۰/14',
    phone: '۰۹۱۲۸۹۲۹۷۲۸',
    day: 'دوشنبه',
    service: 'اصلاح سر'
  }
]

export default function UsersTable () {
  const [page, setPage] = useState(1)
  const itemsPerPage = 4
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPageData = data.slice(startIndex, endIndex)

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey]

    switch (columnKey) {
      case 'id':
        return <span className='text-tiny underline'>{user.id}</span>
      case 'service':
        return (
          <span className='text-tiny text-justify text-myOrange'>
            {user.service}
          </span>
        )

      case 'count':
        return (
          <Chip
            size='sm'
            className='text-white'
            color='primary'
            variant='solid'
          >
            {user.hour}
          </Chip>
        )
      case 'name':
        return (
          <div className='flex flex-col text-end gap-2'>
            <p className='font- text-black text-tiny '>{user.name}</p>
            <p className='text-xs text-black'>{user.phone}</p>
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
