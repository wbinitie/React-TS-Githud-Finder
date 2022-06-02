import React, { createContext, useReducer } from "react";
import { UserContextType } from "../../models/models";
import githubReducer from "./GithubReducer";

const GithubContext = createContext<UserContextType | null>(null);

interface GithubContextInterface {
  children: React.ReactNode;
}

export const GithubProvider: React.FC<GithubContextInterface> = ({
  children,
}) => {
  const initialState: UserContextType = {
    users: [],
    loading: false,
    user: {},
    repos: [],
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // const [users, setUsers] = useState<User[]>([]);
  // const [loading, showLoading] = useState(true);

  return (
    <GithubContext.Provider
      value={{
        // users: state.users,
        // user: state.user,
        // loading: state.loading,
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
