/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#050608',
        carbon: '#0f1117',
        crimson: '#ff1f4b',
        ember: '#ff6d24'
      },
      fontFamily: {
        display: ['Rajdhani', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(255, 31, 75, 0.45)',
        card: '0 10px 40px -18px rgba(0, 0, 0, 0.65)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, rgba(255,31,75,0.15), transparent 65%)',
        'gradient-sheen': 'linear-gradient(135deg, rgba(255,31,75,0.45), rgba(255,109,36,0.25))'
      }
    }
  },
  plugins: []
};
