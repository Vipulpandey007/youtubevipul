import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { FaFire } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaFlag } from "react-icons/fa";
import { TbHelpSquareFilled } from "react-icons/tb";
import { RiFeedbackFill } from "react-icons/ri";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li className="flex p-2">
          <AiFillHome className="text-xl" />
          <span className="ml-4 text-xl">Home</span>
        </li>
        <li className="flex p-2">
          <MdOutlineSlowMotionVideo className="text-xl" />
          <span className="ml-4 text-xl">Shorts</span>
        </li>
        <li className="flex p-2">
          <MdOutlineFeaturedVideo className="text-xl" />
          <span className="ml-4 text-lg">Subscription</span>
        </li>
      </ul>
      <h1 className="font-bold pt-5 pb-5">Explore</h1>
      <ul>
        <li className="flex p-2">
          <FaFire className="text-xl" />
          <span className="ml-4 text-xl">Trending</span>
        </li>
        <li className="flex p-2">
          <FaShoppingBag className="text-xl" />
          <span className="ml-4 text-xl">Shopping</span>
        </li>
        <li className="flex p-2">
          <FaMusic className="text-xl" />
          <span className="ml-4 text-xl">Music</span>
        </li>
        <li className="flex p-2">
          <MdLocalMovies className="text-xl" />
          <span className="ml-4 text-xl">Movies</span>
        </li>
      </ul>
      <ul className="pt-10">
        <li className="flex p-2">
          <IoSettingsSharp className="text-xl" />
          <span className="ml-4 text-xl">Settings</span>
        </li>
        <li className="flex p-2">
          <FaFlag className="text-xl" />
          <span className="ml-4 text-xl">Report</span>
        </li>
        <li className="flex p-2">
          <TbHelpSquareFilled className="text-xl" />
          <span className="ml-4 text-xl">Help</span>
        </li>
        <li className="flex p-2">
          <RiFeedbackFill className="text-xl" />
          <span className="ml-4 text-xl">Feedback</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
