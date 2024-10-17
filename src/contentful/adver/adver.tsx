import contentfulClient from "../contentfulClient";
import { TypeAdvertisementSkeleton } from "../types/advertisement";

const getAdver = async () => {
   try {
      const data =
         await contentfulClient.getEntries<TypeAdvertisementSkeleton>();
      return data;
   } catch (err) {
      console.log(err);
   }
};
export default async function Adver() {
   const advers = await getAdver();
   return (
      <div>
         {advers &&
            advers.items?.map((e, i) => (
               <div key={i}>
                  <p className="text-lg text-blue-600">
                     {e.fields.advertisement}
                  </p>
               </div>
            ))}
      </div>
   );
}
