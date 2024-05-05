import { Container } from './container'
import { action, observable } from 'mobx'
import { IStoresToBeInjected } from './types'

export class Root {
  @observable accessor containers: Container[] = []
  @observable accessor globalContainer: Container = new Container()

  @action
  createContainer(stores: IStoresToBeInjected, props: any) {
    const container = new Container()

    container.registerStores(stores, props)

    this.containers.push(container)

    return container
  }

  resolveContainer(id: symbol) {
    return this.containers.find((container) => container.id === id)
  }
}

export const root = new Root()
