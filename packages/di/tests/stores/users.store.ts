import { action, observable } from 'mobx'
import { ProductsStore } from './products.store'
import { Stores } from '../enums/stores.enums'
import { injectable, inject, injectGlobal } from '../../src'
import { IStore } from '../../src/types'

@injectable
export class UsersStore implements IStore {
  @observable accessor name: string = ''

  @inject(ProductsStore) accessor productsStore: ProductsStore

  @inject(Stores.MY_CUSTOM_PRODUCTS_STORE)
  accessor productsStore2: ProductsStore

  @injectGlobal(ProductsStore)
  accessor productsStore3: ProductsStore

  constructor({ name }: { name: string }) {
    this.name = name
  }

  @action
  setName(name: string) {
    this.name = name
    this.productsStore.setName('Products name')
    this.productsStore2.setName('Products name custom')
    this.productsStore3.setName('Products name global')
  }
}
