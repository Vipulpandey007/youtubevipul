import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/sideNavSlice";
import ReactPlayer from "react-player/youtube";
import { Link, useSearchParams } from "react-router-dom";
import {
  YOUTUBE_VIDEO_WATCH_API,
  YOUTUBERECOMMEND_VIDEOAPI,
} from "../utils/Constants";
import likeIcon from "../images/like.svg";
import disLikeIcon from "../images/dislike.svg";
import shareIcon from "../images/share.svg";
import downloadIcon from "../images/download.svg";
import moreIcon from "../images/more.svg";
import CommentContainer from "./CommentContainer";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const [Wvideo, setWVideo] = useState([]);
  const [relatedvideo, setrelatedvideo] = useState([]);
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

  let videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    getVideoDetails();
    getRelatedVideo();
  }, [videoId]);

  const getVideoDetails = async () => {
    const data = await fetch(YOUTUBE_VIDEO_WATCH_API + videoId);
    const json = await data.json();
    setWVideo(json.items[0]);
  };

  const getRelatedVideo = async () => {
    const data = await fetch(YOUTUBERECOMMEND_VIDEOAPI);
    const json = await data.json();
    setrelatedvideo(json.items);
  };

  return (
    <div
      className="px-3 backdrop-blur-sm bg-white
      flex justify-center flex-row h-[calc(100%-56px)] bg-white"
    >
      <div className="w-full  flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[500px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={"https://www.youtube.com/embed/" + searchParams.get("v")}
              controls
              width="1050px"
              height="500px"
              style={{ backgroundColor: "#00000" }}
              playing={true}
            />
          </div>

          <div className="text-black font-bold text-sm md:text-xl mt-4 line-clamp-2">
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
              <button className="bg-black rounded-full px-4 ml-2 text-white hover:bg-white hover:text-black hover:border border-black">
                Subscribe
              </button>
            </div>
            <div className="flex">
              <button className="bg-gray-100 rounded-l-full px-4 hover:bg-gray-200">
                <img alt="likeBtn" className="inline-block" src={likeIcon} /> 5K
              </button>
              <button className="bg-gray-100 rounded-r-full px-4 border-l-2 border-gray-300 hover:bg-gray-200">
                <img
                  alt="dislikeBtn"
                  className="inline-block"
                  src={disLikeIcon}
                />
              </button>
              <button className="bg-gray-100 rounded-full px-4 ml-2 hover:bg-gray-200">
                <img alt="shareBtn" className="inline-block" src={shareIcon} />{" "}
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

          <CommentContainer />
        </div>

        <div className="flex flex-col py-6 px-4 lg:w-[350px] xl:w-[400px]">
          {relatedvideo?.map((video) => (
            <Link
              key={video?.id}
              to={"/watch?v=" + video.id}
              onClick={() => window.scroll(0, 0)}
            >
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
    </div>
  );
};

export default Watch;
