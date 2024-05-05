import { autorun } from 'mobx'
import { IDecoratorContext, IStoreClass } from './types'

export const inject = (store: string | IStoreClass) => {
  return function (_: unknown, { kind, name }: IDecoratorContext) {
    if (kind !== 'accessor') return

    return {
      init() {
        autorun(() => {
          // @ts-ignore
          const resolvedStore = this?.container?.resolveStore(store)

          if (resolvedStore) {
            // @ts-ignore
            this[name] = resolvedStore
          }
        })
      },
    }
  }
}
