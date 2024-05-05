import { Container } from './container'

export interface IDecoratorContext {
  kind: 'class' | 'accessor'
  name: string | undefined
  addInitializer(initializer: () => void): void
}

export type ClassDecorator = (
  value: { new (): any },
  context: IDecoratorContext
) => Function | void

export type ClassAutoAccessorDecorator = (
  value: {
    get: () => unknown
    set(value: unknown): void
  },
  context: {
    kind: 'accessor'
    name: string | symbol
    access: { get(): unknown; set(value: unknown): void }
    static: boolean
    private: boolean
    addInitializer(initializer: () => void): void
  }
) => {
  get?: () => unknown
  set?: (value: unknown) => void
  init?: (initialValue: unknown) => unknown
} | void

export interface IStore {
  container: Container
  name: string
  [key: string]: any
}

export type IStoreClass = {
  new (args: { container: Container; props: any }): any
}

export interface IDetailedStore {
  store?: IStoreClass
  name: string
}

export type IStoreClassOrDetailedStoreOrString =
  | IStoreClass
  | IDetailedStore
  | string

export type IStoresMap = Map<string, IStore>

export type IStoresToBeInjected =
  | IStoreClass[]
  | { store: IStoreClass; name: string }[]
