import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
