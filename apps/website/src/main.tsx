import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import { createInjectableComponent } from '@tbarous/di'
import { UsersStore } from './store/users.store.ts'
import { ProductsStore } from './store/products.store.ts'

const InjectableApp = createInjectableComponent(App, [
  UsersStore,
  ProductsStore,
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InjectableApp />
  </React.StrictMode>
)
