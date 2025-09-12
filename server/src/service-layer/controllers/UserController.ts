import { StatusCodes } from 'http-status-codes'
import type {
  CreateUserRequestBody,
  SelfRequestModel,
} from 'service-layer/request-models/UserRequest'
import type { GetUserResponse } from 'service-layer/response-models/UserResponse'
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Request,
  Route,
  SuccessResponse,
} from 'tsoa'
import { UserService } from '../../data-layer/services/UserDataService'

/* This controller still need auth to be integrated to use */
@Route('users')
export class UserController extends Controller {
  @SuccessResponse('200', 'Found')
  @Get('self')
  public async getSelf(
    @Request() request: SelfRequestModel,
  ): Promise<GetUserResponse> {
    const data = await new UserService().getUser(request.user.uid)
    if (data !== undefined) {
      this.setStatus(StatusCodes.OK)
    } else {
      this.setStatus(StatusCodes.NOT_FOUND)
    }
    return { data }
  }

  @SuccessResponse(StatusCodes.CREATED, 'Created')
  @Post()
  public async createUser(
    @Body() newUser: CreateUserRequestBody,
  ): Promise<GetUserResponse> {
    try {
      await new UserService().createUserData(newUser)
      this.setStatus(StatusCodes.CREATED)
      return { data: newUser }
    } catch {
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Could not create user' }
    }
  }

  @SuccessResponse(StatusCodes.OK, 'Updated')
  @Put('self')
  public async updateSelf(
    @Request() request: SelfRequestModel,
    @Body() updatedUser: CreateUserRequestBody,
  ): Promise<GetUserResponse> {
    try {
      await new UserService().updateUserData(request.user.uid, updatedUser)
      this.setStatus(StatusCodes.OK)
      return { data: updatedUser }
    } catch {
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Could not update user' }
    }
  }
}
