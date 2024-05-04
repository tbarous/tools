import typescript from '@rollup/plugin-typescript'
import { babel } from '@rollup/plugin-babel'
import { RollupOptions } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import { dts } from 'rollup-plugin-dts'

export const build = (): RollupOptions[] => [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.esm.js',
        format: 'esm',
      },
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
      },
    ],
    plugins: [commonjs(), typescript(), babel({ babelHelpers: 'bundled' })],
  },
  {
    input: './src/types.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]
