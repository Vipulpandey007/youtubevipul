import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 p-4 rounded-sm my-2">
      <FaCircleUser className="text-3xl" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
