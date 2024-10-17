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
      <header>
         <div className="w-full justify-end items-end flex bg-white/40 backdrop-blur-2xl absolute">
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
