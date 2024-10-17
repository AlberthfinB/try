import CardTest from "./team-cards";
import { cards } from "./team-var";
export default function Team() {
   return (
      <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center">
         <div className="text-4xl font-bold ">
            <section>Our Team</section>
         </div>
         <div className="flex space-x-4 pt-11 ">
            {cards.map((e, i) => (
               <CardTest key={i} pict={e.pict} nama={e.nama} moto={e.moto} />
            ))}
         </div>
      </div>
   );
}
