/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle farthest-side at 70% 50%, transparent, #000 75%)',
      },
      fontFamily: {
        circular: ['Circular', 'sans-serif'],
      },
      colors: {
        'custom-gray': '#1a1b1f',
      },
      fontSize: {
        'custom-base': '16px',
     
      },
      lineHeight: {
        'custom-base': '28px',    
          '1.15': '1.15',
      },
    },
  },
  plugins: [
   
  ],
}