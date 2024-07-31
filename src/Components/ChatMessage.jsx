import React from "react";
import Avatar from "react-avatar";

const ChatMessage = ({ items }) => {
  return (
    <div className=" flex items-center py-1">
      <div>
        <Avatar
          round={true}
          size="35"
          src="https://xsgames.co/randomusers/avatar.php?g=male"
          alt=""
        />
      </div>
      <div className=" flex items-center">
        <h1 className=" ml-2 text-sm font-normal text-black">{items.name}</h1>
        <p className=" ml-2 text-base ">{items.message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
