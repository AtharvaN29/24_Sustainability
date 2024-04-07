"use client";
import self1 from './Self1.png';
import self2 from './Self2.png';
import recom from './Recom.png';
import easy from './EasyAi.png';
import contact from './Contact.png'
import { Tabs } from "../components/ui/tabs";
import A1 from '../assets/A1.jpeg'
export function TabsDemo() {
  const tabs = [
    {
      title: "Home",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Home Tab</p>
          <div className='bg-red'>
          <DummyContent1 src={A1}/>

          </div>
        </div>
      ),
    },
    {
      title: "Self Declaration",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Self-Declaration</p>
          <DummyContent1 src={A1}/>
        </div>
      ),
    },
    {
      title: "EasyAI",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Easy AI</p>
          <div className='bg-red'>
          <DummyContent1 src={A1} />

          </div>
        
        </div>
      ),
    },
    {
      title: "Recommendation",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900" >
          <p>Recommendation</p>
          <DummyContent1 src={A1}/>
        </div>
      ),
    },
    {
      title: "Contact",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Contact Tab</p>
          <DummyContent1 src={A1}/>
        </div>
      ),
    },
  ];
 
  
  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
interface DummyContentProps {
    src: string;
  }
const DummyContent1: React.FC<DummyContentProps> = ({ src }) => {
    return (
      <img
        src={src}
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0  rounded-xl mx-auto"
      />
    );
  };
  