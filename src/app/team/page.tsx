import Team from "@/view/components/home/team/team";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: " Meet Our Barbershop Team – Skilled Professionals at Your Service",
   description:
      "At Barbershop Home, our team of skilled barbers is dedicated to providing exceptional grooming experiences. Each barber brings unique expertise in various styles and techniques, ensuring personalized services tailored to your needs. With a passion for hair and a commitment to quality, our team stays updated on the latest trends to deliver the best results. Get to know our talented professionals and discover how they can help you achieve your desired look. Book your appointment today",
   keywords:
      "barbershop team, skilled barbers, professional grooming, hair experts, men's grooming specialists, barber profiles, talented stylists, quality haircuts",
};
export default function TeamS() {
   return <Team />;
}
