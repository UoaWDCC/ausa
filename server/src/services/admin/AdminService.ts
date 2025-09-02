import type { User } from 'models/User'
import { UserRepository } from '../../data-access/common/UserRepository' // 假设你的 UserService 在这里
import { UserCreationParams } from 'data-access/common/UserRepository'
import { EventRepository } from 'data-access/event/EventRepository'
import type { Event } from 'models/Event'

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
    const userService = new UserRepository()
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

  async adminDeleteUser(userToDeleteId: string): Promise<User | null> {
    const userService = new UserRepository()
    // checking if user to delete exists and deleting it if it does by calling deleteUser
    const userToDelete = await userService.deleteUser(userToDeleteId)
    if (!userToDelete) {
      console.log(`User - ${userToDeleteId} not found for deletion`)
      return null
    }

    console.log(`User - ${userToDeleteId} deleted by admin`)
    return userToDelete
  }

  async adminAddEvent(
    eventId: string,
    eventTitle: string,
    eventDate: string,
    eventBody: string,
    eventSubtitle?: string,
    callToActionText?: string,
    callToActionHref?: string,
    heroImageSrc?: string,
    heroImageAlt?: string,
  ): Promise<Event | null> {
    const eventService = new EventRepository()
    // const userService = new UserService()
    // const requestingUser = await userService.getUser(requestingUserId)
    // if (!requestingUser || requestingUser.role !== 'admin') {
    //   console.log(`Requesting user - ${requestingUserId} not found`)
    //   return null
    // }
    const EventCreationParams = {
      id: eventId,
      title: eventTitle,
      content: {
        body: eventBody,
        subtitle: eventSubtitle,
        callToAction:
          callToActionText && callToActionHref
            ? {
                text: callToActionText,
                href: callToActionHref,
              }
            : undefined,
      },
      heroImage: heroImageSrc
        ? {
            src: heroImageSrc,
            alt: heroImageAlt || eventTitle,
          }
        : undefined,
    }
    const newEvent = await eventService.createEvent(EventCreationParams)
    if (!newEvent) {
      console.log('Event failed on creation')
      return null
    }
    return newEvent
  }

  async AdminDeleteEvent(eventId: string): Promise<Event | null> {
    const eventService = new EventRepository()
    const eventToDelete = await eventService.deleteEvent(eventId)
    if (!eventToDelete) {
      console.log(`Event - ${eventId} not found for deletion`)
      return null
    }
    console.log(`Event - ${eventId} deleted by admin`)
    return eventToDelete
  }
}
