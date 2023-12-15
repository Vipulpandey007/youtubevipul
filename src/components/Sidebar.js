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
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

  //Early return pattern
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48 ">
      <ul>
        <Link to="/">
          <li className="flex p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
            <AiFillHome className="text-xl" />
            <span className="ml-4 text-xl">Home</span>
          </li>
        </Link>
        <li className="flex p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <MdOutlineSlowMotionVideo className="text-xl" />
          <span className="ml-4 text-xl">Shorts</span>
        </li>
        <li className="flex p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <MdOutlineFeaturedVideo className="text-xl" />
          <span className="ml-4 text-lg">Subscription</span>
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className="font-bold pt-5 pb-5">Explore</h1>
      <ul>
        <li className="flex p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <FaFire className="text-xl" />
          <span className="ml-4 text-xl">Trending</span>
        </li>
        <li className="flex p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <FaShoppingBag className="text-xl" />
          <span className="ml-4 text-xl">Shopping</span>
        </li>
        <li className="flex p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <FaMusic className="text-xl" />
          <span className="ml-4 text-xl">Music</span>
        </li>
        <li className="flex p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <MdLocalMovies className="text-xl" />
          <span className="ml-4 text-xl">Movies</span>
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <ul className="pt-10">
        <li className="flex p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <IoSettingsSharp className="text-xl" />
          <span className="ml-4 text-xl">Settings</span>
        </li>
        <li className="flex p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <FaFlag className="text-xl" />
          <span className="ml-4 text-xl">Report</span>
        </li>
        <li className="flex p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <TbHelpSquareFilled className="text-xl" />
          <span className="ml-4 text-xl">Help</span>
        </li>
        <li className="flex p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <RiFeedbackFill className="text-xl" />
          <span className="ml-4 text-xl">Feedback</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
