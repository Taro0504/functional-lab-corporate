/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  mode: 'jit',
  theme: {
    extend: {
    
    },
    fontFamily: {
      body: [
        "Noto Sans JP",
        "Helvetica Neue",
        "Helvetica",
        "Hiragino Sans",
        "Hiragino Kaku Gothic ProN",
        "Arial",
        "Yu Gothic",
        "Meiryo",
        "sans-serif",
      ],
      futura: [
        "futura-pt",
        "Jost",
        "sans-serif",
      ]
    },
    fontSize: {
      paragraph: "3.24vw",
      paragraphlg: "19px",
      head3: "7.4vw",
      head4: "5.5vw",
    },
    lineHeight: {
      paragraph: "7.4vw",
      paragraphlg: "43px",
    },
    colors: {
      white: "#ffffff",
      main: "#5dc1cf",
      sub: "#bce5ea",
      orange: "#e96d36",
      gray: "#f2f2f2",
      text: "#3b4043",
    },
  },
  plugins: [],
}
