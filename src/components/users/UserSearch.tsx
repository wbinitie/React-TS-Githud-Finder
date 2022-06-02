import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { UserContextType, AlertContextType } from "../../models/models";
import { searchUsers } from "../../context/github/GithubActions";

const UserSearch = () => {
  const { users, dispatch } = useContext(GithubContext) as UserContextType;
  const { setAlert } = useContext(AlertContext) as AlertContextType;
  const [text, setText] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    setText((e.target as HTMLInputElement).value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (text !== "" && searchUsers && dispatch) {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });

      setText("");
    } else {
      setAlert("Please enter a text", "error");
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                placeholder="Search"
                value={text}
                onChange={handleSearch}
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && dispatch && (
        <div>
          <button
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
            className="btn btn-ghost btn-lg"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
