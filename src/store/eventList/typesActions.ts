import { Event } from "types";
import { ITimestampEvent } from "./reducers";

export const enum EventListActionType {
  SET_EVENTS = "SET_EVENTS",
  SET_EVENTS_ASYNC = "SET_EVENTS_ASYNC",
  SELECT_EVENT = "SELECT_EVENT",
  SET_LOADING = "SET_LOADING",
}

export interface SetEventsAction {
  type: EventListActionType.SET_EVENTS;
  payload: Event[];
}

export interface SetEventsAsyncAction {
  type: EventListActionType.SET_EVENTS_ASYNC;
}

export interface SelectEventAction {
  type: EventListActionType.SELECT_EVENT;
  payload: ITimestampEvent;
}

export interface SetLoadingAction {
  type: EventListActionType.SET_LOADING;
  payload: boolean;
}

export type EventListAction =
  | SetEventsAction
  | SetEventsAsyncAction
  | SelectEventAction
  | SetLoadingAction;
