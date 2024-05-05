import { action, observable } from 'mobx'
import { inject, injectable } from '@tbarous/di'
import { ProductsStore } from './products.store.ts'

@injectable
export class UsersStore {
  @observable accessor name: string = ''

  // @ts-ignore
  @inject(ProductsStore) productsStore: ProductsStore

  constructor() {}

  @action
  setName(name: string) {
    this.name = name
    console.log(this.container)
    // this.productsStore.setName('Products name')
  }
}
