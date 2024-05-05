export type ClassDecorator = (
  value: { new (): any },
  context: {
    kind: 'class'
    name: string | undefined
    addInitializer(initializer: () => void): void
  }
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
