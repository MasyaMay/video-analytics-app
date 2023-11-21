import { Event } from "types";
import { EventListAction, EventListActionType } from "./typesActions";

export interface ITimestampEvent {
  value: number;
}

interface IEventListState {
  events: Event[];
  selectedEventTimestamp: ITimestampEvent;
  isLoading: boolean;
}

const initialState: IEventListState = {
  events: [],
  selectedEventTimestamp: {
    value: 0,
  },
  isLoading: false,
};

const eventListReducer = (
  state = initialState,
  action: EventListAction
): IEventListState => {
  switch (action.type) {
    case EventListActionType.SET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case EventListActionType.SELECT_EVENT:
      return {
        ...state,
        selectedEventTimestamp: action.payload,
      };
    case EventListActionType.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default eventListReducer;
