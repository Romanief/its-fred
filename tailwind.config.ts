import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackNight: "#141414",
        dimGray: "#656176",
        sheenGold: "#B39C4D",
        saffron: "#E7BB41",
        darkSaffron: "#755f20",
        snow: "#FFFCFF",
        darkSnow: "rgb(224 222 222 / 0.9)",
        myBlack: "#090909",
        bistre: "#181307",
      },
      fontFamily: {
        Bebas: ['"Bebas Neue"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
