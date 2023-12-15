import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sideNavSlice";
import { Link, useSearchParams } from "react-router-dom";
import {
  YOUTUBE_COMMENT,
  YOUTUBE_VIDEO_WATCH_API,
  YOUTUBERECOMMEND_VIDEOAPI,
} from "../utils/Constants";
import likeIcon from "../images/like.svg";
import disLikeIcon from "../images/dislike.svg";
import shareIcon from "../images/share.svg";
import downloadIcon from "../images/download.svg";
import moreIcon from "../images/more.svg";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const [Wvideo, setWVideo] = useState([]);
  const [relatedvideo, setrelatedvideo] = useState([]);
  const [comment, setComment] = useState([]);

  let videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getVideoDetails();
    getRelatedVideo();
    getComments();
  }, [videoId]);

  const getVideoDetails = async () => {
    const data = await fetch(YOUTUBE_VIDEO_WATCH_API + videoId);
    const json = await data.json();
    setWVideo(json.items[0]);
  };

  const getRelatedVideo = async () => {
    const data = await fetch(YOUTUBERECOMMEND_VIDEOAPI);
    const json = await data.json();
    console.log(json.items);
    setrelatedvideo(json.items);
  };

  const getComments = async () => {
    const data = await fetch(YOUTUBE_COMMENT);
    const json = await data.json();
    setComment(json.items);
  };
  return (
    <div className="flex">
      <div className="px-10 py-10">
        <iframe
          width="1050"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="p-2 m-2">
          <div>
            <div className="font-medium text-[18px]">
              {Wvideo?.snippet?.title}
            </div>
            <div className="mt-2 flex justify-between">
              <div className="flex">
                <div className="flex">
                  <img
                    className="rounded-full w-10 h-10"
                    alt="thumbnail"
                    src={Wvideo?.snippet?.thumbnails?.default?.url}
                  />
                  <div className="flex flex-col justify-center ml-2">
                    <div className="font-bold text-[16px]">
                      {Wvideo?.snippet?.channelTitle}
                    </div>
                    <div className="text-gray-500 text-[12px]">
                      {Wvideo?.statistics?.viewCount} Subscriber
                    </div>
                  </div>
                </div>
                <button className="bg-black rounded-full px-4 ml-2 text-white">
                  Subscribe
                </button>
              </div>
              <div className="flex">
                <button className="bg-gray-100 rounded-l-full px-4 hover:bg-gray-200">
                  <img alt="likeBtn" className="inline-block" src={likeIcon} />{" "}
                  5K
                </button>
                <button className="bg-gray-100 rounded-r-full px-4 border-l-2 border-gray-300 hover:bg-gray-200">
                  <img
                    alt="dislikeBtn"
                    className="inline-block"
                    src={disLikeIcon}
                  />
                </button>
                <button className="bg-gray-100 rounded-full px-4 ml-2 hover:bg-gray-200">
                  <img
                    alt="shareBtn"
                    className="inline-block"
                    src={shareIcon}
                  />{" "}
                  Share
                </button>
                <button className="bg-gray-100 rounded-full px-4 ml-2 hover:bg-gray-200">
                  <img
                    alt="downloadBtn"
                    className="inline-block"
                    src={downloadIcon}
                  />{" "}
                  Download
                </button>
                <button className="bg-gray-100 rounded-full w-10 h-10 ml-2 hover:bg-gray-200">
                  <img alt="moreBtn" className="inline-block" src={moreIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 border border-gray-200">
          {comment.map((info) => (
            <ul className="flex mb-5">
              <img
                className="rounded-full"
                src={info.snippet.authorProfileImageUrl}
                alt="userimage"
              />
              <p className="ml-2 font-bold">{info.snippet.authorDisplayName}</p>
              <li className="ml-5">
                {info.snippet.textOriginal}{" "}
                <p className="pt-2 text-xs">
                  Posted at:-{info.snippet.updatedAt}
                </p>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div>
        {relatedvideo?.map((video) => (
          <Link key={video?.id} to={"/watch?v=" + video.id}>
            <div className="px-3 m-2 mt-[20px] flex">
              <img
                className="rounded-xl w-[168px] h-[94px] "
                alt="thumbnail"
                src={video?.snippet?.thumbnails?.medium?.url}
              />
              <ul className="flex flex-col justify-start ml-2 w-60">
                <li className="font-medium py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5">
                  {video?.snippet?.title}
                </li>
                <li className="text-gray-500 text-[12px]">
                  {video?.snippet?.channelTitle}
                </li>
                <li className="text-gray-500 text-[12px]">
                  {video.statistics.viewCount} Views
                </li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Watch;
