import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  // 配置项
  plugins: [tailwindcss()],
  server: {
    port: 5273
  }
})
