import React from "react";

const VideoCards = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72  cursor-pointer">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="video" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCards;
