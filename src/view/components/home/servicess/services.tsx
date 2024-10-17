"use client";
import { WebDevelopment, Shaves, BarberElec, HairCut } from "@/svg";

import { Card } from "./card-service";
// import { cardService } from "./servicers-var";

const cardService = [
   {
      pic: <HairCut />,
      children:
         "We are ready to provide a haircut that suits your desires! With professional staff and years of experience, we guarantee you will leave here with increased confidence.",
      sec: "Haircut",
   },
   {
      pic: <Shaves />,
      children:
         "Enjoy a stylish and modern haircut experience. Our barber team is ready to provide a style that suits your personality.",
      sec: "Shaves",
   },
   {
      pic: <BarberElec className="size-[5em] rotate-[-150deg]" />,
      children:
         "With precise cutting and comprehensive care, our premium service offers an unparalleled barbershop experience. Quality and comfort are our top priorities",
      sec: "Premium",
   },
   {
      pic: <WebDevelopment />,
      children:
         "Neat and Stylish with the Perfect Beard, Enhance your appearance with our professional beard trimming services. We will ensure your beard looks tidy, well-groomed, and tailored to your style",
      sec: "Beard Trim",
   },
];
export default function Services() {
   return (
      <div className=" min-h-screen justify-center items-center flex-col flex bg-bg7 bg-fixed  bg-[right_-25rem_bottom_-35rem] bg-[length:150rem] ">
         <section className="pb-16">
            <h2 className="text-white text-4xl font-bold ">Services</h2>
         </section>
         <div className="flex  space-x-10 ">
            {cardService.map((e, i) => (
               <Card key={i} pic={e.pic} children={e.children} sec={e.sec} />
            ))}
         </div>
      </div>
   );
}
