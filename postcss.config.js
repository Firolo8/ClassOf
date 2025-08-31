/*
 * PostCSS configuration.  TailwindCSS uses PostCSS under the hood to
 * transform utility classes into real CSS.  Autoprefixer adds vendor
 * prefixes where necessary.  See https://tailwindcss.com/docs/using-with-preprocessors
 */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
