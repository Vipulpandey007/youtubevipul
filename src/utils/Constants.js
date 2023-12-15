const GOOGLE_API_KEY = "AIzaSyCERZDyfPzmGEjhw2XtAYoTxzgYBw4zfy4";

export const YOUTUBE_VIDEOAPI =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_VIDEO_WATCH_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";
export const YOUTUBERECOMMEND_VIDEOAPI =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=18&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_COMMENT =
  "https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key=" +
  GOOGLE_API_KEY;
