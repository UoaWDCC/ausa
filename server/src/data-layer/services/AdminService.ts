import type { User } from 'data-layer/models/User'
import { UserService } from './UserService' // 假设你的 UserService 在这里
import {UserCreationParams} from 'data-layer/services/UserService' 
import {EventService} from 'data-layer/services/EventService'
import type { Event } from 'data-layer/models/Event'


export class AdminService {

  /**
   *
   * @param UserCreationParams - get user creation parameters
   * @returns the new user
   */
  async adminCreateUser(
    userId: string,
    username: string,
    email: string,
    name: string,
    // role: 'admin' | 'user',
  ): Promise<User | null> {
    const userService = new UserService()
    const params: UserCreationParams = {
      id: userId,
      username: username,
      email: email,
      name: name,
      role: 'user',
    }
    const newUser = await userService.createUser(params)
    if (!newUser) {
      console.log('user failed on creation')
      return null
    }
    return newUser
  }

  async adminDeleteUser(
    userToDeleteId: string,
  ): Promise<User | null> {
    const userService = new UserService()
    // checking if user to delete exists and deleting it if it does by calling deleteUser
    const userToDelete = await userService.deleteUser(userToDeleteId)
    if (!userToDelete) {
      console.log(`User - ${userToDeleteId} not found for deletion`)
      return null
    }

    console.log(
      `User - ${userToDeleteId} deleted by admin`,
    )
    return userToDelete
  }

  async adminAddEvent(
    // requestingUserId: string,
    eventId: string,
    eventTitle: string, 
    eventDescription: string,
    eventDate: string,  
    eventLink: string,
  ): Promise<Event | null> {
    const eventService = new EventService()
    // const userService = new UserService()
    // const requestingUser = await userService.getUser(requestingUserId)
    // if (!requestingUser || requestingUser.role !== 'admin') {
    //   console.log(`Requesting user - ${requestingUserId} not found`)
    //   return null
    // }
    const EventCreationParams = {
      id: eventId,
      title: eventTitle,
      description: eventDescription,
      date: eventDate,
      link: eventLink,
    }
    const newEvent = await eventService.createEvent(EventCreationParams)
    if (!newEvent) {
      console.log('Event failed on creation')
      return null
    }
    return newEvent
  }

  async AdminDeleteEvent(
    eventId: string,
  ): Promise<Event | null>{
    const eventService = new EventService()
    const eventToDelete = await eventService.deleteEvent(eventId)
    if (!eventToDelete) {
      console.log(`Event - ${eventId} not found for deletion`)
      return null
    }
    console.log(`Event - ${eventId} deleted by admin`)
    return eventToDelete
  }
  

}
