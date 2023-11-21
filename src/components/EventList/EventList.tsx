import React, { useMemo } from "react";
import { Event } from "types";
import { formatTimestamp } from "utils/formatTimestamp";
import cl from "./EventList.module.css";

interface EventsListProps {
  events: Event[];
  onEventClick: (timestamp: number) => void;
}

const EventList = ({ events, onEventClick }: EventsListProps) => {
  const sortedEvents = useMemo(
    () => events.slice().sort((a, b) => a.timestamp - b.timestamp),
    [events]
  );

  return (
    <>
      {sortedEvents.length > 0 ? (
        <div className={cl.eventListContainer}>
          <ul className={cl.eventList}>
            {sortedEvents.map(({ timestamp }) => (
              <li
                key={(timestamp + Math.random()).toString()}
                onClick={() => onEventClick(timestamp)}
                className={cl.eventListItem}
              >
                <span>{formatTimestamp(timestamp)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No events available</p>
      )}
    </>
  );
};

export default EventList;
