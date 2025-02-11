import { defineConfig } from 'vitest/config'

import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: { define: { global: 'window' } },
  test: {
    env: {
      repository: pkg.repository.url.replace('.git', ''),
      version: '1.2.3',
      VITEST: 'true',
    },
  },
})
