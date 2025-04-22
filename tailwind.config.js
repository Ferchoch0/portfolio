/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
            blackhole: {
              50:  '#f5f4f5',
              100: '#e2dbe2',
              200: '#c1b1c3',
              300: '#9c7ea0',
              400: '#6d415d', // bordó suave
              500: '#4e243e', // púrpura oscuro
              600: '#331029', // borde/hover
              700: '#250b1e', // fondo profundo
              800: '#190712', // más oscuro aún
              900: '#0b0309', // casi negro
            },
            roseNebula: '#a62349',     // para detalles o hover
            plasmaGlow: '#43f5ce',     // para acentos o efectos
          },
      },
    },
    plugins: [],
  };
  