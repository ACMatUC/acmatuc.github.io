module.exports = {
  plugins: [
    require('postcss-import')({
      filter: (args) => {
        const exclude = ['main', 'minima'];
        return !exclude.includes(args);
      }
    }),
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.JEKYLL_ENV == "production"
      ? [require('cssnano')({ preset: 'default' })]
      : [])
  ]
};