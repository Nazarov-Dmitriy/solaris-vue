import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        viteStaticCopy({
                targets: [
                    {
                      src: path.resolve(__dirname, './.htaccess') , // 1 
                      dest: './' // 2
                     }
                  ]
            }),
    ],
    server: {
        port: 8080,
        proxy: {
            "/api": {
                target: "http://127.0.0.1:8000",
                changeOrigin: true,
                secure: false,
            }
        },
    },
    // server:{
    //     port: 8100
    // },
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
