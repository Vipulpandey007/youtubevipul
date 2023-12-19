import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { toggleMenu } from "../utils/sideNavSlice";
import tubeicon from "../images/vipultube.png";
import { YOUTUBE_SEARCH } from "../utils/Constants";
import { cacheResults } from "../utils/SearchSlice";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const navigate = useNavigate();
  const searchcache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchcache[searchQuery]) {
        setSuggestion(searchcache[searchQuery]);
      } else {
        getSearchData();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchData = async () => {
    const data = await fetch(YOUTUBE_SEARCH + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestion(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const handleSuggestion = (event) => {
    setSearchQuery(event.target.innerText);
    setShowSuggestion(false);
    navigate("/results?search_query=" + encodeURI(event.target.innerText));
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex flex-row justify-between items-center px-4 py-3">
        <div className="flex flex-row items-center">
          <div className="w-10 h-10 hover:rounded-full hover:bg-gray-100 cursor-pointer">
            <GiHamburgerMenu
              className="h-6 mt-2 ml-2 text-2xl"
              onClick={() => toggleMenuHandler()}
            />
          </div>
          <a href="/">
            <img
              className="w-36 ml-4 cursor-pointer"
              src={tubeicon}
              alt="youtubelogo"
            />
          </a>
        </div>

        <div className="relative">
          <div className="flex flex-row relative">
            <input
              type="text"
              className="border rounded-l-full w-[572px] h-10 pl-5 outline-none"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                setShowSuggestion(true);
              }}
              onBlur={() => {
                setShowSuggestion(false);
              }}
            />
            <button className="border rounded-r-full w-16 h-10 bg-gray-100">
              <img
                alt="search-icon"
                className="h-5 mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
              />
            </button>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute hover:bg-gray-200 hover:rounded-full w-9 h-9 right-[5.0rem] top-[2px]"
              >
                X
              </button>
            )}
          </div>
          {showSuggestion && suggestion?.length > 0 && (
            <div className="absolute bg-white w-[560px] max-h-[400px] shadow-lg border rounded-lg overflow-y-auto left-3 top-10 z-50 text-left">
              <ul className="py-3">
                {suggestion.map((suggestions) => (
                  <li
                    key={suggestions}
                    onMouseDown={(e) => handleSuggestion(e)}
                    className="hover:bg-gray-100 rounded-lg cursor-pointer p-2"
                  >
                    <img
                      className="mr-5 h-4 ml-3 inline-block"
                      alt="search-icon"
                      src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
                    />
                    <span>{suggestions}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-row-reverse justify-around">
          <div className="w-10 h-10 ml-5 cursor-pointer">
            <FaCircleUser className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
