import React, { useState } from "react";
import { useEffect } from "react";
import { YOUTUBE_VIDEOAPI } from "../utils/Constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

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
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCards key={video.id} video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
