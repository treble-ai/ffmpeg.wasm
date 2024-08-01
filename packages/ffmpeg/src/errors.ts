export const ERROR_NOT_LOADED = new Error(
  "ffmpeg is not loaded, call `await ffmpeg.load()` first"
);
export const ERROR_TERMINATED = new Error("called FFmpeg.terminate()");
