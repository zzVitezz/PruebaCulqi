/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'culqi-blue':'#111827',
        'culqi-green':' #27A376',
        'culqi-white':' #FFFFFF',
      },
    },
  },
  plugins: [],
}

