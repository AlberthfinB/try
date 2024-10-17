import AboutUSez from "@/view/components/home/about/about-usez";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: " About Us – Your Premier Barbershop Experience",
   description:
      "At Barbershop Home, we are passionate about delivering top-notch grooming services tailored to the modern man. With a team of experienced barbers, we focus on providing personalized haircuts, beard grooming, and styling that reflect your unique style and personality. Our mission is to create a welcoming atmosphere where every client feels valued and leaves feeling confident and refreshed. Discover our commitment to quality, service, and customer satisfaction. Join us for an unparalleled barbershop experience",
   keywords:
      "about us, barbershop home, professional grooming, men's haircuts, beard care, quality service, customer satisfaction, experienced barbers, personalized grooming",
};
export default function AboutView() {
   return <AboutUSez />;
}
