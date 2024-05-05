import { action, observable } from 'mobx'
import { injectable } from '@tbarous/di'

@injectable
export class ProductsStore {
  @observable accessor name: string = ''

  constructor() {}

  @action
  setName(name: string) {
    this.name = name
  }
}
