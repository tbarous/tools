import { IDecoratorContext, IStoreClass } from './types'
import { Container } from './container'

export const injectable = (
  value: IStoreClass,
  { kind, name: n }: IDecoratorContext
) => {
  if (kind !== 'class') return

  const store = class extends value {
    constructor(args: { container: Container; props: any }) {
      super(args)

      this.container = args.container
    }
  }

  Object.defineProperty(store, 'name', { value: n, writable: true })

  return store
}
