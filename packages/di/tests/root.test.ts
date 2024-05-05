import { expect, test } from 'vitest'
import { root } from '../src'
import { Stores } from './enums/stores.enums'
import { ProductsStore } from './stores/products.store'
import { UsersStore } from './stores/users.store'

test('Decorator works', () => {
  const container = root.createContainer(
    [
      UsersStore,
      ProductsStore,
      {
        name: Stores.MY_CUSTOM_PRODUCTS_STORE,
        store: ProductsStore,
      },
    ],
    { name: 'John Doe' }
  )

  const usersStore = container.resolveStore(UsersStore)
  const productsStore = container.resolveStore(ProductsStore)
  const productsStore2 = container.resolveStore(Stores.MY_CUSTOM_PRODUCTS_STORE)

  expect(usersStore.name).toBe('John Doe')

  productsStore.setName('joeee')
  expect(productsStore.name).toBe('joeee')

  productsStore2.setName('joeee22')
  expect(productsStore2.name).toBe('joeee22')
})
