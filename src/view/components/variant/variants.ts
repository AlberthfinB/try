import { Variants } from "framer-motion";

interface FadeInOptions {
   direction: "up" | "down" | "left" | "right";
   delay: number;
}

// Update the interface to match Framer Motion's Variants structure
interface FadeInAnimation extends Variants {
   hidden: {
      y: number;
      x: number;
   };
   show: {
      y: number;
      x: number;
      opacity: number;
      transition: {
         type: string;
         duration: number;
         delay: number;
         ease: number[];
      };
   };
}

export const fadeIn = (
   direction: FadeInOptions["direction"],
   delay: FadeInOptions["delay"]
): FadeInAnimation => {
   return {
      hidden: {
         y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
         x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      },
      show: {
         y: 0,
         x: 0,
         opacity: 1,
         transition: {
            type: "tween",
            duration: 0.5,
            delay: delay,
            ease: [0.25, 0.25, 0.25, 0.75],
         },
      },
   } as FadeInAnimation; // Type assertion to satisfy TypeScript
};
