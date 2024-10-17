import Link from "next/link";
import NavbarToLink from "./navbarToLink";
import Image from "next/image";
export const navbarLink = [
   {
      to: "/",
      parag: "HOME",
   },
   {
      to: "/about",
      parag: "ABOUT US",
   },
   {
      to: "/service",
      parag: "SERVICES",
   },
   {
      to: "/team",
      parag: "TEAM",
   },
];

export default function Navbar() {
   return (
      <header className="relative h-[4rem] w-full bg-white/20 backdrop-blur-lg">
         <div className="flex flex-col w-full items-end  bg-white/5 backdrop-blur-lg justify-center">
            <nav>
               <div className="absolute left-[12rem] -bottom-[1.5rem]">
                  <Image src="/logo.png" alt="logo" width={120} height={50} />
               </div>
               <div className="text-black  space-x-8 py-8 px-40 text-lg ">
                  {navbarLink.map((e, i) => (
                     <NavbarToLink key={i} to={e.to} parag={e.parag} />
                  ))}
               </div>
            </nav>
         </div>
      </header>
   );
}
