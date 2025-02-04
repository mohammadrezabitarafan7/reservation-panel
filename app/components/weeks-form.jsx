import React, { useState } from 'react'
import { CheckboxGroup, Checkbox, Button } from '@heroui/react'
import axios from 'axios'

const WeeksForm = () => {
  const [selectedValues, setSelectedValues] = useState([])
  const [loading, setLoading] = useState(false)

  const days = [
    {
      day: 'شنبه',
      value: 'شنبه'
    },
    {
      day: 'یک شنبه',
      value: 'یک شنبه'
    },
    {
      day: 'دوشنبه',
      value: 'دوشنبه'
    },
    {
      day: 'سه شنبه',
      value: 'سه شنبه'
    },
    {
      day: 'چهار شنبه',
      value: 'جهار شنبه'
    },
    {
      day: 'پنج شنبه',
      value: 'پنج شنبه'
    },
    {
      day: 'جمعه',
      value: 'جمعه'
    }
  ]

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await axios.post('/api/weeks/save-weeks', {
        selectedDays: selectedValues
      })
      alert(response.data.message)
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-end text-xs font-bold'>روز های کاری</h1>
      <form
        onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}
        className='flex flex-row-reverse gap-3 justify-between'
      >
        <CheckboxGroup
          size='sm'
          errorMessag='sdsasd'
          className='text-end text-black text-xs'
          orientation='horizontal'
          isRequired
          onValueChange={value => setSelectedValues(value)}
        >
          {days.map((i, index) => (
            <Checkbox key={index} className='text-black' value={i.value}>{i.day}</Checkbox>
          ))}
   
        </CheckboxGroup>

        <Button
          size='sm'
          isLoading={loading}
          className=' bg-myOrange text-white'
          type='submit'
          radius='md'
        >
          ثبت
        </Button>
      </form>
    </div>
  )
}

export default WeeksForm
