import { put, takeEvery, call } from "redux-saga/effects";
import { setEvents, setLoading } from "./actions";
import { Event } from "types";
import { EVENTS_API_URL } from "config/apiUrls";
import { EventListActionType } from "./typesActions";

function* fetchEventsWorker() {
  try {
    yield put(setLoading(true));
    const response: Response = yield call(fetch, EVENTS_API_URL);
    const data: Event[] = yield call(() => response.json());
    data.forEach((i) => (i.zone.id = Math.random()));
    yield put(setEvents(data));
  } catch (error) {
    console.error("Error fetching events:", error);
  } finally {
    yield put(setLoading(false));
  }
}

export function* eventsWatcher() {
  yield takeEvery(EventListActionType.SET_EVENTS_ASYNC, fetchEventsWorker);
}
