export const injectable: any = (value: any, { kind, name }: any) => {
  if (kind === 'class') {
    const store = class extends value {
      constructor(...args: any[]) {
        // @ts-ignore
        super(...args)
        this.container = args[0]
      }
    }

    Object.defineProperties(store, {
      name: {
        value: name,
      },
    })

    return store
  }
}
