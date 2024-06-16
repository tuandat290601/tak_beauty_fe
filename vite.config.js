import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'


import tailwindcss from 'tailwindcss'
import tailwindcssNesting from 'tailwindcss/nesting'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react(), chunkSplitPlugin()],
    build: {
        outDir: './build',
        minify: 'esbuild',
        chunkSizeWarningLimit: 3000,
        rollupOptions: {
            onwarn(warning, warn) {
                if (['MODULE_LEVEL_DIRECTIVE', 'THIS_IS_UNDEFINED'].includes(warning.code)) {
                    return
                }
                warn(warning.code)
            }
        }
    },
    css: {
        postcss: {
            plugins: [tailwindcssNesting, tailwindcss, autoprefixer()]
        }
    },
})
