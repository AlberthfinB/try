import { Star } from "@/svg";

interface ICard1 {
   text: string;
   name: string;
}
export default function CardTesti(props: ICard1) {
   const { text, name } = props;
   return (
      <div className="max-w-xs space-y-4">
         <div className="w-[20rem] h-[25rem] rounded-lg bg-testi bg-cover "></div>
         <div className="text-white">
            <p>{text}</p>
            <div className="flex my-4">
               <Star className="size-[2.5rem] fill-red-700" />
               <Star className="size-[2.5rem] fill-red-700" />
               <Star className="size-[2.5rem] fill-red-700" />
               <Star className="size-[2.5rem] fill-red-700" />
               <Star className="size-[2.5rem] fill-red-700" />
            </div>
            <section>{name}</section>
            <hr className="border border-white mt-2" />
         </div>
      </div>
   );
}
