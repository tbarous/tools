import { expect, test } from 'vitest'
// @ts-ignore
import { user } from '../dist/index.esm'

test('Decorator works', () => {
  expect(user.name).toBe('Joe')
})
