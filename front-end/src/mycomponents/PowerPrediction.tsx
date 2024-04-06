import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Heading from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { DollarSign, Download, Pi, PiIcon, Plus } from "lucide-react";
import PowerForm from "./powerForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import DownloadButton from "./downloadButton";

export default function PowerPrediction() {
  const data = [
    ['Name', 'Age', 'Country'],
    ['John', 30, 'USA'],
    ['Alice', 25, 'Canada'],
    ['Bob', 35, 'UK'],
  ];



  return (
    <div className="h-full  m-2 mr-10">
      <div className="flex items-center justify-between ">
        <Heading
          title={`Power Prediction`}
          description="Predict power generation with our trained Ml Model "
        />
        <Button className="">
          <Plus className="mr-2 h-4 w-4" />Get Data
        </Button>



      </div>
      <Separator />

      <div className="mt-5 flex justify-center">
      <Card className="border-2 w-1/2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
              Predicted Power Consumption
              </CardTitle>
              <DownloadButton data={data}/>
            </CardHeader>
            <CardContent>
              <div className=""><FontAwesomeIcon icon={faFilePdf} className="h-7"/></div>
            </CardContent>
          </Card>
      </div>
      <div className="flex items-center justify-evenly ">
      <div className="  m-7   rounded-md w-[35rem]">
      <Card className="border-2 border-stone-400">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
              Query Predicted Data 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <PowerForm/>
            </CardContent>
          </Card>
       </div>
        {/* Output */}
        
        <Card className="border-2 w-[10rem] text-center">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl text-center font-bold">
              90
              </CardTitle>
            </CardHeader>
            <CardContent>
              text
            </CardContent>
          </Card>
      </div>
     
    </div>
  )
}
