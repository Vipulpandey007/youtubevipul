import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = ({ setProgress }) => {
  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(100);
    }, 1500);
  }, []);
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
