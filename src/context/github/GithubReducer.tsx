import { User, RepoItem } from "../../models/models";

interface CountAction {
  type: string;
  payload: { user: User; repos: RepoItem };
}

const githubReducer = (state: any, action: CountAction) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload, loading: false };
    case "SET_LOADING":
      return { ...state, loading: true };
    // case "GET_REPOS":
    //   return { ...state, repos: action.payload, loading: false };
    case "GET_USER_AND_REPO":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case "CLEAR_USERS":
      return { ...state, loading: false, users: [] };
    default:
      return state;
  }
};

export default githubReducer;
