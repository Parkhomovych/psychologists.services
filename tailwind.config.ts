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
        black: "#191a15",
        black01: "rgba(25, 26, 21, 0.1);",
        black02: "rgba(25, 26, 21, 0.2);",
        black06: 'rgba(25, 26, 21, 0.6);',
        white: "#fbfbfb",
        white01: 'rgba(251, 251, 251, 0.1);',
        white02: 'rgba(251, 251, 251, 0.2);',
        white05: 'rgba(251, 251, 251, 0.5);',
        Tgreen: {
          primary: "#54be96",
          secondary: "#36a379",
        },
        Tblue: {
          primary: "#3470ff",
          secondary: "#255ee8",
        },
        Torange: {
          primary: "#fc832c",
          secondary: "#f37113",
        },
        green: "#54be96",
        blue: "#3470ff",
        orange: "#fc832c",
        yellow: "#FBC75E",
        purple: '#4535af',
        activeGreen: "#36a379",
        activeBlue: "#255ee8",
        activeOrange: "#f37113",
      },
    }
  },
  plugins: [],
};
export default config;
