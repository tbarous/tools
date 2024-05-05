import { containers } from '@tbarous/di'
import { ContainerProvider } from '@tbarous/di'
import { Profile } from './Profile.tsx'
import { ProductsStore } from '../store/products.store.ts'
import { UsersStore } from '../store/users.store.ts'

export default function App() {
  return (
    <ContainerProvider id={containers.register([UsersStore, ProductsStore])}>
      <Profile />
    </ContainerProvider>
  )
}
