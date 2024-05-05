import React, { createContext, ReactNode } from 'react'
import { Container } from './container'

export const ContainerContext = createContext<symbol>(Symbol())

export const ContainerProvider = ({
  id,
  children,
}: {
  id: Container['id']
  children: ReactNode
}) => {
  return (
    <ContainerContext.Provider value={id}>{children}</ContainerContext.Provider>
  )
}
