import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://lhernandez66.github.io/SDEV_255_Final_Project_Group2/',  // use the repo name as the base path
  plugins: [react()],
});
