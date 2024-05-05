import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  root,
  createInjectableComponent,
  App,
  UsersStore,
  ProductsStore,
  Stores,
  Profile,
} from '@tbarous/di'

const InjectableApp = createInjectableComponent(
  App,
  [
    UsersStore,
    ProductsStore,
    { name: Stores.MY_CUSTOM_PRODUCTS_STORE, store: ProductsStore },
  ],
  { name: 'john don' }
)

root.globalContainer.registerStores([ProductsStore], {})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InjectableApp />
    <Profile />
  </React.StrictMode>
)
