import { ClassDecorator } from './types'

export const logged: ClassDecorator = (value, { kind, name }) => {
  if (kind === 'class') {
    return class extends value {
      constructor(...args: any[]) {
        // @ts-ignore
        super(...args)
        console.log(
          `constructing an instance of ${name} with arguments ${args.join(', ')}`
        )
      }
    }
  }
}
