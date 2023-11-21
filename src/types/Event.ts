export type Zone = {
  left: number;
  top: number;
  width: number;
  height: number;
  id: number;
};

export type Event = {
  timestamp: number;
  duration: number;
  zone: Zone;
};
