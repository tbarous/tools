import { UserStore } from './store/user.store.ts'
import { containers } from '@tbarous/di'
import { Container } from '@tbarous/di'
import { ContainerProvider } from './ContainerProvider.tsx'
import { Profile } from './Profile.tsx'

const container = new Container()
container.register(UserStore)
containers.register(container)

export default function App() {
  return (
    <ContainerProvider id={container.id}>
      <Profile />
    </ContainerProvider>
  )
}
