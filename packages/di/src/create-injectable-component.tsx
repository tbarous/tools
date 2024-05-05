import { ContainerProvider } from './ContainerProvider'
import React from 'react'
import { containers } from './containers'

export function createInjectableComponent(Component: any, stores: any) {
  return () => (
    <ContainerProvider id={containers.register(stores)}>
      <Component />
    </ContainerProvider>
  )
}
