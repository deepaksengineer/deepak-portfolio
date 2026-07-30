import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Base colors - Space theme */
        base: {
          950: '#05070b',
          900: '#0f1428',
          850: '#151a2e',
          800: '#1a1f3a',
          750: '#202550',
          700: '#252d66',
          650: '#2a3580',
          600: '#303c99',
          550: '#3545b3',
          500: '#3d4ecc',
          400: '#5c6ee6',
          300: '#7b8ff5',
          200: '#9baeff',
          100: '#bbcfff',
          50: '#dce6ff',
        },

        /* Cyan glow - Primary accent */
        'cyan-glow': {
          DEFAULT: '#00d9ff',
          50: '#e0ffff',
          100: '#b3ffff',
          200: '#80ffff',
          300: '#4dffff',
          400: '#1affff',
          500: '#00d9ff',
          600: '#00b8cc',
          700: '#00879d',
          800: '#005666',
          900: '#002533',
        },

        /* Green accent */
        'green-accent': {
          DEFAULT: '#39ff88',
          50: '#e8ffe8',
          100: '#c2ffd4',
          200: '#9cffaa',
          300: '#6dff7f',
          400: '#39ff88',
          500: '#00ff00',
          600: '#00cc33',
          700: '#009933',
          800: '#006633',
          900: '#003300',
        },

        /* Pink/Magenta accent */
        'pink-accent': {
          DEFAULT: '#ff6b9d',
          50: '#ffe8f0',
          100: '#ffc6db',
          200: '#ffa5c7',
          300: '#ff83b2',
          400: '#ff6b9d',
          500: '#ff5288',
          600: '#cc3366',
          700: '#991a44',
          800: '#661122',
          900: '#330911',
        },

        /* Purple accent */
        'purple-accent': {
          DEFAULT: '#b366ff',
          50: '#f0e6ff',
          100: '#d9b3ff',
          200: '#cc99ff',
          300: '#bf80ff',
          400: '#b366ff',
          500: '#a64dff',
          600: '#8633cc',
          700: '#661999',
          800: '#330066',
          900: '#1a0033',
        },

        /* Ink colors */
        ink: {
          100: '#e6edf3',
          200: '#c9d1d9',
          300: '#8b949e',
          400: '#6e7681',
          500: '#30363d',
          600: '#21262d',
          700: '#0d1117',
        },
      },

      backgroundColor: {
        glow: 'rgba(0, 217, 255, 0.1)',
        'glow-strong': 'rgba(0, 217, 255, 0.2)',
      },

      borderColor: {
        glow: 'rgba(0, 217, 255, 0.3)',
      },

      /* Typography */
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.02em' }],
        sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }],
        base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0em' }],
        lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0em' }],
        xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },

      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
        mono: [
          'Menlo',
          'Monaco',
          '"Courier New"',
          'monospace',
        ],
      },

      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },

      /* Spacing */
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },

      /* Shadows - Glow effects */
      boxShadow: {
        'glow-xs': '0 0 10px rgba(0, 217, 255, 0.2)',
        'glow-sm': '0 0 20px rgba(0, 217, 255, 0.3)',
        'glow-md': '0 0 30px rgba(0, 217, 255, 0.4)',
        'glow-lg': '0 0 40px rgba(0, 217, 255, 0.5)',
        'glow-xl': '0 0 60px rgba(0, 217, 255, 0.6)',
        'glow-2xl': '0 0 80px rgba(0, 217, 255, 0.7)',
        'glow-green-xs': '0 0 10px rgba(57, 255, 136, 0.2)',
        'glow-green-sm': '0 0 20px rgba(57, 255, 136, 0.3)',
        'glow-green-md': '0 0 30px rgba(57, 255, 136, 0.4)',
        'glow-green-lg': '0 0 40px rgba(57, 255, 136, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(0, 217, 255, 0.1)',
        'inner-glow-strong': 'inset 0 0 30px rgba(0, 217, 255, 0.2)',
        'neon': '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.25), inset 0 0 20px rgba(0, 217, 255, 0.1)',
        'neon-lg': '0 0 40px rgba(0, 217, 255, 0.6), 0 0 80px rgba(0, 217, 255, 0.3), inset 0 0 20px rgba(0, 217, 255, 0.15)',
      },

      /* Gradients */
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-cyan-to-green': 'linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(57, 255, 136, 0.2))',
        'gradient-space': 'linear-gradient(135deg, rgba(5, 7, 11, 1) 0%, rgba(15, 10, 30, 0.8) 50%, rgba(5, 7, 11, 1) 100%)',
        'gradient-hero': 'linear-gradient(to right, rgba(0, 217, 255, 0.1), rgba(57, 255, 136, 0.1))',
        'mesh-gradient': 'linear-gradient(135deg, #0a0e1a 0%, #1a0033 25%, #0f1428 50%, #0a0e1a 75%, #1a0033 100%)',
      },

      /* Backdrop filter */
      backdropFilter: {
        'blur-xs': 'blur(2px)',
        'blur-sm': 'blur(4px)',
        'blur-md': 'blur(12px)',
        'blur-lg': 'blur(20px)',
        'blur-xl': 'blur(30px)',
      },

      /* Transitions */
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },

      transitionTimingFunction: {
        'ease-smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'ease-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      /* Border radius */
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },

      /* Blur */
      blur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '20px',
        'xl': '30px',
      },

      /* Z-index */
      zIndex: {
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
      },

      /* Animation */
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'shimmer': 'shimmer 2s infinite',
        'slide-up': 'slide-in-up 0.6s ease-out',
        'slide-down': 'slide-in-down 0.6s ease-out',
        'slide-left': 'slide-in-left 0.6s ease-out',
        'slide-right': 'slide-in-right 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.6s ease-out',
        'orbit': 'orbit 4s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },

      /* Keyframes */
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.25)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(0, 217, 255, 0.8), 0 0 60px rgba(0, 217, 255, 0.4)',
          },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'slide-in-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-down': {
          'from': { opacity: '0', transform: 'translateY(-30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          'from': { opacity: '0', transform: 'translateX(30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'scale-in': {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },

      /* Opacity */
      opacity: {
        '5': '0.05',
        '10': '0.1',
        '15': '0.15',
      },

      /* Line clamp */
      lineClamp: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
      },
    },
  },
  plugins: [
    /* Custom plugin for additional utilities */
    function ({ addUtilities, theme }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.7)',
        },
        '.text-shadow-glow': {
          textShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
        },
        '.text-shadow-glow-lg': {
          textShadow: '0 0 40px rgba(0, 217, 255, 0.5)',
        },
        '.glass-effect': {
          backgroundColor: 'rgba(16, 21, 31, 0.4)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 217, 255, 0.1)',
        },
        '.glass-effect-strong': {
          backgroundColor: 'rgba(16, 21, 31, 0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 217, 255, 0.15)',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.line-through-gradient': {
          'background': 'linear-gradient(90deg, transparent 0%, rgba(0, 217, 255, 0.3) 50%, transparent 100%)',
          'height': '1px',
          'width': '100%',
        },
      });
    },
  ],
};

export default config;
