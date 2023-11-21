import VideoPlayerControls from "components/VideoPlayerControls";
import React from "react";

interface VideoPlayerProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  videoContainerRef: React.RefObject<HTMLDivElement>;
}

const VideoPlayer = ({
  videoRef,
  videoContainerRef,
  ...props
}: VideoPlayerProps & React.ComponentPropsWithoutRef<"video">) => {
  return (
    <>
      <video ref={videoRef} {...props}></video>
      <VideoPlayerControls
        videoRef={videoRef}
        videoContainerRef={videoContainerRef}
      />
    </>
  );
};

export default VideoPlayer;
