import { ClassAutoAccessorDecorator } from './types'

export const inject: (store: any) => ClassAutoAccessorDecorator = (
  store: any
) => {
  return function (value, { kind, name }) {
    if (kind === 'accessor') {
      return {
        init() {
          // @ts-ignore
          const resolvedStore = this.container.resolve(store)
          console.log({ resolvedStore })
          return resolvedStore
        },
      }
    }
  }
}
