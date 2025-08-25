import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: '.',
  publicDir: false,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets'
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'images', dest: '.' },
        { src: 'videos', dest: '.' },
        { src: 'youtube.png', dest: '.' },
        { src: 'thumbnail.png', dest: '.' }
      ]
    })
  ]
});
