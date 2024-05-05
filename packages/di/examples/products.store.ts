import { action, observable } from 'mobx'
import { injectable } from '../src'

// @ts-ignore
@injectable
export class ProductsStore {
  @observable accessor name: string = ''

  @action
  setName(name: string) {
    this.name = name
  }
}
