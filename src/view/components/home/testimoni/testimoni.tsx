import CardTesti from "./card-testi";

const card = [
   {
      text: "The service at this barbershop is amazing! The haircut was neat and exactly how I wanted it. Definitely coming back!",
      name: "Alexander",
   },
   {
      text: "A very comfortable place with professional barbers. They are meticulous with every cut, and the results are always satisfying",
      name: "Putra",
   },
   {
      text: "Affordable prices with excellent service quality. I highly recommend this barbershop for anyone looking for a stylish haircut",
      name: "Yudha",
   },
   {
      text: "This barbershop really knows how to make customers feel special. They are very detailed, and the final result is perfect!",
      name: "Purnama",
   },
];
export default function Testi() {
   return (
      <div className="flex flex-col w-full min-h-screen bg-bg1 bg-cover justify-center items-center bg-fixed">
         <div className="text-white text-4xl font-bold ">
            <section>TESTIMONIALS</section>
         </div>
         <div className="flex space-x-4 pt-11">
            {card.map((e, i) => (
               <CardTesti key={i} text={e.text} name={e.name} />
            ))}
         </div>
      </div>
   );
}
