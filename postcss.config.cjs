// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // <- IMPORTANT: este es el cambio: NO uses 'tailwindcss' aquí
    autoprefixer: {},
  },
};
