import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        degular: ['var(--font-degular)'],
        code: ['var(--font-code)'],
        poppins: ['var(--font-poppins)'],
        lato: ['var(--font-lato)'],
      },
      screens: {
        desktop: '1440px',
        tablet: '1024px',
        mobile: '640px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        beige: 'var(--beige)',
        forest: 'var(--forest)',
      },
    },
  },
  plugins: [],
};
export default config;
