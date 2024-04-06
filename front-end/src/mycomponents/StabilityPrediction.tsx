import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Heading from "@/components/ui/header";
import { Separator } from "@/components/ui/separator";
import { LoaderIcon } from "lucide-react";
import { useState } from "react";
import DownloadButton from "./downloadButton";
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast, { useToaster } from "react-hot-toast";

export default function StabilityPrediction() {

    const data = [
        ['Name', 'Age', 'Country'],
        ['John', 30, 'USA'],
        ['Alice', 25, 'Canada'],
        ['Bob', 35, 'UK'],
      ];

    const [truth,setTruth]=useState(false);
const [truth1,setTruth1]=useState(true);
    const handleClick = () => {
        setTruth(true); 
        setTimeout(() => {
          setTruth(false);
          setTruth1(false); 
          toast.success("Report generated successfully")
        }, 2000); 
      };
  return (
    <div className=" min-h-screen m-2">
      <div className="flex items-center justify-between mb-3 ">
        <Heading
          title={`Stability Prediction Model`}
          description="Predict stability of your grid with our prediciton model"
        />
      </div>
      <Separator/>

      <div className="flex flex-col justify-center items-center m-2 mt-5 ">
     {truth1 && 
      <Card className="border border-zinc-600 flex flex-col justify-evenly h-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">
          Input Power Generted Data
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-evenly">
        <div className=""><input type="file"></input></div>
        <Button className="rounded-lg m-2" onClick={handleClick}>Generate Stability</Button>
      </CardContent>
    </Card>
    }
          <div>   {truth && 
      <div className="mt-10" >
      <LoaderIcon className="h-20 w-20 rotate flex justify-center items-center"/>
      </div>
}

        </div>
        {!truth1 &&
         <Card className="border border-zinc-600 w-1/2">
         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
           <CardTitle className="text-2xl font-bold">
           Predicted Stability Data
           </CardTitle>
           <DownloadButton data={data}/>
         </CardHeader>
         <CardContent>
           <div className="flex">
             <FontAwesomeIcon icon={faFilePdf} className="h-7"/>
             <div className=" self-center ">3 months predicted data</div>
             </div>
         </CardContent>
       </Card>
        }
      </div>
    </div>
  )
}
