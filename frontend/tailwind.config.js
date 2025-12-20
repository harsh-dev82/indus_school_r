/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",   // deep blue
        secondary: "#2563eb", // blue
        accent: "#3b82f6",    // light blue
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideUp: "slideUp 0.9s ease-out",
        zoomIn: "zoomIn 0.6s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        zoomIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        strong: "0 15px 40px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
