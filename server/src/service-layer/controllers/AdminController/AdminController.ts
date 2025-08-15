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
  UserService,
} from '../../../data-layer/services/UserService'

@Route('admin')
export class AdminController extends Controller {
  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async adminCreateUser(
    @Body() id: string,
    @Body() requestBody: User,
  ): Promise<User> {
    this.setStatus(201)
    return new UserService().createUser(id, requestBody);
  }

  @SuccessResponse('200', 'Deleted')
  @Delete('by-userId')
  public async deleteUser(
    @Query() userToDeleteId: string,
  ): Promise<User | null> {
    const deletedUser = await new UserService().adminDeleteUser(
      userToDeleteId
    )
    if (!deletedUser) {
      this.setStatus(400) // Bad Request if user not found or not deleted
      return null
    }
    return deletedUser
  }
}
