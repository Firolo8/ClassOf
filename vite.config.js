import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vite configuration for the ClassOf project.  The alias below allows
// imports such as "@/components/ui/button" to resolve to the
// corresponding file under the src directory.  See the README for
// additional information.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
