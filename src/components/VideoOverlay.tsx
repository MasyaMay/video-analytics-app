import { Zone } from "types";

interface VideoOverlayProps {
  zones: Zone[];
  resolutionX: number;
  resolutionY: number;
  videoBlockHeight: number;
  videoBlockWidth: number;
  className?: string;
}

const VideoOverlay = (props: VideoOverlayProps) => {
  const aspectRatio = props.resolutionX / props.resolutionY;
  const videoContentWidth = props.videoBlockHeight * aspectRatio;
  const dx = videoContentWidth / props.resolutionX;
  const dy = props.videoBlockHeight / props.resolutionY;
  const offsetX = Math.max((props.videoBlockWidth - videoContentWidth) / 2, 0);

  return (
    <>
      {props.zones.map((i) => {
        var newZone: Zone = {
          top: i.top * dy,
          left: offsetX + i.left * dx,
          width: i.width * dx,
          height: i.height * dy,
          id: i.id,
        };

        return (
          <div
            className={props.className ? props.className : ""}
            key={newZone.id}
            style={{ ...newZone }}
          ></div>
        );
      })}
    </>
  );
};

export default VideoOverlay;
