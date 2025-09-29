import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Game of Thorns color palette
        forest: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce5cc',
          300: '#8dd1a8',
          400: '#57b67d',
          500: '#3a8c6a', // Jade
          600: '#2f6f55', // Moss
          700: '#1f5f46', // Emerald
          800: '#0e1a12', // Forest Green
          900: '#0a120d', // Near-Black Green
          950: '#0f1b14', // Fog Green
        },
        accent: {
          gold: '#c6a858', // Antique Gold
          silver: '#cfd6d6', // Silver
          rose: '#6f1f2a', // Blood Rose
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        'display': ['Cinzel', 'Cormorant Garamond', 'serif'],
        'body': ['Inter', 'Manrope', 'sans-serif'],
      },
      animation: {
        'vine-grow': 'vineGrow 2s ease-in-out',
        'metallic-sheen': 'metallicSheen 0.6s ease-out',
        'fog-drift': 'fogDrift 20s ease-in-out infinite',
      },
      keyframes: {
        vineGrow: {
          '0%': { strokeDasharray: '0 100' },
          '100%': { strokeDasharray: '100 0' },
        },
        metallicSheen: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fogDrift: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(10px) translateY(-5px)' },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
