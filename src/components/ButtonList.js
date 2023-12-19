import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

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
    <div className="flex  ml-[260px] z-40 bg-white pb-2">
      <div className="max-w-[86%] overflow-x-hidden flex mx-12">
        {list.map((names) => (
          <Link to="live" key={names}>
            <Button name={names}></Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
