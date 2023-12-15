import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "News",
  "Cricket",
  "Football",
  "Mashup",
  "Remix",
  "Action",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((names) => (
        <Button name={names}></Button>
      ))}
    </div>
  );
};

export default ButtonList;
