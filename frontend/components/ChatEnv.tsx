// import styles from "../styles/ChatEnvTailwindVars";
import { io } from "socket.io-client";
import { useEffect, useRef, useState } from "react";

interface ChatEnvProps {}

const socket = io("ws://localhost:3001");

const ChatEnv: React.FC<ChatEnvProps> = ({}) => {
  const [messageList, setMessageList] = useState(["one", "two"]);
  const [text, setText] = useState("");
  const isSecondRender = useRef(false);

  useEffect(() => {
    // receive a message from the server
    if (isSecondRender.current) {
      socket.on("hello from server", (message) => {
        setMessageList((list) => [...list, message]);
      });
    } else {
      isSecondRender.current = true;
    }
  }, []);

  const handleClick = () => {
    //send a message to server
    socket.emit("hello from client", text);
  };

  return (
    <div className="env">
      {/* <div className={header}>Chat Bot</div>
      <div className={dateStamp}>Today</div>
      <div className={receiverMessage}>Hi! My name is Chat Bot! </div>
      <div className={senderMessage}>Hi! My name is Lakhte</div> */}

      <div>
        {messageList.map((message, key) => (
          <div key={key}>{message}</div>
        ))}
      </div>

      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default ChatEnv;
