import { action, observable } from 'mobx'

export class Container {
  id: symbol = Symbol()
  @observable accessor stores: Map<string, any> = new Map()

  @action
  register(store: any, props?: any) {
    if (this.stores.has(store.name)) return

    this.stores.set(store.name, new store({ container: this, ...props }))
  }

  public resolve(store: any) {
    const resolved = this.stores.get(store.name)

    if (!resolved) return

    return resolved
  }
}
