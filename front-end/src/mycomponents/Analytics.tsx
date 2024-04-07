import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Lines from "@/graphs/Lines";
import PieChart from "@/graphs/PieChart";
import ThreeNode from "@/graphs/ThreeNode";
import { Separator } from "@radix-ui/react-separator";

export default function Analytics() {
  return (
    <div className="">
        <div className="flex items-center justify-center">

     <Card className="border border-zinc-600 flex flex-col justify-evenly h-auto w-1/2  m-5">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">
          Stable vs Unstable
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-evenly">
        <PieChart/>
      </CardContent>
    </Card>

    
    <Card className="border border-zinc-600 flex flex-col justify-evenly h-auto w-1/2 m-5">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">
          Stable vs Unstable
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-evenly">
        <Lines/>
      </CardContent>
    </Card>
        </div>

    <div className="mt-10 mb-[500px]">

    <CardContent className="flex flex-col justify-evenly">
        <ThreeNode/>
      </CardContent>
      <Separator/>  
    </div>
    </div>
  )
}
