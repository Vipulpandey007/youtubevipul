import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <GiHamburgerMenu className="text-3xl" onClick={() => toggleMenu()} />
        <img
          className="w-20 ml-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="youtubelogo"
        />
      </div>

      <div className="col-span-10 text-center ">
        <input
          type="text"
          className="w-1/2 border border-grey-400 p-2 rounded-l-full"
        />
        <button className="p-2 border border-grey-400 rounded-r-full bg-gray-200">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <FaCircleUser className="text-3xl" />
      </div>
    </div>
  );
};

export default Head;
