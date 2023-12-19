import React from "react";
import { FaCircleUser } from "react-icons/fa6";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center mb-5">
      <FaCircleUser className="text-2xl" />
      <div>
        <span className="font-bold px-2">{name}</span>
        <br />
        <span className="px-2">{message}😊</span>
      </div>
    </div>
  );
};

export default ChatMessage;
