/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        256: "64rem",
        512: "128rem",
      },
      strokeWidth: {
        "1_5": "1.5px",
        3: "3px",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
		backgroundActive:{
			"0%":{backgroundPosition:"0% 76%"},
			"50%":{backgroundPosition:"100% 25%"},
			"100%":{backgroundPosition:"0% 76%"}
		}
      },
      animation: {
        add: "ping 800ms ease-in-out 1",
		bg_rotation: "backgroundActive 4s ease infinite"
      },
      colors: {
        outlines: "#E1E4E9",
        main: {
          DEFAULT: "#165080",
          900: "#165080",
        },
        accent: {
          300: "#75fff0",
          400: "#7bf3d2",
          DEFAULT: "#7bf3d2",
        },
        gray: {
          100: "#F3F5F9",
          200: "#EDF0F5",
          300: "#E1E4E9",
          900: "#333238",
          DEFAULT: "#333238",
        },
      },
      fontFamily: {
        sans: ["Golos Text VF", "sans-serif"],
      },
      boxShadow: {
        active:
          "0px 2.75px 24px 0px rgba(159, 255, 223, 0.50), 0px 0.25px 12px 0px rgba(0, 223, 187, 0.40)",
      },
      borderWidth: {
        16: "16px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),

    function ({ addComponents, theme }) {
      addComponents({
        "._outline": {
          outlineColor: theme("colors.outlines"),
          outlineOffset: "1rem",
          outlineStyle: "solid",
        },
      });
    },

    function ({ matchVariant, theme }) {
      matchVariant(
        "nth",
        (value) => {
          return `&:nth-child(${value})`;
        },
        {
          values: {
            DEFAULT: "n", // Default value for `nth:`
            "2n": "2n", // `nth-2n:utility` will generate `:nth-child(2n)` CSS selector
            "3n": "3n",
            "4n": "4n",
            "5n": "5n",
            //... so on if you need
          },
        }
      );
    },
  ],
};
