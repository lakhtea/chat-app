interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = ({}) => {
  return (
    <div className="profile">
      <div>Lakhte Agha</div>
      <div>5 messages sent</div>
      <div>5 messages received</div>
      <div>Full profile</div>
    </div>
  );
};

export default UserProfile;
