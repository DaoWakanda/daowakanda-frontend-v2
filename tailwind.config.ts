import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        greenColor: 'var(--greenColor)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        avenir: ['var(--font-avenir)'],
        avenirLtsd: ['var(--font-avenirLtsd)'],
        poppins: ['Poppins', 'sans-serif'],
        plusJarkata: ['Plus Jakarta Sans', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        degular: ['degular', 'sans-serif'],
        degularDisplay: ['degular-display', 'sans-serif'],
      },
      borderImage: {
        gradient: 'linear-gradient(270deg, rgba(255, 255, 255, 0.7) 0%, #C5EE4F 100%)',
      },
      backgroundImage: {
        'custom-lime': 'linear-gradient(89.68deg, #C5EE4F 28.7%, rgba(113, 136, 45, 0.3) 63.66%)',
      },
    },
  },
  plugins: [],
};
export default config;
