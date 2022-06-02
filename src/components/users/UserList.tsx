import React, { useContext } from "react";
import Spinner from "../layout/Spinner";
import Useritem from "./Useritem";
import { User, UserContextType } from "../../models/models";
import GithubContext from "../../context/github/GithubContext";

const UserList: React.FC = () => {
  const { users, loading } = useContext(GithubContext) as UserContextType;

  return loading ? (
    <Spinner></Spinner>
  ) : (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user: User) => (
        <Useritem key={user.id} user={user}></Useritem>
      ))}
    </div>
  );
};

export default UserList;
