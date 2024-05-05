import { observer } from 'mobx-react-lite'
import { ProductsStore } from './products.store'
import { useGlobalInjection } from '../src'
import React from 'react'

export const Profile = observer(() => {
  const productsStore3 = useGlobalInjection(ProductsStore)

  return <div>{productsStore3?.name}</div>
})
