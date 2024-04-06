import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { GlobeDemo } from "./GlobeDemo";
import { Button } from "@/components/ui/button";

export default function Landingpag() {
  return (
    <div className="flex justify-between">
<div className="bg-black w-1/2">
        <GlobeDemo/>
</div>
    <div className="bg-black w-1/2 flex justify-center items-center">
      <div className="flex justify-between w-1/2">

      <Button variant='secondary' className="p-7"><SignInButton afterSignInUrl="http://localhost:5173/home"/></Button>
      <Button variant='outline' className="p-7"><SignUpButton afterSignUpUrl="http://localhost:5173/home"/></Button>
      </div>
      </div>

    </div>
  )
}
