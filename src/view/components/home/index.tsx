import Hero from "./hero/hero";
import AboutUSez from "./about/about-usez";
import Services from "./servicess/services";
import Team from "./team/team";
import Testi from "./testimoni/testimoni";

export default function Home() {
   return (
      <div>
         <Hero />
         <AboutUSez />
         <Services />
         <Team />
         <Testi />
      </div>
   );
}
