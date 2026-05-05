/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //tạo background banner ảnh
      backgroundImage: {
          'bannerHome': "url('/banner.png')",
      }
    },
  },
  plugins: [],
}

