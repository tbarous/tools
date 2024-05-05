import { observer } from 'mobx-react-lite'
import { useGlobalInjection, useInjection } from '../src'
import { UsersStore } from './users.store'
import { ProductsStore } from './products.store'
import { Stores } from './stores.enums'
import React from 'react'

export const App = observer(() => {
  const userStore = useInjection(UsersStore)
  const productsStore = useInjection(ProductsStore)
  const productsStore2 = useInjection(Stores.MY_CUSTOM_PRODUCTS_STORE)
  const productsStore3 = useGlobalInjection(ProductsStore)

  return (
    <div>
      {userStore?.name}
      <br />
      {productsStore?.name}
      <br />
      {productsStore2?.name}
      <br />
      <button onClick={() => userStore?.setName('Joe')}>Change name</button>
    </div>
  )
})
