import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import ui from '@nuxt/ui/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), ui(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    exclude: ['@tailwindcss/oxide']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('vue')) return 'vue-vendor'
            if (id.includes('@nuxt/ui')) return 'ui-vendor'
          }
          // Component chunks baseados na pasta
          if (id.includes('/curriculo/')) return 'curriculo'
          if (id.includes('/layout/')) return 'layout'
          if (id.includes('/bemVindo/')) return 'welcome'
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
})

