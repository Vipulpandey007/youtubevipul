import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const Body = ({ setProgress }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    setProgress(30);
    setProgress(100);
  }, [pathname]);
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
