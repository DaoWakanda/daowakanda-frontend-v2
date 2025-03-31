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
        greenColor:'var(--greenColor)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        avenir: ['var(--font-avenir)'],
        avenirLtsd:['var(--font-avenirLtsd)'],
        poppins: ['Poppins', 'sans-serif'],
        plusJarkata: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
