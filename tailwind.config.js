module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        extension: "extension 1.5s ease-in-out",
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        extension: {
          "0%": { width: "0px" },
          "100%": { width: "100%" },
        },
      },
    },
    colors: {
      white: "#FFFFFF",
      primary: "#3742fa",
      secondary: "#1e90ff",
      "swan-white": "#f7f1e3",
      "sweet-garden": "#55E6C1",
      "falling-star": "#CAD3C8",
      "oasis-stream": "#9AECDB",
      "green-1": "#009432",
      "red-1": "#ff4757",
      "gray-1": "#a4b0be",
      "gray-2": "#747d8c",
      "gray-3": "#57606f",
      "gray-4": "#2f3542",
      "gray-5": "#171a20",
      "dark-1": "#212121",
      "dark-2": "#1a1a1b",
      "logo-1": "#ddef3f",
      "logo-2": "#18dcff",
      dirt: "#676767",
    },
    
  },
};
