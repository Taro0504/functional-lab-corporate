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
      future: [
        "futura-pt-bold",
        "sans-serif",
      ]
    }
  },
  plugins: [],
}
