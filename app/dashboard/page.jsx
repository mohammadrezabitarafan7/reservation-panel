'use client'
import Header from '../components/header'
import WaitingTable from '../components/table'
import TopHeader from '../components/top-header'
export default function Home () {
  return (
    <div className='flex flex-col gap-4 p-4'>
   
      <TopHeader />
      <WaitingTable />
    </div>
  )
}
