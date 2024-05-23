import { Config } from 'tailwindcss';
import { breakpoints, inPx } from './src/app/utils/breakpoints';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      sm: inPx(breakpoints.sm),
      md: inPx(breakpoints.md),
      lg: inPx(breakpoints.lg),
      xl: inPx(breakpoints.xl),
    },
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
