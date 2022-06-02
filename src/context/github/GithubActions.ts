import axios from "axios";

const github = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_URL,
  headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` },
});

export const searchUsers = async (text: string) => {
  const params = new URLSearchParams({ q: text });

  // const response = await fetch(
  //   `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,
  //   {
  //     headers: {
  //       Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  //     },
  //   }
  // );
  const response = await github.get(`/search/users?${params}`);
  // setUsers(data);
  // showLoading(false);
  return response.data.items;
};

//get user and repos

export const getUserAndRepos = async (login: string) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: "10",
  });
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);

  return { user: user.data, repos: repos.data };
};
