import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            '@babel/plugin-proposal-decorators',
            {
              version: '2023-11',
            },
            '@babel/plugin-proposal-class-properties',
          ],
        ],
      },
    }),
  ],
  test: {
    watch: false,
  },
})
