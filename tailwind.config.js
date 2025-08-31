/*
 * Tailwind CSS configuration.  The `content` array tells Tailwind what
 * files to scan for class names.  Without this Tailwind will purge
 * unused styles and your classes will not be generated.  See
 * https://tailwindcss.com/docs/content-configuration for details.
 */
export default {
  content: [
       './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
