import React, { useState } from "react";
import { useEffect } from "react";
import { YOUTUBE_VIDEOAPI } from "../utils/Constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOAPI);
    const json = await data.json();
    setVideos(json.items);
  };
  if (!videos.length) return <Shimmer />;
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 md:ml-[260px]`}
    >
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCards video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
