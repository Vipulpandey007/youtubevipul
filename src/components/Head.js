import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { toggleMenu } from "../utils/sideNavSlice";
import tubeicon from "../images/vipultube.png";
import { YOUTUBE_SEARCH } from "../utils/Constants";
import { cacheResults } from "../utils/SearchSlice";
import { useNavigate } from "react-router-dom";
import smicon from "../images/youtubesm.png";

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

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      console.log("clicked");
      navigate("/results?search_query=" + searchQuery);
    }
  };

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white">
      <div className="flex h-5 items-center">
        <div className="flex cursor-pointer items-center justify-center h-10 w-10 rounded-full md:hidden">
          <GiHamburgerMenu
            className="h-6 mt-2 ml-2 text-2xl"
            onClick={() => toggleMenuHandler()}
          />
        </div>
        <a
          href="https://vipulpandey007.github.io/youtubevipul/"
          className="flex h-5 items-center"
        >
          <img
            className="hidden sm:block w-20  md:ml-2 cursor-pointer"
            src={tubeicon}
            alt="youtubelogo"
          />
          <img
            className="sm:hidden w-14 md:ml-2 cursor-pointer"
            src={smicon}
            alt="youtubelogo"
          />
        </a>
      </div>

      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl md:group-focus-within:ml-5 md:group-focus-within:pl-5">
          <input
            type="text"
            className="bg-transparent outline-none text-black pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            placeholder="Search..."
            value={searchQuery}
            onKeyUp={searchQueryHandler}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestion(true);
            }}
            onBlur={() => {
              setShowSuggestion(false);
            }}
          />
        </div>
        <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-gray-100">
          <img
            alt="search-icon"
            className="h-5 mx-auto"
            onClick={() => searchQueryHandler("searchButton")}
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

      <div className="flex items-center">
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          <FaCircleUser className="text-3xl" />
          {/* <CiLight /> */}
        </div>
      </div>
    </div>
  );
};

export default Head;
