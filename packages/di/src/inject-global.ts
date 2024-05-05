import { autorun } from 'mobx'
import { root } from './root'

export const injectGlobal: any = (store: any, storeName?: string) => {
  return function (value: any, { kind, name }: any) {
    return {
      init() {
        autorun(() => {
          if (!root?.globalContainer?.resolveStore) return

          // @ts-ignore
          this[name] = root.globalContainer.resolveStore(storeName || store)
        })
      },
    }
  }
}
