import type { User } from 'data-layer/models/User'
import type { SelfRequestModel } from 'service-layer/request-models/UserRequest'
import { Controller, Get, Request, Route, SuccessResponse } from 'tsoa'
import { UserService } from '../../data-layer/services/UserDataService'

@Route('users')
export class UserController extends Controller {
  @SuccessResponse('200', 'Found')
  @Get('self')
  public async getSelf(
    @Request() request: SelfRequestModel,
  ): Promise<User | null> {
    return new UserService().getUser(request.uid)
  }
}
