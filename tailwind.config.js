module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 1s ease-in-out',
        'bounce': 'bounce 2s infinite',
        'gradient-border': 'gradientBorder 3s linear infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite',
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
        gradientBorder: {
          '0%': { 'border-color': 'rgba(128, 0, 128, 0.5)' },
          '50%': { 'border-color': 'rgba(255, 0, 255, 0.8)' },
          '100%': { 'border-color': 'rgba(128, 0, 128, 0.5)' },
        },
        textGlow: {
          '0%, 100%': { color: 'rgba(255, 255, 255, 1)', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' },
          '50%': { color: 'rgba(255, 255, 255, 0.8)', textShadow: '0 0 20px rgba(255, 255, 255, 1)' },
        },
      },
    },
  },
  plugins: [],
};
