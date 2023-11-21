import React from "react";
import VideoOverlay from "components/VideoOverlay";
import { useMemo } from "react";
import { useAppSelector } from "hooks/useReduxHooks";
import { Event, Zone } from "types";
import cl from "./VideoOverlayContainer.module.css";

const findZones = (timestamp: number, events: Event[]): Zone[] => {
  return events
    .filter(
      (e) => timestamp >= e.timestamp && timestamp <= e.timestamp + e.duration
    )
    .map((e) => e.zone);
};

const VideoOverlayContainer = () => {
  const timestamp = useAppSelector((state) => state.videoPlayer.timestamp);
  const eventsTimestamp = useAppSelector((state) => state.eventList.events);
  const resolution = useAppSelector((state) => state.videoPlayer.resolution);
  const size = useAppSelector((state) => state.videoPlayer.size);

  const zones = useMemo(() => {
    return findZones(timestamp, eventsTimestamp);
  }, [timestamp, eventsTimestamp]);

  return (
    <VideoOverlay
      className={cl.videoOverlayBlock}
      zones={zones}
      {...resolution}
      {...size}
    />
  );
};

export default VideoOverlayContainer;
