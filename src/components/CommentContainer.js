import React from "react";
import CommentList from "./CommentList";

const commentsData = [
  {
    name: "Vipul Pandey",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Karan Pandey",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Abhay Pandey",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Kush Pandey",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Nirbhay Pandey",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Arun ",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Aman ",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Shubham",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Abhishek Kumar",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Pranav",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Risabh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vivan",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Vivan Pandey",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
];

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
