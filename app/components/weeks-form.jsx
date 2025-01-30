import React, { useState } from 'react'
import { CheckboxGroup, Checkbox, Button } from "@heroui/react"
import axios from 'axios'

const WeeksForm = () => {
  const [selectedValues, setSelectedValues] = useState([])
  const [loading, setLoading] = useState(false)

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
          className='text-end  text-xs'
          orientation='horizontal'
          isRequired
          onValueChange={value => setSelectedValues(value)}
        >
          <Checkbox value='Saturday'>شنبه</Checkbox>
          <Checkbox value='Sunday'>یکشنبه</Checkbox>
          <Checkbox value='Monday'>دوشنبه</Checkbox>
          <Checkbox value='Tuesday'>سه‌شنبه</Checkbox>
          <Checkbox value='Wednesday'>چهارشنبه</Checkbox>
          <Checkbox value='Thursday'>پنج‌شنبه</Checkbox>
          <Checkbox value='Friday'>جمعه</Checkbox>
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
