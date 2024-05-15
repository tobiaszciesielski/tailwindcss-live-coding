import { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        ngLodz: '#e52312',
      },
    },
  },
  plugins: [],
} satisfies Config;
