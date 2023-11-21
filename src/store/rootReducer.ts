import { combineReducers } from "redux";
import eventListReducer from "./eventList/reducers";
import videoPlayerReducer from "./videoPlayer/reducers";

export const rootReducer = combineReducers({
  eventList: eventListReducer,
  videoPlayer: videoPlayerReducer,
});
