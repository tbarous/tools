export class Container {
  id: symbol = Symbol()
  stores: Map<string, any> = new Map()

  register(store: any, props?: any) {
    this.stores.set(store.name, new store({ container: this, ...props }))
  }

  resolve(store: any) {
    return this.stores.get(store.name)
  }
}
