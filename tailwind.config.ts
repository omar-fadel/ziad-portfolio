import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        degular: ['var(--font-degular)'],
        code: ['var(--font-code)'],
        poppins: ['var(--font-poppins)'],
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
      },
    },
  },
  plugins: [],
};
export default config;
