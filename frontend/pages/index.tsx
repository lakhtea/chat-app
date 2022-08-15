import type { NextPage } from "next";
import ChatEnv from "../components/ChatEnv";
import ChatsList from "../components/ChatsList";
import FriendsList from "../components/FriendsList";
import UserProfile from "../components/UserProfile";

const Home: NextPage = () => {
  return (
    <div className="grid outer-grid">
      <ChatEnv />
      <ChatsList />
      <FriendsList />
      <UserProfile />
    </div>
  );
};

export default Home;
