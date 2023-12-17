import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { toggleMenu } from "../utils/sideNavSlice";
import tubeicon from "../images/vipultube.png";
import { YOUTUBE_SEARCH } from "../utils/Constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchData(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchData = async () => {
    const data = await fetch(YOUTUBE_SEARCH + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestion(json[1]);
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2  ">
      <div className="flex col-span-1">
        <GiHamburgerMenu
          className="text-3xl mt-1 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            className="w-32 ml-4 cursor-pointer"
            src={tubeicon}
            alt="youtubelogo"
          />
        </a>
      </div>

      <div className="col-span-10 px-10  text-center">
        <div>
          <input
            type="text"
            className="w-1/2 border border-grey-400 px-5 py-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestion(true);
            }}
            onBlur={() => {
              setShowSuggestion(false);
            }}
          />
          <button className="p-2 border border-grey-400 rounded-r-full bg-gray-200">
            Search
          </button>
        </div>
        {showSuggestion && suggestion?.length > 0 && (
          <div className="absolute bg-white py-2 px-2 left-[545px] w-[32rem] max-h-[400px] overflow-y-auto  text-left shadow-lg rounded-lg border border-gray-300">
            <ul>
              {suggestion.map((suggestions) => (
                <li
                  key={suggestions}
                  className="hover:bg-gray-100 rounded-lg cursor-pointer p-2"
                >
                  {suggestions}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <FaCircleUser className="text-3xl" />
      </div>
    </div>
  );
};

export default Head;
