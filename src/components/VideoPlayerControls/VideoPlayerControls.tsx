import React, { useEffect, useRef } from "react";
import { formatTimestamp } from "utils/formatTimestamp";
import cl from "./VideoPlayerControls.module.css";

interface VideoPlayerControlsProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  videoContainerRef: React.RefObject<HTMLDivElement>;
}

const VideoPlayerControls = ({
  videoRef,
  videoContainerRef,
}: VideoPlayerControlsProps) => {
  const videoTrackRef = useRef<HTMLDivElement>(null);
  const videoTimelineRef = useRef<HTMLDivElement>(null);
  const timeLabelRef = useRef<HTMLSpanElement>(null);
  const imgPlayRef = useRef<HTMLImageElement>(null);

  const tooglePlay = () => {
    const video = videoRef.current;
    const img = imgPlayRef.current;
    if (video && img) {
      if (video.paused) {
        video.play();
        imgPlayRef.current.src = "/img/stop.svg";
      } else {
        video.pause();
        imgPlayRef.current.src = "/img/play.svg";
      }
    }
  };

  const toggleFullscreen = () => {
    const container = videoContainerRef.current;
    if (container) {
      if (!document.fullscreenElement) {
        container.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("click", tooglePlay);
      videoRef.current.addEventListener("timeupdate", (event: Event) => {
        if (videoTimelineRef.current) {
          var videoElement = event.currentTarget as HTMLVideoElement;

          if (videoElement) {
            videoTimelineRef.current.style.width =
              (videoElement.currentTime * 100) / videoElement.duration + "%";
          }
        }

        if (timeLabelRef.current) {
          const videoElement = event.currentTarget as HTMLVideoElement;

          if (videoElement) {
            timeLabelRef.current.innerText = `${formatTimestamp(
              videoElement.currentTime,
              false
            )} / ${formatTimestamp(videoElement.duration, false)}`;
          }
        }
      });

      if (videoTrackRef.current && videoTimelineRef.current) {
        videoTrackRef.current.addEventListener("click", (e) => {
          if (videoRef.current && videoTimelineRef.current) {
            let divElementRect = videoTrackRef.current?.getBoundingClientRect();

            if (divElementRect) {
              let posX = e.clientX - divElementRect.left;
              let timePos = (posX * 100) / divElementRect.width;
              videoRef.current.currentTime =
                timePos > 100
                  ? videoRef.current.duration
                  : (timePos * Math.round(videoRef.current.duration)) / 100;
            }
          }
        });
      }
    }
  }, []);

  return (
    <div className={cl.controls}>
      <div className={cl.controls__panel}>
        <button className={cl.controls__play} onClick={tooglePlay}>
          <img ref={imgPlayRef} src={"/img/play.svg"} alt="play" />
        </button>
        <span className={cl.controls__time} ref={timeLabelRef}>
          00:00 / 00:00
        </span>
        <button className={cl.controls__fullscreen} onClick={toggleFullscreen}>
          <img src="/img/fullscreen.svg" alt="fullscreen" />
        </button>
      </div>
      <div ref={videoTrackRef} className={cl.controls__track__block}>
        <div className={cl.controls__track}>
          <div ref={videoTimelineRef} className={cl.controls__timeline}></div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerControls;
