import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // 'desktop': '1280px',
        // => @media (max-width: 1535px) { ... }
        // 'xl-desktop': { max: '1536px' },
        "lg-desktop": { max: "1535px" },
        "md-desktop": { max: "1279px" },
        "sm-desktop": { max: "1024px" },
        "xs-desktop": { max: "992px" },
        tablet: { max: "768px" },
        "lg-mob": { max: "600px" },
        "semiLg-mob": { max: "500px" },
        "md-mob": { max: "450px" },
        "sm-mob": { max: "320px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ablue: "#0E6FFF",
      },
    },
  },
  plugins: [],
};
export default config;
