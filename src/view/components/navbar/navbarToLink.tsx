import Link from "next/link";

interface INavbar {
   to: string;
   parag: string;
}
export default function NavbarToLink(props: INavbar) {
   const { to, parag } = props;
   return (
      <Link className="hover:text-red-600" href={to}>
         {parag}
      </Link>
   );
}
