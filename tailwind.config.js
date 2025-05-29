/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // apne custom colors yahan add karo
        primary: '#4F46E5',    // ek modern indigo shade
        secondary: '#10B981',  // fresh green
        accent: '#F59E0B',     // vibrant amber
        dark: '#1F2937',       // dark slate
        light: '#F3F4F6',      // light gray background
      },
    },
  },
  plugins: [],
}

