import { useInjection } from './useInjection.ts'
import { UserStore } from './store/user.store.ts'
import { observer } from 'mobx-react-lite'

export const Profile = observer(() => {
  const userStore = useInjection(UserStore)

  return (
    <div>
      {userStore.name}

      <button onClick={() => userStore.setName('Joe')}>Change name</button>
    </div>
  )
})
