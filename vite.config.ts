import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Figma assets
      'figma:asset/78b909075804cc5e3d99ccf374d24588dd18a40f.png': path.resolve(__dirname, './src/assets/78b909075804cc5e3d99ccf374d24588dd18a40f.png'),
      'figma:asset/43daea929ce4f49fffcfe6bf8263d6a34b78c22b.png': path.resolve(__dirname, './src/assets/43daea929ce4f49fffcfe6bf8263d6a34b78c22b.png'),
      'figma:asset/432b9d71cb945b7b780bc36a23285370a7507233.png': path.resolve(__dirname, './src/assets/432b9d71cb945b7b780bc36a23285370a7507233.png'),
      'figma:asset/3824818348f5b8907b15b568eae370bcd7243d12.png': path.resolve(__dirname, './src/assets/3824818348f5b8907b15b568eae370bcd7243d12.png'),
      // Path alias
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
});
