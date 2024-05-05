import { useContext } from 'react'
import { ContainerContext } from './ContainerProvider'
import { containers } from './containers'

export function useInjection(store: any) {
  const id = useContext(ContainerContext)

  const container = containers.resolve(id)

  return container?.resolve(store)
}
