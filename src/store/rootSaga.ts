import { all } from "redux-saga/effects";
import { eventsWatcher } from "./eventList/sagas";

export function* rootWatcher() {
  yield all([eventsWatcher()]);
}
