import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [livemessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatmessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="mt-5 m-2 p-2  w-full h-[500px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatmessage.map((mess, i) => (
            <ChatMessage key={i} name={mess.name} message={mess.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(livemessage);
          dispatch(
            addMessage({
              name: "Vipul Pandey",
              message: livemessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className=" w-60 border border-black px-2 py-1"
          value={livemessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 py-1 mx-2 bg-black text-white hover:bg-white hover:text-black hover:border border-black rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
