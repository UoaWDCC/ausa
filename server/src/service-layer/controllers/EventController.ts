import { StatusCodes } from 'http-status-codes'
import type {
  CreateEventRequest,
  RegisterEventRequest,
  UnregisterEventRequest,
} from 'service-layer/request-models/EventRequests'
import type {
  RegisterEventResponse,
  UnregisterEventResponse,
} from 'service-layer/response-models/EventResponses'
import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from 'tsoa'
import FirestoreCollections from '../../data-layer/adapters/FirestoreCollections'
import type { Event, UpdateEventPackage } from '../../data-layer/models/Event'
import { EventService } from '../../data-layer/services/EventService'
import { UserService } from '../../data-layer/services/UserDataService'

@Route('events')
export class EventController extends Controller {
  @SuccessResponse('200', 'Found')
  @Get('by-name')
  public async getEventByName(@Query() title: string): Promise<Event | null> {
    return new EventService().getEventByTitle(title)
  }

  @SuccessResponse('200', 'User Registered')
  @Post('register')
  public async registerEventToUser(
    @Body() body: RegisterEventRequest,
  ): Promise<RegisterEventResponse> {
    const { userId, eventId } = body
    if (!userId) {
      this.setStatus(StatusCodes.UNAUTHORIZED)
      return { error: 'Unauthorized', data: undefined }
    }

    const userUpdated = await new UserService().registerEventToUser(
      userId,
      eventId,
    )
    const eventUpdated = await new EventService().registerUserToEvent(
      userId,
      eventId,
    )

    if (!userUpdated || !eventUpdated) {
      this.setStatus(StatusCodes.NOT_FOUND)
      return { error: 'Not Found', data: eventUpdated }
    }

    this.setStatus(StatusCodes.OK)
    return { data: eventUpdated }
  }

  @SuccessResponse('200', 'User Unregistered')
  @Post('unregister')
  public async unregisterEventFromUser(
    @Body() body: UnregisterEventRequest,
  ): Promise<UnregisterEventResponse> {
    const { userId, eventId } = body
    if (!userId) {
      this.setStatus(StatusCodes.UNAUTHORIZED)
      return { error: 'Unauthorized', data: undefined }
    }

    const userUpdated = await new UserService().unregisterEventFromUser(
      userId,
      eventId,
    )
    const eventUpdated = await new EventService().unregisterUserFromEvent(
      userId,
      eventId,
    )

    if (!userUpdated || !eventUpdated) {
      this.setStatus(StatusCodes.NOT_FOUND)
      return { error: 'Not Found', data: eventUpdated }
    }

    this.setStatus(StatusCodes.OK)
    return { data: eventUpdated }
  }

  @SuccessResponse('200', 'Found')
  @Get('{eventId}')
  public async getEventById(@Path() eventId: string): Promise<Event | null> {
    return new EventService().getEvent(eventId)
  }

  @SuccessResponse('200', 'Found')
  @Get()
  public async getEvents(): Promise<Event[]> {
    return new EventService().getAllEvents()
  }

  @SuccessResponse('201', 'Created')
  @Post()
  public async createEvent(
    @Body() requestBody: CreateEventRequest,
  ): Promise<Event> {
    this.setStatus(201)
    const docRef = FirestoreCollections.events.doc()

    return new EventService().createEvent({
      id: docRef.id,
      ...requestBody,
    })
  }

  @SuccessResponse('200', 'Deleted')
  @Delete('by-eventId')
  public async deleteEvent(@Query() eventId: string): Promise<Event | null> {
    return new EventService().deleteEvent(eventId)
  }

  @SuccessResponse('200', 'Updated')
  @Patch()
  public async updateEvent(
    @Body() body: UpdateEventPackage,
  ): Promise<Event | null> {
    return new EventService().updateEvent(body.id, body)
  }
}
