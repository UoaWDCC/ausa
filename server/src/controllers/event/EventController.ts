import FirestoreCollections from 'data-access/adapters/FirestoreCollections'
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
  Security,
  SuccessResponse,
} from 'tsoa'
import {
  type EventCreationParams,
  EventRepository,
} from '../../data-access/event/EventRepository'

@Route('events')
export class EventController extends Controller {
  private eventRepository = new EventRepository()

  @SuccessResponse('200', 'Found')
  @Get('by-name')
  public async getEventByName(@Query() title: string): Promise<Event | null> {
    return this.eventRepository.getEventByTitle(title)
  }

  @Security('jwt', ['admin'])
  @SuccessResponse('200', 'Found')
  @Get('{eventId}')
  public async getEventById(@Path() eventId: string): Promise<Event | null> {
    return this.eventRepository.getEvent(eventId)
  }

  @Security('jwt', ['admin'])
  @SuccessResponse('200', 'Found')
  @Get()
  public async getEvents(): Promise<Event[]> {
    return this.eventRepository.getAllEvents()
  }

  @Security('jwt', ['admin'])
  @SuccessResponse('201', 'Created')
  @Post()
  public async createEvent(
    @Body() requestBody: Omit<EventCreationParams, 'id'>,
  ): Promise<Event> {
    this.setStatus(201)
    const docRef = FirestoreCollections.events.doc()

    return this.eventRepository.createEvent({
      id: docRef.id,
      ...requestBody,
    })
  }

  @Security('jwt', ['admin'])
  @SuccessResponse('200', 'Deleted')
  @Delete('by-eventId')
  public async deleteEvent(@Query() eventId: string): Promise<Event | null> {
    return this.eventRepository.deleteEvent(eventId)
  }

  @Security('jwt', ['admin'])
  @SuccessResponse('200', 'Updated')
  @Patch('{eventId}')
  public async updateEvent(
    @Path() eventId: string,
    @Body() updates: UpdateEventPackage,
  ): Promise<Event | null> {
    return this.eventRepository.updateEvent(eventId, updates)
  }
}
