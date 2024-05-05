import { action, observable } from 'mobx'
import { inject, injectable } from '@tbarous/di'
import { ProductsStore } from './products.store.ts'

@injectable
export class UsersStore {
  @observable accessor name: string = ''

  @inject(ProductsStore) accessor productsStore: ProductsStore

  @action
  setName(name: string) {
    this.name = name
    this.productsStore.setName('Products name')
  }
}
