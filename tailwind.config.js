/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors:{
            "themeColor":"#fdba74",
            "second":"#fefce8",
            "titleColor":"#451a03",
            "textAreaColor":"#ffedd5"
        },
        fontFamily:{
            title: ["Roboto Slab", "serif"],
            noteText:["Prompt, sans-serif"],
            
        }
      },
    },
    plugins: [],
  }
