import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import path, { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import tsconfigPathsPlugs from 'vite-tsconfig-paths'

const tsconfigPaths = tsconfigPathsPlugs({
  projects: [path.resolve('tsconfig.json')]
})

export default defineConfig({
  main: {
    plugins: [tsconfigPaths, externalizeDepsPlugin()],
    publicDir: resolve('resources')
  },
  preload: {
    plugins: [tsconfigPaths, externalizeDepsPlugin()]
  },
  renderer: {
    define: {
      'process.platform': JSON.stringify(process.platform)
    },
    css: {
      postcss: {
        plugins: [
          tailwindcss({
            config: './src/renderer/tailwind.config.js'
          })
        ]
      }
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [tsconfigPaths, react()]
  }
})
