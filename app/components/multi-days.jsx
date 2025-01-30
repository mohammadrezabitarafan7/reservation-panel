import { Select, SelectItem } from "@heroui/react"

export const days = [
  { key: 'sat', label: 'شنبه' },
  { key: 'sund', label: 'یکشنبه' },
  { key: 'mon', label: 'دوشنبه' },
  { key: 'tus', label: 'سه شنبه' },
  { key: 'wed', label: 'چهار شنبه' },
  { key: 'thur', label: 'پنج شنیه' },
  { key: 'fry', label: 'جمعه' }
]

export default function App () {
  return (
    <Select
    isRequired
      className='max-w-xs'
      label='Favorite Animal'
      placeholder='Select an animal'
      selectionMode='multiple'
    >
      {days.map(i => (
        <SelectItem key={i.key}>{i.label}</SelectItem>
      ))}
    </Select>
  )
}
