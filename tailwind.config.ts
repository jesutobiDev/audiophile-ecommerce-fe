import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "":"",
        "primary":"#D87D4A",
        "primary_hover":"#fbaf85",
        "error":"#CD2C2C",
        
      },
    },
  },
  plugins: [],
};
export default config;
