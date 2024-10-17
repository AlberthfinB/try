import { motion } from "framer-motion";

interface ICard {
   pic: React.ReactNode;
   children: string;
   sec: string;
}

export function Card(props: ICard) {
   const { pic, children, sec } = props;
   return (
      <motion.div
         className="w-[20em] h-[35em] bg-black bg-opacity-55 rounded-2xl flex flex-col items-center text-white"
         whileHover={{
            scale: 1.1,
            boxShadow: "0px 10px 15px #e01414",
         }}
         transition={{
            type: "spring",
            stiffness: 400,
            damping: 75,
         }}
      >
         <div className="fill-white size-[5em] pt-5">{pic}</div>
         <section className="text-bold text-5xl pt-10 pb-16">
            <h1>{sec}</h1>
         </section>
         <p className="text-center">{children}</p>
      </motion.div>
   );
}
