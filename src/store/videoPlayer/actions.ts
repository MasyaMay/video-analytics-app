import { IVideoResolution, IVideoSizeBlock } from "./reducers";
import {
  VideoPlayerActionType,
  SetVideoResolutionAction,
  SetVideoSizeBlockAction,
  SetVideoTimestampAction,
} from "./typesActions";

export const setVideoTimestamp = (
  timestamp: number
): SetVideoTimestampAction => ({
  type: VideoPlayerActionType.SET_VIDEO_TIMESTAMP,
  payload: timestamp,
});

export const setVideoResolution = (
  resolution: IVideoResolution
): SetVideoResolutionAction => ({
  type: VideoPlayerActionType.SET_VIDEO_RESOLUTION,
  payload: resolution,
});

export const setVideoSizeBlock = (
  size: IVideoSizeBlock
): SetVideoSizeBlockAction => ({
  type: VideoPlayerActionType.SET_VIDEO_SIZE_BLOCK,
  payload: size,
});
