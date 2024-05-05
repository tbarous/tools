import { ContainerProvider } from './ContainerProvider'
import React, { FunctionComponent, ReactElement } from 'react'
import { root } from './root'
import { IStoresToBeInjected } from './types'

export const createInjectableComponent =
  <P,>(
    Component: FunctionComponent,
    stores: IStoresToBeInjected,
    props: P
  ): (() => ReactElement) =>
  () => (
    <ContainerProvider id={root.createContainer(stores, props).id}>
      <Component />
    </ContainerProvider>
  )
