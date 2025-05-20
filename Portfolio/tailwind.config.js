/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#34C759',
        secondary: '#333333',
        accent: '#F5F5F5',
        highlight: '#007BFF',
        success: '#28a745',
        warning: '#ffc107',
        error: '#dc3545',
        'text-dark': '#000000',
        'text-light': '#FFFFFF',
        // Light mode colors
        light: {
          bg: '#FFFFFF',
          text: '#1a1a1a',
          secondary: '#F5F5F5',
          accent: '#333333',
        },
        // Dark mode colors
        dark: {
          bg: '#1a1a1a',
          text: '#e5e5e5',
          secondary: '#2d2d2d',
          accent: '#333333',
          border: '#404040',
          card: '#2d2d2d',
          hover: 'rgba(52, 199, 89, 0.1)',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '8': '2rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
