import { SignInButton, SignUpButton } from '@clerk/clerk-react'
import { GlobeDemo } from './GlobeDemo'
import { Button } from '@/components/ui/button'

export default function Landingpag() {
  return (
    <div className='flex justify-between'>
      <div className='bg-black w-1/2'>
        <GlobeDemo />
      </div>
      <div className='bg-black w-1/2 flex justify-center items-center'>
        <div className='flex justify-between w-1/2 flex-col gap-10'>
          <Button
            variant='secondary'
            className='p-7 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'
          >
            <SignInButton afterSignInUrl='http://localhost:5173/home' />
          </Button>
          <Button
            variant='outline'
            className='p-7 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'
          >
            <SignUpButton afterSignUpUrl='http://localhost:5173/home' />
          </Button>
        </div>
      </div>
    </div>
  )
}
