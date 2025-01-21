import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.png', '**/*.svg', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.ico', '**/*.webp', '**/*.avif', '**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf', '**/*.otf', '**/*.mov', '**/*.MOV', '**/*.mp4', '**/*.MP4', '**/*.mkv', '**/*.MKV'],
})
