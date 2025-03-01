import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
    plugins: [
        vue(),
    ],
    server: {
        port: 8080,
        proxy: {
            "/api": {
                target: "http://127.0.0.1:8000",
                changeOrigin: true,
                secure: false,
            }
        }
=======
    plugins: [vue()],
    server:{
        port: 8100
>>>>>>> 4823b8b4f13fe82f5179143be2e111dc8a240f61
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/assets/styles/_variables.scss";
                    `
            }
        }
    },
    
})
