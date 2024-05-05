import { Container } from './container'

export class Containers {
  containers: Container[] = []

  register(container: Container) {
    this.containers.push(container)
  }

  resolve(id: symbol) {
    return this.containers.find((container) => container.id === id)
  }
}

export const containers = new Containers()
