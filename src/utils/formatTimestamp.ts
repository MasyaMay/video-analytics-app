export const formatTimestamp = (
  timestamp: number,
  showMilliseconds: boolean = true
): string => {
  const totalSeconds = Math.floor(timestamp);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.round((timestamp - totalSeconds) * 1000);

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedMilliseconds = milliseconds.toString().padStart(3, "0");

  return showMilliseconds
    ? `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`
    : `${formattedMinutes}:${formattedSeconds}`;
};
