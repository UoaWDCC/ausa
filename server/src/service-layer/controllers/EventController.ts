import type { Event, UpdateEventPackage } from 'data-layer/models/Event'
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
  EventService,
} from '../../data-layer/services/EventService'

@Route('events')
export class EventController extends Controller {
  @SuccessResponse('200', 'Found')
  @Get('by-name')
  public async getEventByName(@Query() name: string): Promise<Event | null> {
    return new EventService().getEventByName(name)
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
    @Body() requestBody: EventCreationParams,
  ): Promise<Event> {
    this.setStatus(201)
    return new EventService().createEvent(requestBody)
  }

  @SuccessResponse('200', 'Deleted')
  @Delete('by-eventId')
  public async deleteEvent(@Query() eventId: string): Promise<Event | null> {
    return new EventService().deleteEvent(eventId)
  }

  @SuccessResponse('200', 'Updated')
  @Patch('{eventId}')
  public async updateEvent(
    @Path() eventId: string,
    @Body() updates: UpdateEventPackage,
  ): Promise<Event | null> {
    return new EventService().updateEvent(eventId, updates)
  }
}
