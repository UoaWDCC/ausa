import type { Event, UpdateEventPackage } from "../../data-layer/models/Event";
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
} from "tsoa";
import {
  type EventCreationParams,
  EventService,
} from "../../data-layer/services/EventService";
import FirestoreCollections from "../../data-layer/adapters/FirestoreCollections";
import { UserService } from "../../data-layer/services/UserDataService";
import { StatusCodes } from "http-status-codes";

@Route("events")
export class EventController extends Controller {
  @SuccessResponse("200", "Found")
  @Get("by-name")
  public async getEventByName(@Query() title: string): Promise<Event | null> {
    return new EventService().getEventByTitle(title);
  }

  @SuccessResponse("200", "User Registered")
  @Post("{eventId}/register/{userId}")
  public async registerEventToUser(
    @Path() eventId: string,
    @Path() userId: string,
  ): Promise<{ userId: string; eventId: string }> {
    if (!userId) {
      this.setStatus(StatusCodes.UNAUTHORIZED);
      return { userId: "", eventId };
    }

    const userUpdated = await new UserService().registerEventToUser(
      userId,
      eventId
    );
    const eventUpdated = await new EventService().registerUserToEvent(
      userId,
      eventId
    );

    if (!userUpdated || !eventUpdated) {
      this.setStatus(StatusCodes.NOT_FOUND);
      return { userId, eventId };
    }

    this.setStatus(StatusCodes.OK);
    return { userId, eventId };
  }

  @SuccessResponse("200", "User Unregistered")
  @Post("{eventId}/unregister/{userId}")
  public async unregisterEventFromUser(
    @Path() eventId: string,
    @Path() userId: string,
  ): Promise<{ userId: string; eventId: string }> {
    if (!userId) {
      this.setStatus(StatusCodes.UNAUTHORIZED);
      return { userId: "", eventId };
    }

    const userUpdated = await new UserService().unregisterEventFromUser(
      userId,
      eventId
    );
    const eventUpdated = await new EventService().unregisterUserFromEvent(
      userId,
      eventId
    );

    if (!userUpdated || !eventUpdated) {
      this.setStatus(StatusCodes.NOT_FOUND);
      return { userId, eventId };
    }

    this.setStatus(StatusCodes.OK);
    return { userId, eventId };
  }



  @SuccessResponse("200", "Found")
  @Get("{eventId}")
  public async getEventById(@Path() eventId: string): Promise<Event | null> {
    return new EventService().getEvent(eventId);
  }

  @SuccessResponse("200", "Found")
  @Get()
  public async getEvents(): Promise<Event[]> {
    return new EventService().getAllEvents();
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createEvent(
    @Body() requestBody: Omit<EventCreationParams, "id">
  ): Promise<Event> {
    this.setStatus(201);
    const docRef = FirestoreCollections.events.doc();

    return new EventService().createEvent({
      id: docRef.id,
      ...requestBody,
    });
  }

  @SuccessResponse("200", "Deleted")
  @Delete("by-eventId")
  public async deleteEvent(@Query() eventId: string): Promise<Event | null> {
    return new EventService().deleteEvent(eventId);
  }

  @SuccessResponse("200", "Updated")
  @Patch("{eventId}")
  public async updateEvent(
    @Path() eventId: string,
    @Body() updates: UpdateEventPackage
  ): Promise<Event | null> {
    return new EventService().updateEvent(eventId, updates);
  }
}
