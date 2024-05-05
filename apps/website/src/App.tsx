import { UsersStore } from './store/users.store.ts'
import { containers } from '@tbarous/di'
import { Container } from '@tbarous/di'
import { ContainerProvider } from './ContainerProvider.tsx'
import { Profile } from './Profile.tsx'
import { ProductsStore } from './store/products.store.ts'

const container = new Container()
container.register(UsersStore)
container.register(ProductsStore)

containers.register(container)

export default function App() {
  return (
    <ContainerProvider id={container.id}>
      <Profile />
    </ContainerProvider>
  )
}
