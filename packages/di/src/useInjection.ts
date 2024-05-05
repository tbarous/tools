import { useContext } from 'react'
import { ContainerContext } from './ContainerProvider'
import { root } from './root'
import { IStoreClassOrDetailedStoreOrString } from './types'

export function useInjection(store: IStoreClassOrDetailedStoreOrString) {
  const id = useContext(ContainerContext)

  const container = root.resolveContainer(id)

  if (!container) return

  return container.resolveStore(store)
}
