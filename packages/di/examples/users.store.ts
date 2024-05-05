import { action, observable } from 'mobx'
import { ProductsStore } from './products.store'
import { Stores } from './stores.enums'
import { inject, injectable, injectGlobal } from '../src'

// @ts-ignore
@injectable
export class UsersStore {
  @observable accessor name: string = ''

  // @ts-ignore
  @inject(ProductsStore) accessor productsStore: ProductsStore

  // @ts-ignore
  @inject(Stores.MY_CUSTOM_PRODUCTS_STORE)
  // @ts-ignore
  accessor productsStore2: ProductsStore

  // @ts-ignore
  @injectGlobal(ProductsStore) accessor productsStore3: ProductsStore

  constructor(props: any) {
    this.name = props.name
  }

  @action
  setName(name: string) {
    this.name = name
    this.productsStore.setName('Products name')
    this.productsStore2.setName('Products name custom')
    this.productsStore3.setName('Products name global')
  }
}
