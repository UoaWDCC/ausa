import { StatusCodes } from 'http-status-codes'
import type { SelfRequestModel } from 'service-layer/request-models/UserRequest'
import { Controller, Get, Request, Route, SuccessResponse } from 'tsoa'
import { UserService } from '../../data-layer/services/UserDataService'

/* This controller still need auth to be integrated to use */
@Route('users')
export class UserController extends Controller {
  @SuccessResponse('200', 'Found')
  @Get('self')
  public async getSelf(@Request() request: SelfRequestModel) {
    const data = await new UserService().getUser(request.user.uid)
    if (data !== undefined) {
      this.setStatus(StatusCodes.OK)
    } else {
      this.setStatus(StatusCodes.NOT_FOUND)
    }
    return data
  }
}
