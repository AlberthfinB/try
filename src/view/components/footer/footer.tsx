"use client";
import Adver from "@/contentful/adver/adver";
import { useRef } from "react";
import {
   motion,
   useScroll,
   useSpring,
   useTransform,
   useMotionValue,
   useVelocity,
   useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
   children: React.ReactNode;
   baseVelocity: number;
}

function Parallax({ children, baseVelocity = 100 }: ParallaxProps) {
   const baseX = useMotionValue(0);
   const { scrollY } = useScroll();
   const scrollVelocity = useVelocity(scrollY);
   const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
   });
   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
   });

   const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

   const directionFactor = useRef<number>(1);
   useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
         directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
         directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
   });

   return (
      <div className="overflow-hidden tracking-tighter leading-[0.8] m-0 whitespace-nowrap flex justify-center">
         <motion.div
            className="font-extrabold text-md flex whitespace-nowrap flex-nowrap"
            style={{ x }}
         >
            <div className="inline mr-[30px]">{children}</div>
         </motion.div>
      </div>
   );
}

export default function Paralex() {
   return (
      <section>
         <Parallax baseVelocity={-5}>
            <Adver />
         </Parallax>
      </section>
   );
}
