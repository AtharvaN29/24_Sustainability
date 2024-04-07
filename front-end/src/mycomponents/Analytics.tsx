import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import PieChart from '@/graphs/PieChart'
import ThreeNode from '@/graphs/ThreeNode'
import { Separator } from '@radix-ui/react-separator'
import Anaysis1 from '../graphs/Anaysis1'

export default function Analytics() {
  return (
    <div className=''>
      <div className='flex items-center justify-center'>
        <Card className='border border-zinc-600 flex flex-col justify-evenly h-auto w-1/2  m-5'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-xl font-bold'>
              Stable vs Unstable
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col justify-evenly'>
            <PieChart />
          </CardContent>
        </Card>

        <Card className='border border-zinc-600 flex flex-col justify-evenly h-auto w-1/2 m-5'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-xl font-bold'>
              Hour vs Unstability
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col justify-evenly'>
            <Anaysis1 />
          </CardContent>
        </Card>
        
      </div>
    
      <div className='mt-10 p-10 mb-[500px] border border-white w-[500px] h-[600px] rounded-xl ml-[425px]'>
        <Card className='border-0 text-center font-serif'>
          <CardHeader>
            <CardTitle>Power Distribution </CardTitle>
          </CardHeader>
        <CardContent className='flex flex-col justify-evenly'>
          <ThreeNode />
        </CardContent>
        </Card>
        
        <Separator />
      </div>
    </div>
  )
}
