import { ClassAutoAccessorDecorator } from './types'
import { autorun, runInAction } from 'mobx'

export const inject: (store: any) => ClassAutoAccessorDecorator = (
  store: any
) => {
  return function (value, { kind, name }) {
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
