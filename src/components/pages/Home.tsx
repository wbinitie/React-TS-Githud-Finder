import React from "react";
import UserList from "../users/UserList";
import UserSearch from "../users/UserSearch";
const Home = () => {
  return (
    <>
      <UserSearch />
      <UserList />
    </>
  );
};

export default Home;
