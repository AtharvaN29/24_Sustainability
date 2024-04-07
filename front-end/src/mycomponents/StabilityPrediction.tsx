import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Heading from '@/components/ui/header'
import { Separator } from '@/components/ui/separator'
import { LoaderIcon } from 'lucide-react'
import { useState } from 'react'
import DownloadButton from './downloadButton'
import { faFilePdf, faL } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import toast from 'react-hot-toast'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
export default function StabilityPrediction() {
  const [date, setDate] = React.useState<Date>()
  const [truths, settruths] = React.useState(false)
  const [truthans, settruthans] = React.useState(false)

  const data = [
    ['Name', 'Age', 'Country'],
    ['John', 30, 'USA'],
    ['Alice', 25, 'Canada'],
    ['Bob', 35, 'UK'],
  ]

  const [truth, setTruth] = useState(false)
  const [truth1, setTruth1] = useState(true)
  const handleClick = () => {
    setTruth(true)
    setTimeout(() => {
      setTruth(false)
      setTruth1(false)
      toast.success('Report generated successfully')
    }, 2000)
  }
  return (
    <div className=' min-h-screen m-2'>
      <div className='flex items-center justify-between mb-3 '>
        <Heading
          title={`Stability Prediction Model`}
          description='Predict stability of your grid with our prediciton model'
        />
      </div>
      <Separator />

      <div className='flex flex-col justify-center  items-center m-2 mt-5 h-[500px]'>
        {truth1 && (
          <Card className='border border-zinc-600 flex flex-col justify-evenly '>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-xl font-bold'>
                Input Power Generted Data
              </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col justify-evenly'>
              <div className=''>
                <input
                  type='file'
                  className='p-4 bg-black rounded-xl m-5'
                ></input>
              </div>
              <Button className='rounded-lg m-2' onClick={handleClick}>
                Generate Stability
              </Button>
            </CardContent>
          </Card>
        )}
        <div>
          {' '}
          {truth && (
            <div className='mt-10'>
              <LoaderIcon className='h-20 w-20 rotate flex justify-center items-center' />
            </div>
          )}
        </div>
        {!truth1 && (
          <Card className='border border-zinc-600 w-1/2 mb-10'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-2xl font-bold'>
                Predicted Stability Data
              </CardTitle>
              <DownloadButton data={data} />
            </CardHeader>
            <CardContent>
              <div className='flex'>
                <FontAwesomeIcon icon={faFilePdf} className='h-7' />
                <div className=' self-center '>3 months predicted data</div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      <Separator />
      <div className='flex flex-col justify-evenly h-[500px]'>
        <Heading
          title={`Prediction based on date`}
          description='Predict stability of your grid on any input date   '
        />
        <Separator />
        {/* Date */}
        <div className='flex  justify-start ml-40 items-center  '>
          <div className=' items-start'>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[280px] justify-start text-left font-normal',
                    !date && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0'>
                <Calendar
                  mode='single'
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        {/* Date */}
        <div className='flex justify-evenly items-center'>
          <Button
            onClick={() => {
              settruths(true)
              setTimeout(() => {
                settruths(false)
                settruthans(true)
                toast.success('Statue generated successfully')
              }, 1000)
              settruthans(false)
            }}
          >
            Predict Stability
          </Button>
          <Card className=' border border-zinc-600 w-1/2'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Stability Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>
                {truths && (
                  <div className='m-2'>
                    <LoaderIcon className='h-10 w-10 ml-10 rotate flex justify-center items-center' />
                  </div>
                )}
                {truthans && <div>Stable</div>}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Separator />
      <Separator />
    </div>
  )
}
