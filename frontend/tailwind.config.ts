import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
      'wave-animation': {
        '0%': { transform: 'scale(0.5)', opacity: '1' },
        '100%': { transform: 'scale(1.5)', opacity: '0' },
      },
    },
    animation: {
      'wave': 'wave-animation 2s infinite',
    },
    },
  },
}
export default config
