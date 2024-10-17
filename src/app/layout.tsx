import localFont from "next/font/local";
import Navbar from "@/view/components/navbar";
import FooterX from "@/view/components/footer";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "Barbershop Home – Professional Haircuts at Your Doorstep",
   description:
      "Barbershop Home delivers professional haircut services right to your home. Our experienced barbers provide a variety of men's hairstyles and grooming services, including classic and modern cuts, as well as beard grooming. Enjoy a premium barbershop experience without leaving your house. Book our service today and get the perfect look at a time that suits you",
   keywords:
      "home barbershop, at-home haircuts, mobile barber, men's grooming, men's haircut, barber service, professional barber, on-call barber",
   icons: {
      icon: "/logo.png",
   },
};

const geistSans = localFont({
   src: "./fonts/GeistVF.woff",
   variable: "--font-geist-sans",
   weight: "100 900",
});
const geistMono = localFont({
   src: "./fonts/GeistMonoVF.woff",
   variable: "--font-geist-mono",
   weight: "100 900",
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            <Navbar />
            {children}
            <FooterX />
         </body>
      </html>
   );
}
