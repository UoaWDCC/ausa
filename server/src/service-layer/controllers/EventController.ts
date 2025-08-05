import { EventService } from 'data-layer/services/EventService'
import { StatusCodes } from 'http-status-codes'
import type {
  createEventRequest,
  updateEventRequest,
} from 'service-layer/request-models/EventRequests'
import type {
  GetAllEventsResponse,
  GetEventResponse,
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
  Security,
  SuccessResponse,
} from 'tsoa'

@Route('events')
export class EventController extends Controller {
  @Get()
  public async getAllEvents(): Promise<GetAllEventsResponse> {
    try {
      const events = await EventService.getAllEvents()
      return { data: events }
    } catch (error) {
      console.error('Error retrieving events:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to retrieve events' }
    }
  }

  @Get('{id}')
  public async getEventById(@Path() id: string): Promise<GetEventResponse> {
    try {
      const event = await EventService.getEventById(id)
      return { data: event }
    } catch (error) {
      console.error('Error retrieving event:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to retrieve event' }
    }
  }
}
