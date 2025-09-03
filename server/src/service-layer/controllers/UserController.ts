import type { User } from 'data-layer/models/User'
import { Controller, Get, Query, Route, SuccessResponse } from 'tsoa'
import { UserService } from '../../data-layer/services/UserService'

@Route('users')
export class UserController extends Controller {
  @SuccessResponse('200', 'Found')
  @Get('by-username')
  public async getUserByUsername(
    @Query() username: string,
  ): Promise<User | null> {
    return new UserService().getUserByUsername(username)
  }
}
