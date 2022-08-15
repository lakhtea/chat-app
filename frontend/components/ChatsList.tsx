interface ChatsListProps {}

const ChatsList: React.FC<ChatsListProps> = ({}) => {
  return (
    <div className="list p-4 border-4 border-white">
      <div>Chat Bot!</div>
      <div>Shoma</div>
      <div>Bernice</div>
    </div>
  );
};

export default ChatsList;
