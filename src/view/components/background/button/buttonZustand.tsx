import React from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/stores/store";
interface ButtonNavigateProps {
   label: string;
   targetPage: string;
}

const ButtonNavigate: React.FC<ButtonNavigateProps> = ({
   label,
   targetPage,
}) => {
   const setPage = useStore((state) => state.setPage);
   const router = useRouter();

   const handleClick = () => {
      setPage(targetPage);
      router.push(targetPage);
   };

   return (
      <button
         onClick={handleClick}
         className="border  border-white px-1 text-red-900 py-1 bg-white hover:border-red-600 hover:text-red-600 mt-28 w-1/2 rounded-xl text-lg"
      >
         {label}
      </button>
   );
};

export default ButtonNavigate;
