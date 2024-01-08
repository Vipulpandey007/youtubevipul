import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useParams } from "react-router-dom";

const Body = ({ setProgress }) => {
  const param = useParams();
  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(100);
    }, 1500);
  }, [param]);
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
