import type { NextPage } from "next";
import Register from "../components/Register";
import ChatEnv from "../components/ChatEnv";
import ChatsList from "../components/ChatsList";
import FriendsList from "../components/FriendsList";
import UserProfile from "../components/UserProfile";
import Login from "../components/Login";

const Home: NextPage = () => {
  return (
    <div className="grid outer-grid">
      Register
      <Register />
      Login
      <Login />
      <ChatEnv />
      <ChatsList />
      <FriendsList />
      <UserProfile />
    </div>
  );
};

export default Home;
