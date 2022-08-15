// import styles from "../styles/ChatEnvTailwindVars";

const styles = {
  container: "p-6 border-white border-8 relative",
  header: "absolute top-0 z-10",
  dateStamp: "sticky",
  receiverMessage: "",
  senderMessage: "",
};

interface ChatEnvProps {}

const ChatEnv: React.FC<ChatEnvProps> = ({}) => {
  const { container, header, dateStamp, receiverMessage, senderMessage } =
    styles;

  return (
    <div className={`env ${container}`}>
      <div className={header}>Chat Bot</div>
      <div className={dateStamp}>Today</div>
      <div className={receiverMessage}>Hi! My name is Chat Bot! </div>
      <div className={senderMessage}>Hi! My name is Lakhte</div>
    </div>
  );
};

export default ChatEnv;
