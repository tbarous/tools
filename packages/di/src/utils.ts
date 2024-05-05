import { IDetailedStore, IStoreClassOrDetailedStoreOrString } from './types'

export const isDetailedStore = (store: any): store is IDetailedStore =>
  'store' in store && 'name' in store

export const getDetailedStore = (
  store: IStoreClassOrDetailedStoreOrString
): IDetailedStore => {
  if (typeof store === 'string') {
    return { name: store }
  }

  if (!isDetailedStore(store)) {
    return { store, name: store.name }
  }

  return store
}
