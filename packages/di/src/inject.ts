import { ClassAutoAccessorDecorator } from './types'
import { autorun, runInAction } from 'mobx'

export const inject: (store: any) => ClassAutoAccessorDecorator = (
  store: any
) => {
  return function (value, { kind, name }) {
    return {
      init() {
        console.log({ name })
        autorun(() => {
          // @ts-ignore
          const resolvedStore = this.container?.resolve?.(store)
          if (resolvedStore) {
            runInAction(() => {
              // @ts-ignore
              this[name] = resolvedStore
            })
          }
        })
      },
    }
  }
}
