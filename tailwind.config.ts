import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            sea5: "url(./asset/img-05.png)",
            bg7: "url(./asset/img-07.jpg)",
            bg1: "url(./asset/img-01.jpg)",
            team1: "url(./asset/team-01.jpg)",
            team2: "url(./asset/team-02.jpg)",
            team3: "url(./asset/team-03.jpg)",
            team4: "url(./asset/team-04.jpg)",
            testi: "url(./asset/testi-01.jpg)",
            logo: "url(./asset/logo.png)",
         },
         colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
         },
      },
   },
   plugins: [],
};
export default config;
