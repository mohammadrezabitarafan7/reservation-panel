import React, { useState } from 'react'
import { CheckboxGroup, Checkbox, Button, cn } from '@heroui/react'
import axios from 'axios'

const WeeksForm = () => {
  const [selectedValues, setSelectedValues] = useState([])
  const [loading, setLoading] = useState(false)

  const days = [
    {
      day: 'جمعه',
      value: 'جمعه'
    },
    {
      day: 'پنج شنبه',
      value: 'پنج شنبه'
    },

    {
      day: 'چهار شنبه',
      value: 'جهار شنبه'
    },
    {
      day: 'سه شنبه',
      value: 'سه شنبه'
    },
    {
      day: 'دوشنبه',
      value: 'دوشنبه'
    },

    {
      day: 'یک شنبه',
      value: 'یک شنبه'
    },
    {
      day: 'شنبه',
      value: 'شنبه'
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
          orientation='horizontal'
          isRequired
          onValueChange={value => setSelectedValues(value)}
        >
          <div className='flex flex-wrap-reverse justify-end gap-4'>
            {days.map((day, index) => (
              <Checkbox className='text-red-700' key={index} value={day.value}>
                {day.day}
              </Checkbox>
            ))}
          </div>
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
