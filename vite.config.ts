import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: 'https://www.kyse.com.br/',
    plugins: [react()],
    resolve: {
        alias: {
            src: '/src',
            pages: '/src/pages',
            components: '/src/components',
            providers: '/src/providers',
        },
    },
})
