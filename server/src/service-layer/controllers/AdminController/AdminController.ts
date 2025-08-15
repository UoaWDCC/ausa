import type { User } from 'data-layer/models/User'
import {
  Body,
  Controller,
  Delete,
  Post,
  Query,
  Route,
  SuccessResponse,
} from 'tsoa'
import {
  type UserCreationParams,
  UserService,
} from '../../../data-layer/services/UserService'
import { AdminService } from '../../../data-layer/services/AdminService'

@Route('admin')
export class AdminController extends Controller {
  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async adminCreateUser(
    @Query() requestingUserId: string,
    @Body() requestBody: UserCreationParams,
  ): Promise<User> {
    const requestingUser = await new UserService().getUser(requestingUserId)
    if (!requestingUser) {
      this.setStatus(400) // Bad Request if requesting user not found
      return null
    }
    if (requestingUser.role !== 'admin') {
      this.setStatus(403) // Forbidden if requesting user is not an admin
      return null
    }
    this.setStatus(201)
    return new UserService().createUser(requestBody)
  }

  @SuccessResponse('200', 'Deleted')
  @Delete('by-userId')
  public async deleteUser(
    @Query() requestingUserId: string,
    @Query() userToDeleteId: string,
  ): Promise<User | null> {
    const deletedUser = await new AdminService().adminDeleteUser(
      requestingUserId,
      userToDeleteId,
    )
    if (!deletedUser) {
      this.setStatus(400) // Bad Request if user not found or not deleted
      return null
    }
    return deletedUser
  }
}
