module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'bakerzBiteDarkBrown': '#4A1D1F',
        'bakerzBiteLightBrown': '#FBEDCD',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      },
      animation: {
        scroll: "scroll 15s linear infinite", 
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
