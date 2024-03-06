import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#191a15",
      white: "#fbfbfb",
      green: "#54be96",
      blue: "#3470ff",
      orange: "#fc832c",
      yellow: "#FBC75E",
      purple: '#4535af',
      hoverGreen: "#36a379",
      hoverBlue: "#255ee8",
      hoverOrange: "#f37113",
      white01: "rgba(25, 26, 21, 0.1);",
      white02: "rgba(25, 26, 21, 0.2);",
      white06: 'rgba(25, 26, 21, 0.6);',
      white05: 'rgba(251, 251, 251, 0.5);',


    },
    rotate: {
      15: "15deg",
      m15: "-15deg"
    },
  },
  plugins: [],
};
export default config;
