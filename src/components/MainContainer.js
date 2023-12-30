import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
