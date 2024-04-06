import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function PowerForm() {
  return (
    <div className=''>
      <form className=' flex flex-col   '>
        <Input placeholder='Temprature Value' className='w-auto m-5'></Input>
        <Input placeholder='Pressure Vaue ' className='w-auto m-5'></Input>
        <Input placeholder='Wind Speed' className='w-auto m-5' ></Input>

      </form>
    </div>
  )
}
