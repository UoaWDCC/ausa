import type { Event, UpdateEventPackage } from 'models/Event'
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
import {
  type EventCreationParams,
  EventRepository,
} from '../../data-access/event/EventRepository'
import FirestoreCollections from 'data-access/adapters/FirestoreCollections'

@Route('events')
export class EventController extends Controller {
  @SuccessResponse('200', 'Found')
  @Get('by-name')
  public async getEventByName(@Query() title: string): Promise<Event | null> {
    return new EventRepository().getEventByTitle(title)
  }

  @SuccessResponse('200', 'Found')
  @Get('{eventId}')
  public async getEventById(@Path() eventId: string): Promise<Event | null> {
    return new EventRepository().getEvent(eventId)
  }

  @SuccessResponse('200', 'Found')
  @Get()
  public async getEvents(): Promise<Event[]> {
    return new EventRepository().getAllEvents()
  }

  @SuccessResponse('201', 'Created')
  @Post()
  public async createEvent(
    @Body() requestBody: Omit<EventCreationParams, 'id'>,
  ): Promise<Event> {
    this.setStatus(201)
    const docRef = FirestoreCollections.events.doc()

    return new EventRepository().createEvent({
      id: docRef.id,
      ...requestBody,
    })
  }

  @SuccessResponse('200', 'Deleted')
  @Delete('by-eventId')
  public async deleteEvent(@Query() eventId: string): Promise<Event | null> {
    return new EventRepository().deleteEvent(eventId)
  }

  @SuccessResponse('200', 'Updated')
  @Patch('{eventId}')
  public async updateEvent(
    @Path() eventId: string,
    @Body() updates: UpdateEventPackage,
  ): Promise<Event | null> {
    return new EventRepository().updateEvent(eventId, updates)
  }
}
