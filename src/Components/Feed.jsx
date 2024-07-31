import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const Feed = () => {
  return (
    <div className="flex-1  text-black text-lg p-4 mt-10 overflow-hidden">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default Feed;
