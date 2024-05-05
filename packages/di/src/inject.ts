import { autorun } from 'mobx'

export const inject: any = (store: any) => {
  return function (value: any, { kind, name }: any) {
    return {
      init() {
        autorun(() => {
          // @ts-ignore
          const resolvedStore = this.container?.resolve?.(store)
          if (resolvedStore) {
            // @ts-ignore
            this[name] = resolvedStore
          }
        })
      },
    }
  }
}
