import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";



const DownloadButton: React.FC<{ data: any[][] }> = ({ data }) => {

    
const dataToCsv = (data: any[][]) => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + data.map(row => row.join(",")).join("\n");
    return encodeURI(csvContent);
  };

    const handleDownload = () => {
      const encodedUri = dataToCsv(data);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "data.csv");
      document.body.appendChild(link);
      link.click();
    };
  
    return (
              <Button className=" border-1 border-gray-800 " onClick={handleDownload} variant='secondary'><Download className="h-4 w-4"/></Button>
    );
  };
  
  export default DownloadButton;