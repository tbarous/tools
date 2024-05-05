import { action, autorun, observable } from 'mobx'
import {
  IStoreClassOrDetailedStoreOrString,
  IStoresMap,
  IStoresToBeInjected,
} from './types'
import { getDetailedStore } from './utils'

export class Container {
  @observable accessor id: symbol = Symbol()
  @observable accessor stores: IStoresMap = new Map()
  @observable accessor props: any

  @action
  registerStores(stores: IStoresToBeInjected, props: any) {
    for (const store of stores) {
      const { name, store: Store } = getDetailedStore(store)

      if (this.stores.has(name) || !Store) return

      const instance = new Store({
        container: this,
        ...props,
      })

      this.stores.set(name, instance)
    }
  }

  public resolveStore(store: IStoreClassOrDetailedStoreOrString) {
    const { name } = getDetailedStore(store)

    if (!this.stores.has(name)) return

    return this.stores.get(name)
  }
}
