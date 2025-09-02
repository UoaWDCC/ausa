// import type { User } from 'models/User'
// import {
//   Body,
//   Controller,
//   Delete,
//   Post,
//   Query,
//   Route,
//   SuccessResponse,
// } from 'tsoa'
// import {
//   type UserCreationParams,
//   UserRepository,
// } from '../../data-access/common/UserRepository'
// import { AdminService } from '../../services/admin/AdminService'
// import {
//   type EventCreationParams,
//   EventRepository,
// } from '../../data-access/event/EventRepository'
// import { Event } from 'models/Event'

// @Route('admin')
// export class AdminController extends Controller {
//   @SuccessResponse('201', 'Created') // Custom success response
//   @Post()
//   public async adminCreateUser(
//     @Body() requestBody: UserCreationParams,
//   ): Promise<User> {
//     this.setStatus(201)
//     return new UserRepository().createUser(requestBody)
//   }

//   @SuccessResponse('200', 'Deleted')
//   @Delete('by-userId')
//   public async deleteUser(
//     @Query() userToDeleteId: string,
//   ): Promise<User | null> {
//     const deletedUser = await new AdminService().adminDeleteUser(userToDeleteId)
//     if (!deletedUser) {
//       this.setStatus(400)
//       return null
//     }
//     return deletedUser
//   }

//   @SuccessResponse('201', 'Created')
//   @Post('create-event')
//   public async adminCreateEvent(
//     // @Query() requestingUserId: string,
//     @Body() requestBody: EventCreationParams,
//   ): Promise<Event> {
//     // const requestingUser = await new UserService().getUser(requestingUserId)
//     // if (!requestingUser) {
//     //   this.setStatus(400)
//     //   return null
//     // }
//     // if (requestingUser.role !== 'admin') {
//     //   this.setStatus(403)
//     //   return null
//     // }
//     this.setStatus(201)
//     return new EventRepository().createEvent(requestBody)
//   }

//   @SuccessResponse('200', 'Deleted')
//   @Delete('by-eventId')
//   public async adminDeleteEvent(
//     @Query() eventId: string,
//   ): Promise<Event | null> {
//     const deletedEvent = await new EventRepository().deleteEvent(eventId)
//     if (!deletedEvent) {
//       this.setStatus(400)
//       return null
//     }
//     return deletedEvent
//   }
// }
