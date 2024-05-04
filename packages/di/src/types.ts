export type ClassDecorator = (
  value: { new (): any },
  context: {
    kind: 'class'
    name: string | undefined
    addInitializer(initializer: () => void): void
  }
) => Function | void
