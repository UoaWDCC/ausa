import type { Event } from '../../data-layer/models/Event'
import type { EventService } from '../../data-layer/services/EventService'

export default class EventLogicService {
  private readonly eventService: EventService

  /**
   * Splits events into past, ongoing, and upcoming categories based on current time.
   * @returns An object containing arrays of pastEvents, ongoingEvents, and upcomingEvents.
   * - pastEvents: Events that have ended before the current time.
   * - ongoingEvents: Events that are currently happening (current time is between startTime and endTime).
   * - upcomingEvents: Events that will start in the future (startTime is after the current time).
   */
  public async getEventsSplit(): Promise<{
    pastEvents: Event[]
    ongoingEvents: Event[]
    upcomingEvents: Event[]
  }> {
    const events: Event[] = await this.eventService.getAllEvents()
    const now = Date.now()

    const pastEvents = events.filter((e) => e.endTime && e.endTime < now)
    const ongoingEvents = events.filter(
      (e) => e.startTime && e.endTime && e.startTime <= now && e.endTime >= now,
    )
    const upcomingEvents = events.filter(
      (e) => e.startTime && e.startTime > now,
    )

    return {
      pastEvents,
      ongoingEvents,
      upcomingEvents,
    }
  }
}
