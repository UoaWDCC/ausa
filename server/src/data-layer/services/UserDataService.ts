import { User } from 'data-layer/models/user'
import { UserCreationParams } from 'service-layer/request-models/UserRequest'

export default class UserDataService {
  public get(id: number, name?: string): User {
    return {
      id,
      email: 'jane@doe.com',
      name: name ?? 'Jane Doe',
      status: 'Happy',
      phoneNumbers: [],
    }
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: 'Happy',
      ...userCreationParams,
    }
  }
}
