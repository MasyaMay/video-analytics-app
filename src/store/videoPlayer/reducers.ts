import { VideoPlayerActionType, VideoPlayerAction } from "./typesActions";

export interface IVideoResolution {
  resolutionX: number;
  resolutionY: number;
}

export interface IVideoSizeBlock {
  videoBlockHeight: number;
  videoBlockWidth: number;
}

interface IVideoPlayerState {
  timestamp: number;
  resolution: IVideoResolution;
  size: IVideoSizeBlock;
}

const initialState: IVideoPlayerState = {
  timestamp: 0,
  resolution: {
    resolutionX: 0,
    resolutionY: 0,
  },
  size: {
    videoBlockHeight: 0,
    videoBlockWidth: 0,
  },
};

const videoPlayerReducer = (
  state = initialState,
  action: VideoPlayerAction
): IVideoPlayerState => {
  switch (action.type) {
    case VideoPlayerActionType.SET_VIDEO_TIMESTAMP:
      return { ...state, timestamp: action.payload };
    case VideoPlayerActionType.SET_VIDEO_RESOLUTION:
      return { ...state, resolution: action.payload };
    case VideoPlayerActionType.SET_VIDEO_SIZE_BLOCK:
      return { ...state, size: action.payload };
    default:
      return state;
  }
};

export default videoPlayerReducer;
