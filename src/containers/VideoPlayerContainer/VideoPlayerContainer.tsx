import React, { useEffect, useRef } from "react";
import VideoPlayer from "components/VideoPlayer";
import { useAppDispatch, useAppSelector } from "hooks/useReduxHooks";
import {
  setVideoResolution,
  setVideoSizeBlock,
  setVideoTimestamp,
} from "store/videoPlayer/actions";
import { Dispatch } from "redux";
import { VIDEO_API_URL } from "config/apiUrls";
import {
  SetVideoResolutionAction,
  SetVideoSizeBlockAction,
} from "store/videoPlayer/typesActions";
import VideoOverlayContainer from "../VideoOverlayContainer";
import cl from "./VideoPlayerContainer.module.css";

const VideoPlayerContainer = () => {
  const dispatch = useAppDispatch();
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const eventTimestamp = useAppSelector(
    (state) => state.eventList.selectedEventTimestamp
  );

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = eventTimestamp.value;
    }
  }, [eventTimestamp]);

  const onTimeUpdate = (
    event: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    dispatch(setVideoTimestamp(event.currentTarget.currentTime));
  };

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      const handleLoadedMetadata = () => loadMetadata(video, dispatch);
      const observer = createObserver(dispatch);

      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      observer.observe(video);

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        observer.unobserve(video);
      };
    }
  }, []);

  return (
    <div ref={videoContainerRef} className={cl.videoPlayer}>
      <VideoPlayer
        src={VIDEO_API_URL}
        onTimeUpdate={onTimeUpdate}
        videoRef={videoRef}
        videoContainerRef={videoContainerRef}
        className={cl.videoPlayer__video}
      />
      <VideoOverlayContainer />
    </div>
  );
};

function loadMetadata(
  videoElem: HTMLVideoElement,
  dispatch: Dispatch<SetVideoResolutionAction | SetVideoSizeBlockAction>
) {
  dispatch(
    setVideoResolution({
      resolutionX: videoElem.videoWidth,
      resolutionY: videoElem.videoHeight,
    })
  );
  dispatch(
    setVideoSizeBlock({
      videoBlockWidth: videoElem.clientWidth,
      videoBlockHeight: videoElem.clientHeight,
    })
  );
}

function createObserver(
  dispatch: Dispatch<SetVideoSizeBlockAction>
): ResizeObserver {
  return new ResizeObserver((entries) => {
    for (const entry of entries) {
      dispatch(
        setVideoSizeBlock({
          videoBlockWidth: entry.contentRect.width,
          videoBlockHeight: entry.contentRect.height,
        })
      );
    }
  });
}

export default VideoPlayerContainer;
