


import { MainNav } from "./main-nav";
// import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
 
 
  return ( 
    <div className="border-b border-b-2">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
        
        </div>
      </div>
    </div>
  );
};
 
export default Navbar;