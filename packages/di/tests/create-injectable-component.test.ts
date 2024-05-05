import { createInjectableComponent } from '../src'
import { expect, test } from 'vitest'
import { UsersStore } from './stores/users.store'
import { ProductsStore } from './stores/products.store'
import { Stores } from './enums/stores.enums'

test.skip('Decorator works', () => {
  const InjectableApp = createInjectableComponent(
    () => 1,
    [
      UsersStore,
      ProductsStore,
      {
        name: Stores.MY_CUSTOM_PRODUCTS_STORE,
        store: ProductsStore,
        props: {},
      },
    ],
    {}
  )

  expect(InjectableApp).toBe('Joe')
})
