module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6',
          dark: '#2563eb'
        },
        secondary: {
          light: '#10b981',
          dark: '#059669'
        }
      }
    }
  },
  plugins: []
};
