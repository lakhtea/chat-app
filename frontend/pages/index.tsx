import type { NextPage } from "next";
import { createContext, useEffect, useState } from "react";
import { me } from "../api/sessionApi";
import ChatEnv from "../components/ChatEnv";
import ChatsList from "../components/ChatsList";
import FriendsList from "../components/FriendsList";
import UserProfile from "../components/UserProfile";

const Home: NextPage = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  const fetchCurrentUser = async () => {
    const user = await me();
    setCurrentUser(user);
  };

  useEffect(() => {
    if (!currentUser) {
      fetchCurrentUser();
    }
  }, []);

  const CurrentUser = createContext(currentUser);

  return (
    <div className="outer-grid">
      {currentUser ? (
        <nav style={{ color: "white" }}>{}</nav>
      ) : (
        <nav>Login Register</nav>
      )}
      <CurrentUser.Provider value={currentUser}>
        <ChatEnv />
        <ChatsList />
        <FriendsList />
        <UserProfile />
      </CurrentUser.Provider>
    </div>
  );
};

export default Home;
