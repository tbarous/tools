import { root } from './root'
import { IStoreClassOrDetailedStoreOrString } from './types'

export function useGlobalInjection(store: IStoreClassOrDetailedStoreOrString) {
  return root.globalContainer.resolveStore(store)
}
