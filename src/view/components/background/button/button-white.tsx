"use client";
import { useRouter } from "next/navigation";

export function ButtonWhite() {
   const router = useRouter();
   const handleToTest = () => {
      router.push("/service");
   };
   return (
      <button
         onClick={handleToTest}
         className="border  border-black px-4 py-3 hover:border-red-600 hover:text-red-600 mt-14 w-1/2"
      >
         BOOK AN APPOINTMENT
      </button>
   );
}
