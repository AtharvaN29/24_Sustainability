import { Button } from '@/components/ui/button'
import Heading from '@/components/ui/header'
import { Separator } from '@/components/ui/separator'
import { LoaderIcon, Plus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Input } from '@/components/ui/input'

export default function PowerPrediction() {
  const data = [
    ['Name', 'Age', 'Country'],
    ['John', 30, 'USA'],
    ['Alice', 25, 'Canada'],
    ['Bob', 35, 'UK'],
  ]
  const [temp, setTemp] = useState('')
  const [pressure, setPressure] = useState('')
  const [atharva, setAtharva] = useState('')
  const [wind, setwind] = useState('')
  const [truths, settruths] = useState(false)
  const [truthans, settruthans] = useState(false)
  const [truth, setTruth] = useState(false)
  const [truth1, setTruth1] = useState(false)
  const handleClick = () => {
    setTruth(true)
    setTimeout(() => {
      setTruth(false)
      setTruth1(true)
      toast.success('Report generated')
    }, 2000)
  }

  let response
  const data1 = {
    air: temp,
    pressure: pressure,
    windspeed: wind,
  }
  const db = async () => {
    const database = await fetch('http://127.0.0.1:5000/power', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data1),
    })
    response = await database.json()
    response = response.result[0].toString()
    setAtharva(response)
    if (database) {
      toast.success('Value fetched')
      console.log(response)
    } else {
      toast.error('Error')
    }
  }
  const hardik = (url: string) => {
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', 'report')
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }
  return (
    <div className='h-full  min-h-screen  m-2 mr-10 '>
      <div className='flex items-center justify-between mb-3 '>
        <Heading
          title={`Power Prediction Model`}
          description='Predict power generation of your grid with our prediction Model '
        />
        <Button className='' onClick={handleClick}>
          <Plus className='mr-2 h-4 w-4' />
          Get Data
        </Button>
      </div>
      <Separator />
      {truth && (
        <div className='flex justify-center  items-center h-[600px] top-0 absolute w-full '>
          <LoaderIcon className='h-20 w-20 rotate flex justify-center items-center' />
        </div>
      )}
      {!truth && truth1 && (
        <div>
          <div className='mt-5 flex justify-center'>
            <Card className='border-2 w-1/2'>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-2xl font-bold'>
                  Predicted Power Consumption
                </CardTitle>
                <Button
                  onClick={() => {
                    hardik('http://localhost:5173/new_train.csv')
                  }}
                >
                  download
                </Button>
              </CardHeader>
              <CardContent>
                <div className='flex'>
                  <FontAwesomeIcon icon={faFilePdf} className='h-7' />
                  <div className=' self-center '>3 months predicted data</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='flex items-center justify-evenly '>
            <div className='  m-7   rounded-md w-[35rem]'>
              <Card className='border-2 border-stone-400'>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-2xl font-bold'>
                    Query Predicted Data
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className=''>
                    <form
                      className=' flex flex-col'
                      onSubmit={(e) => {
                        e.preventDefault()
                      }}
                    >
                      <Input
                        placeholder='Temprature Value'
                        className='w-auto m-5'
                        onChange={(e) => {
                          setTemp(e.target.value)
                        }}
                      ></Input>
                      <Input
                        placeholder='Pressure Vaue '
                        className='w-auto m-5'
                        onChange={(e) => {
                          setPressure(e.target.value)
                        }}
                      ></Input>
                      <Input
                        placeholder='Wind Speed'
                        className='w-auto m-5'
                        onChange={(e) => {
                          setwind(e.target.value)
                        }}
                      ></Input>
                      <Button
                        className='rounded:md m-4 w-1/3  self-center flex justify-center items-center'
                        onClick={() => {
                          settruths(true)
                          setTimeout(() => {
                            settruths(false)
                            settruthans(true)
                            toast.success('Statue generated successfully')
                          }, 1000)
                          settruthans(false)
                          db()
                        }}
                      >
                        Submit
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Output */}

            <Card className='border border-zinc-700'>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Predicted Value of Power Generated
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>
                  {truths && (
                    <div className='m-2'>
                      <LoaderIcon className='h-10 w-10 ml-10 rotate flex justify-center items-center' />
                    </div>
                  )}

                  {truthans && <span>{atharva}</span>}
                </div>
              </CardContent>
            </Card>
          </div>
          {response}
        </div>
      )}
      <Separator />
    </div>
  )
}
