import { useInjection } from './useInjection.ts'
import { UsersStore } from './store/users.store.ts'
import { observer } from 'mobx-react-lite'
import { ProductsStore } from './store/products.store.ts'

export const Profile = observer(() => {
  const userStore = useInjection(UsersStore)
  const productsStore = useInjection(ProductsStore)

  return (
    <div>
      {userStore.name}
      {productsStore.name}
      <button onClick={() => userStore.setName('Joe')}>Change name</button>
    </div>
  )
})
