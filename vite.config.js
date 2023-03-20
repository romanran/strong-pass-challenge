import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import postcssNesting from 'postcss-nesting'

const config = {
    svgLoader: { defaultImport: 'raw' },
    css: {
        postcss: { plugins: [postcssNesting()] }
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), svgLoader(config.svgLoader)],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: config.css
})
