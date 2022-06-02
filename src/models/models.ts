export interface User {
  login: string;
  id: number;
  avatar_url: string;
}
export interface UserRepo {}

export type UserContextType = {
  users: User[];
  user: {};
  loading: boolean;
  dispatch?: Function;
  repos: RepoItem[];
  searchUsers?: (text: string) => User[];
  clearUsers?: () => void;
  getASingleUser?: (text: string) => void;
  getUserRepos?: (text: string) => void;
};

export type AlertContextType = {
  alert: { msg: string };
  setAlert: (msg: string, text: string) => void;
};

// interface CountAction {
//   type: string;
//   payload: User[];
// }

export interface RepoItem {
  name: string;
  id: number;
  description: string;
  html_url: string;
  forks: string;
  open_issues: string;
  watchers_count: string;
  stargazers_count: string;
}
