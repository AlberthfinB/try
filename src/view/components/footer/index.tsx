import Paralex from "./footer";
import NavbarToLink from "../navbar/navbarToLink";
import Image from "next/image";
export const footerLink = [
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
export default function FooterX() {
   return (
      <div className="relative flex justify-end w-full h-[14rem] items-center ">
         <div className="flex justify-center items-center ">
            <Paralex />
         </div>
         <footer>
            <div className="text-black text-lg font-bold pl-[11rem] ">
               <div className="absolute left-[9rem] bottom-[2.5rem]">
                  <Image src="/logo.png" alt="logo" width={150} height={50} />
               </div>
               <div className="flex flex-col pr-[10rem] ">
                  {footerLink.map((e, i) => (
                     <NavbarToLink key={i} to={e.to} parag={e.parag} />
                  ))}
               </div>
            </div>
         </footer>
      </div>
   );
}
