import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    basicSsl({
      /** name of certification */
      name: 'localhost',
      /** custom trust domains */
      domains: ['localhost'],
      /** custom certification directory */
      certDir: './.devServer/cert'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // logo etc that comes with vrspace client
    // to be removed, i.e. bundled with the client
    proxy: {
    '/babylon': {
      target: 'http://localhost:8080/',
      changeOrigin: true,
      secure: false
    },
    // worlds and other content
    '/content': {
      target: 'http://localhost:8080/',
      changeOrigin: true,
      secure: false
    },
    // websockets
    '/vrspace': {
      target: 'http://localhost:8080/',
      changeOrigin: true,
      secure: false
    },
    cors:false
    },
  }  
})
