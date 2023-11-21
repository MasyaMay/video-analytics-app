import { Event } from "types";
import {
  EventListActionType,
  SelectEventAction,
  SetEventsAction,
  SetEventsAsyncAction,
  SetLoadingAction,
} from "./typesActions";
import { ITimestampEvent } from "./reducers";

export const setEvents = (events: Event[]): SetEventsAction => ({
  type: EventListActionType.SET_EVENTS,
  payload: events,
});

export const setEventsAsync = (): SetEventsAsyncAction => ({
  type: EventListActionType.SET_EVENTS_ASYNC,
});

export const selectEvent = (timestamp: ITimestampEvent): SelectEventAction => ({
  type: EventListActionType.SELECT_EVENT,
  payload: timestamp,
});

export const setLoading = (isLoading: boolean): SetLoadingAction => ({
  type: EventListActionType.SET_LOADING,
  payload: isLoading,
});
