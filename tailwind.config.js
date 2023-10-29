/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        plex: ["IBM Plex Sans", "sans-serif"],
      },
      fontSize: {
        sm: "clamp(0.6rem, 0.1vw + 0.57rem, 0.66rem)",
        base: "clamp(0.75rem, 0.23vw + 0.69rem, 0.88rem)",
        md: "clamp(0.94rem, 0.42vw + 0.83rem, 1.17rem)",
        lg: "clamp(1.17rem, 0.7vw + 1rem, 1.55rem)",
        xl: "clamp(1.46rem, 1.1vw + 1.19rem, 2.07rem)",
        xxl: "clamp(1.83rem, 1.69vw + 1.41rem, 2.76rem)",
        xxxl: "clamp(2.29rem, 2.53vw + 1.66rem, 3.68rem)",
      },
    },
  },
  plugins: [],
};
