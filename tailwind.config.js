/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: "hsl(22,65%,57%)",
      secOrange: "hsl(21, 94%, 75%)",
      secBlack: "hsl(0, 0%, 6%)",
      gray: "hsl(0, 0%, 95%)",
      secWhite: "hsl(0, 0%, 98%)",
      pureWhite: "hsl(0, 0%, 100%)",
      pureBlack: "hsl(0, 0%, 0%)",
      buttonGray: "hsl(0, 0%, 30%)",
      bgGray: "	hsl(0, 0%, 0%, 0.5)",
      inputBorder: "hsl(0, 0%, 81%)",
    },
    fontSize: {
      h1: [
        "56px",
        {
          fontWeight: "700",
          lineHeight: "58px",
          letterSpacing: "2px",
        },
      ],
      h2: [
        "40px",
        {
          fontWeight: "700",
          lineHeight: "44px",
          letterSpacing: "1.43px",
        },
      ],
      h3: [
        "32px",
        {
          fontWeight: "700",
          lineHeight: "36px",
          letterSpacing: "1.14px",
        },
      ],
      h4: [
        "28px",
        {
          fontWeight: "700",
          lineHeight: "38.25px",
          letterSpacing: "2px",
        },
      ],
      h5: [
        "24px",
        {
          fontWeight: "700",
          lineHeight: "32.78px",
          letterSpacing: "1.71px",
        },
      ],
      h6: [
        "18px",
        {
          fontWeight: "700",
          lineHeight: "24.59px",
          letterSpacing: "1.29px",
        },
      ],
      overline: [
        "14px",
        {
          fontWeight: "400",
          lineHeight: "19.12px",
          letterSpacing: "10px",
        },
      ],
      sub_title: [
        "13px",
        {
          fontWeight: "700",
          lineHeight: "25px",
          letterSpacing: "0.93px",
        },
      ],
      body: [
        "15px",
        {
          fontWeight: "500",
          lineHeight: "25px",
        },
      ],
      button: [
        "13px",
        {
          fontWeight: "700",
          lineHeight: "17.76px",
          letterSpacing: "1px",
        },
      ],
      cart_price: [
        "14px",
        {
          fontWeight: "700",
          lineHeight: "25px",
        },
      ],
      cart_title: [
        "15px",
        {
          fontWeight: "700",
          lineHeight: "25px",
        },
      ],
      checkout: [
        "12px",
        {
          fontWeight: "700",
          lineHeight: "16.39px",
          letterSpacing: "-0.21px",
        },
      ],
      checkbox: [
        "14px",
        {
          fontWeight: "700",
          lineHeight: "19.12px",
          letterSpacing: "-0.25px",
        },
      ],
    },
    screens: {},
    extend: {},
  },
  plugins: [],
};
