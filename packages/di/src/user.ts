import { injectable } from './injectable'

@injectable
export class User {
  constructor(protected name: string) {}
}
