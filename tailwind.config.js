
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
        siteColor: "#031330",
        linkColor: "#031330",
        textColor: "#545454",
        siteYellow: "#ffc70b",
        hoverText: "#00C6C0",
        gray: "#f5f5f5", 
        info: "#00bcd4",  
        failure: "#ff5252",  
        warning: "#ffeb3b",  
        success: "#4caf50", 
      },
      fontFamily: {
        anton: ["Anton", 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
        sanSerif: ["Open Sans", "sans-serif"],
      },
      backgroundColor: {
        siteColor: "#041332",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
};
