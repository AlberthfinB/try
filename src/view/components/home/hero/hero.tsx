import { ButtonWhite } from "../../background/button/button-white";

export default function Hero() {
   const forSlide = ["FOR", "GENTELEMEN", "ON THE GO"];
   return (
      <div className=" min-h-screen  flex justify-start items-center pl-[18em]  bg-sea5 bg-fixed  bg-[right_top_-14rem]   bg-[length:65rem] bg-no-repeat overflow-hidden">
         <div className="max-w-2xl overflow-hidden ">
            <div>
               <hr className="w-16 h-[0.2em] bg-gray-900 rounded inline-block relative bottom-1 " />
               <p className="pl-1 inline-block text-[1em] pb-8">
                  World-class Men's Haricuts
               </p>
               <div>
                  <div className="text-8xl font-bold space-y-2 pb-28">
                     {forSlide.map((e, i) => (
                        <div key={i}>
                           <h1>{e}</h1>
                        </div>
                     ))}
                  </div>
               </div>
               <hr className="w-full h-1 bg-gray-900 " />
               <div className="pt-8 pl-16">
                  <h2 className="text-4xl font-semibold">
                     If You Keep Walking Past the <br /> Barbers, Eventually
                     You'll Get <br /> a Haircut.
                  </h2>
               </div>
               <ButtonWhite />
            </div>
         </div>
      </div>
   );
}
