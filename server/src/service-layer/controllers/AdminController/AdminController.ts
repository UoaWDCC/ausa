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
import {type EventCreationParams, EventService} from '../../../data-layer/services/EventService'
import {Event, UpdateEventPackage} from 'data-layer/models/Event'

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
      this.setStatus(400) 
      return null
    }
    if (requestingUser.role !== 'admin') {
      this.setStatus(403) 
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
      this.setStatus(400) 
      return null
    }
    return deletedUser
  }

  @SuccessResponse('201', 'Created') 
  @Post('create-event')
  public async adminCreateEvent(
    @Query() requestingUserId: string,
    @Body() requestBody: EventCreationParams,
  ): Promise<Event> {
    const requestingUser = await new UserService().getUser(requestingUserId)
    if (!requestingUser) {
      this.setStatus(400) 
      return null
    }
    if (requestingUser.role !== 'admin') {
      this.setStatus(403) 
      return null
    }
    this.setStatus(201)
    return new EventService().createEvent(requestBody)
  }
}
