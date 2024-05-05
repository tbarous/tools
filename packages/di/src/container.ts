import { action, observable } from 'mobx'

export class Container {
  id: symbol = Symbol()
  @observable accessor stores: Map<string, any> = new Map()

  @action
  register(store: any, props?: any) {
    this.stores.set(store.name, new store({ container: this, ...props }))
  }

  resolve(store: any) {
    const resolved = this.stores.get(store.name)
    console.log({ resolved }, store.name, this.stores)
    if (!resolved) return

    return this.stores.get(store.name)
  }
}
