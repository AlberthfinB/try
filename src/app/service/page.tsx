import Services from "@/view/components/home/servicess/services";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Barbershop Services – Quality Haircuts & Grooming for Men",
   description:
      "Discover our comprehensive barbershop services designed for the modern man. We offer a range of haircuts, beard grooming, and styling options tailored to your personal style. Our skilled barbers use the latest techniques to ensure you leave looking and feeling your best. Whether you're in need of a classic cut, trendy fade, or meticulous beard trim, our services guarantee satisfaction and confidence. Schedule your appointment today and experience the difference in quality grooming",
   keywords:
      "barbershop services, men's haircuts, beard grooming, professional barber, hair styling, classic cuts, trendy fades, grooming services, mobile barber",
};
export default function Service() {
   return <Services />;
}
