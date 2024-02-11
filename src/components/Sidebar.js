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
    <div className=" md:block  p-5 max-h-screen hover:overflow-y-scroll overflow-hidden overscroll-contain fixed top-[50px] z-50 bg-white text-left w-[280px]">
      <ul>
        <Link to="/">
          <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
            <AiFillHome className="inline-block align-bottom mr-3 text-2xl" />
            <span className="text-xl">Home</span>
          </li>
        </Link>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <MdOutlineSlowMotionVideo className="inline-block align-bottom mr-3 text-2xl" />
          <span className="text-xl">Shorts</span>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <MdOutlineFeaturedVideo className="inline-block align-bottom mr-3 text-2xl" />
          <span className="text-lg">Subscription</span>
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className="font-bold pt-5 pb-5">Explore</h1>
      <ul>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <FaFire className="inline-block align-bottom mr-3 text-2xl" />
          <span className="text-xl">Trending</span>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <FaShoppingBag className="inline-block align-bottom mr-3 text-2xl" />
          <span className="text-xl">Shopping</span>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <FaMusic className="inline-block align-bottom mr-3 text-2xl" />
          <span className="text-xl">Music</span>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <MdLocalMovies className="inline-block align-bottom mr-3 text-2xl" />
          <span className="text-xl">Movies</span>
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <ul className="pt-10">
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <IoSettingsSharp className="inline-block align-bottom mr-3 text-2xl" />
          <span className="text-xl">Settings</span>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <FaFlag className="inline-block align-bottom mr-3 text-2xl" />
          <span className="text-xl">Report</span>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <TbHelpSquareFilled className="inline-block align-bottom mr-3 text-2xl" />
          <span className="text-xl">Help</span>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <RiFeedbackFill className="inline-block align-bottom mr-3 text-2xl" />
          <span className="text-xl">Feedback</span>
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <ul className="pt-10">
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <RiFeedbackFill className="inline-block align-bottom mr-3 text-2xl" />
          <span className="text-xl"></span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
