


import { ModeToggle } from "@/components/ui/modetoggle";
import { MainNav } from "./main-nav";
import { UserButton } from "@clerk/clerk-react";
// import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
 
 
  return ( 
    <div className="border-b border-b-2">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
        <ModeToggle/>
        <UserButton/>
        </div>
      </div>
    </div>
  );
};
 
export default Navbar;