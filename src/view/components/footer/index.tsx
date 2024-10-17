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
         <footer>
            <div className="text-black space-x-8 text-lg px-40 ">
               <div className="absolute left-[9rem] bottom-[2.5rem]">
                  <Image src="/logo.png" alt="logo" width={150} height={50} />
               </div>

               {footerLink.map((e, i) => (
                  <NavbarToLink key={i} to={e.to} parag={e.parag} />
               ))}
            </div>
         </footer>
      </div>
   );
}
