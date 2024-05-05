import { action, observable } from 'mobx'

// @injectable
export class UserStore {
  @observable accessor name: string = ''

  constructor() {}

  @action
  setName(name: string) {
    this.name = name
  }
}
