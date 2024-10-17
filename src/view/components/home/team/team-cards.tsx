interface ICardTest {
   pict: string;
   nama: string;
   moto: string;
}

export default function CardTest(props: ICardTest) {
   const { pict, nama, moto } = props;

   return (
      <div className=" flex-col flex  max-w-xs space-y-4">
         <div
            className={`w-[20rem] h-[25rem] ${pict} bg-cover rounded-lg opacity-90 hover:opacity-100 `}
         ></div>
         <section>{nama}</section>
         <p>{moto}</p>
         <hr className="border border-black mt-2" />
      </div>
   );
}
