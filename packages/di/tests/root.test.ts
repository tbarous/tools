import { expect, test } from 'vitest'
import { ProductsStore, root, Stores, UsersStore } from '../src'

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
