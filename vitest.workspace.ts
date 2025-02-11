import vue from '@vitejs/plugin-vue'
import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    extends: './vitest.config.mts',
    plugins: [vue()],
    test: {
      environment: 'node',
      include: ['docs/**/*.test.ts'],
      name: 'docs',
      setupFiles: 'test/vitest/setup/setup.docs.ts',
    },
  },
])
