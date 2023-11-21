import { IVideoResolution, IVideoSizeBlock } from "./reducers";

export const enum VideoPlayerActionType {
  SET_VIDEO_TIMESTAMP = "SET_VIDEO_TIMESTAMP",
  SET_VIDEO_RESOLUTION = "SET_VIDEO_RESOLUTION",
  SET_VIDEO_SIZE_BLOCK = "SET_VIDEO_SIZE_BLOCK",
}

export interface SetVideoTimestampAction {
  type: VideoPlayerActionType.SET_VIDEO_TIMESTAMP;
  payload: number;
}

export interface SetVideoResolutionAction {
  type: VideoPlayerActionType.SET_VIDEO_RESOLUTION;
  payload: IVideoResolution;
}

export interface SetVideoSizeBlockAction {
  type: VideoPlayerActionType.SET_VIDEO_SIZE_BLOCK;
  payload: IVideoSizeBlock;
}

export type VideoPlayerAction =
  | SetVideoTimestampAction
  | SetVideoResolutionAction
  | SetVideoSizeBlockAction;
