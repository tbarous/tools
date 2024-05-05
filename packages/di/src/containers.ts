import { Container } from './container'
import { action, observable } from 'mobx'

export class Containers {
  @observable accessor containers: Container[] = []

  @action
  register(stores: any[]) {
    const container = new Container()
    for (const store of stores) {
      container.register(store)
    }
    this.containers.push(container)
    return container.id
  }

  resolve(id: symbol) {
    return this.containers.find((container) => container.id === id)
  }
}

export const containers = new Containers()
