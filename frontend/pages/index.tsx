import type { NextPage } from "next";
import ChatEnv from "../src/components/ChatEnv";
import ChatsList from "../src/components/ChatsList";
import FriendsList from "../src/components/FriendsList";
import UserProfile from "../src/components/UserProfile";

const Home: NextPage = () => {
  return (
    <div>
      <ChatsList />
      <ChatEnv />
      <FriendsList />
      <UserProfile />
    </div>
  );
};

export default Home;
