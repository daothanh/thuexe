import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite'
import eslint from 'vite-plugin-eslint'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig(({mode}) => ({
  plugins: [
    ...(mode === 'development' ? [eslint()] : []),
    vue(),
    ...(mode === 'development' ? [vueDevTools()] : []),
    AutoImport({
      eslintrc: {
        enabled: true,
      },
      imports: [
        'vue',
        'vue-router',
        'pinia',
      ],
      dts: 'types/auto-imports.d.ts',
      dirs: ['src/stores', 'src/composables', 'src/types'],
    }),
    // Compression plugin for production builds
    compression({
      algorithm: 'gzip',
      threshold: 1024, // Only compress files larger than 1KB
      deleteOriginFile: false,
      ext: '.gz'
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: 'esbuild',
    // Optimize asset handling
    assetsInlineLimit: 4096,
    // Target modern browsers for better optimization
    target: 'esnext',
    rollupOptions: {
      output: {
        // Better chunk splitting strategy
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          'antd-vendor': ['ant-design-vue', '@ant-design/icons-vue'],
          'utils-vendor': ['axios', 'dayjs'],
        },
        // Cache-friendly file naming
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'ant-design-vue'],
  },
}))
