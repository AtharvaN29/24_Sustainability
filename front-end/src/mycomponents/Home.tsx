import Anaysis1 from '@/graphs/Anaysis1'
import {TabsDemo} from '../mycomponents/Slides'
import Tools from '../assets//Tools.jpg'
export default function Home() {
  return (
    // <div className='w-full border border-red-700 h-[800px] -z-10 '>
    //    <img src={HomePage} alt='' className='h-full w-full' />
    //   HOme Page
    // </div>
    <>
    <div className='bg-black flex flex-col justify-center items-center'>
      <div>
      <div className='text-4xl font-serif pt-10  pb-2 text-center bg-black'>Analyse anywhere!</div>
    <div className='text-2xl  text-center'>Use our grid analysis model for predicting </div>
      </div>
      <div>
      <img src={Tools} alt="" className='mt-10 h-[500px]'/>
      </div>

      <TabsDemo/>


    </div>
    
    </>
    
  )
}
