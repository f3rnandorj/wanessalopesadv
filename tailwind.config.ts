import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // poppins: ["var(--font-poppins)"],
      },
      boxShadow: {
        button: "0px 0px 30px rgba(0, 0, 0, 0.2);",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        ".button-hover": {
          backgroundColor: "rgb(244 244 245 / var(--tw-bg-opacity))",
          color: "rgb(9 9 11 / var(--tw-text-opacity))",
        },
        ".custom-mb": {
          marginBottom: "1rem",
          "@media(min-width: 640px)": {
            marginBottom: "2.5rem",
          },
        },
      });
    }),
  ],
};
export default config;
