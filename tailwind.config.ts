import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          'back_home': "url('../../public/Background.png')",
      },
      fontFamily: {
        sans:  ['var(--font-madelyn)'],
        second:  ['var(--font-lora)'],
      },
    },
  },
  plugins: [],
};
export default config;
