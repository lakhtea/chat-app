interface FriendsListProps {}

const FriendsList: React.FC<FriendsListProps> = ({}) => {
  return (
    <div className="friends border-white border-2 p-4">
      <div>Friends</div>
      <div>1. Shoma</div>
      <div>2. Bernice</div>
      <div>3. Chat Bot</div>
    </div>
  );
};

export default FriendsList;
