import React from "react";

const VideoCards = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className="flex flex-col mb-8 cursor-pointer">
      <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={thumbnails.medium.url}
          alt="video"
        />
      </div>
      <div className="flex text-black mt-3">
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm font-bold line-clamp-2">{title}</span>
          <span className="text-[12px] font-semibold mt-2 text-black/[0.7] flex items-center">
            {channelTitle}
          </span>
          <div className="flex text-[12px] font-semibold text-black/[0.7] truncate overflow-hidden">
            <span>{statistics.viewCount} Views</span>
            <span className="flex text-[24px] leading-none font-bold text-black/[0.7] relative top-[-10px] mx-1">
              .
            </span>
            <span className="truncate">{publishedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
