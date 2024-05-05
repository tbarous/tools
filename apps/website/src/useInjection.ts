import { useContext } from 'react'
import { ContainerContext } from './ContainerProvider.tsx'
import { containers } from '@tbarous/di'

export function useInjection(store: any) {
  const id = useContext(ContainerContext)

  const container = containers.resolve(id)

  return container?.resolve(store)
}
