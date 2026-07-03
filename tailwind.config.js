/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0E17",
        surface: "#121826",
        surface2: "#1A2233",
        border: "#232C40",
        ink: "#E4E9F2",
        muted: "#7C879E",
        cyan: "#5EEAD4",
        pink: "#F472B6",
        amber: "#FBBF24",
        violet: "#A78BFA"
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(94,234,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.05) 1px, transparent 1px)"
      },
      keyframes: {
        blink: { "0%,49%": { opacity: 1 }, "50%,100%": { opacity: 0 } },
        typein: { from: { width: "0" }, to: { width: "100%" } }
      },
      animation: {
        blink: "blink 1s step-end infinite"
      }
    }
  },
  plugins: []
};
