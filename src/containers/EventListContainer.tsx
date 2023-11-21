import React, { useEffect } from "react";
import EventList from "components/EventList";
import { selectEvent, setEventsAsync } from "store/eventList/actions";
import { useAppDispatch, useAppSelector } from "hooks/useReduxHooks";
import Loader from "components/common/Loader";

const EventListContainer = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector((state) => state.eventList.events);
  const isLoading = useAppSelector((state) => state.eventList.isLoading);

  useEffect(() => {
    dispatch(setEventsAsync());
  }, []);

  const handleEventClick = (timestamp: number) => {
    dispatch(selectEvent({ value: timestamp }));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <EventList events={events} onEventClick={handleEventClick} />
      )}
    </>
  );
};

export default EventListContainer;
