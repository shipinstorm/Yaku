import type { Config } from 'tailwindcss';
const konstaConfig = require('konsta/config');
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }
        md: '900px',
        // => @media (min-width: 768px) { ... }
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: '#000',
        surface: '#000',
        primary: 'rgb(255, 255, 255)',
        secondary: 'rgba(224, 224, 255, 0.6)',
        terciary: 'rgba(255, 255, 255, 0.4)',
        elevation1: 'rgb(45, 47, 51)',
        'elevation1-hover': 'rgba(255, 255, 255, 0.1)',
        elevation2: '#36393F',
        line: 'rgba(224,224,255,.12)',
        'blue-main': 'rgb(0, 163, 255)',
        'pink-main': '#f38aff',
        'btn-subtle': '#050708'
      },
    },
  },
  plugins: [],
  konsta: {
    colors: {
      'progress-bar': '#6de6e9'
    }
  }
};
export default konstaConfig(config);
