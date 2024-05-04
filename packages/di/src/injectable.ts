import { ClassDecorator } from './types'

export const injectable: any = (value: any, { kind, name }: any) => {
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
