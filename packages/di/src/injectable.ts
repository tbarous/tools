export const injectable: any = (value: any, { kind, name }: any) => {
  if (kind === 'class') {
    const store = class extends value {
      constructor(...args: any[]) {
        super(...args)
        this.container = args?.[0].container
      }
    }

    Object.defineProperty(store, 'name', { value, writable: true })

    return store
  }
}
