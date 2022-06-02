import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import React, { useEffect, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import { Link } from "react-router-dom";
import Spinner from "../../components/layout/Spinner";
import RepoList from "../repos/RepoList";
import { UserContextType } from "../../models/models";
import { useParams } from "react-router-dom";
import { getUserAndRepos } from "../../context/github/GithubActions";
const User: React.FC = () => {
  interface UserInterface {
    name: string;
    login: string;
    avatar_url: string;
    location: string;
    bio: string;
    type: string;
    blog: string;
    twitter_username: string;
    html_url: string;
    followers: number;
    following: number;
    public_repos: string;
    public_gists: string;
    hireable: boolean;
  }
  const { user, loading, repos, dispatch } = useContext(
    GithubContext
  ) as UserContextType;

  const { login } = useParams();

  useEffect(() => {
    // if (getASingleUser && getUserRepos && login) {
    //   getASingleUser(login);
    //   getUserRepos(login);
    // }
    if (dispatch && login) {
      dispatch({ type: "SET_LOADING" });
      const getUserData = async () => {
        const userData = await getUserAndRepos(login);
        dispatch({ type: "GET_USER_AND_REPO", payload: userData });
      };

      getUserData();
    }
  }, [dispatch, login]);

  if (loading) {
    return <Spinner />;
  }
  const {
    avatar_url,
    name,
    type,
    hireable,
    bio,
    html_url,
    location,
    blog,
    twitter_username,
    followers,
    following,
    public_repos,
    public_gists,
  } = user as UserInterface;
  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        {/* BACK BUTTON */}
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back to Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          {/* AVATAR */}
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p className="flex-grow-0">{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            {/* NAME */}
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="className='mx-1 badge badge-info'">
                    Hireable
                  </div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  className="btn btn-outline"
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit GitHub Profile
                </a>
              </div>
            </div>

            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Followers */}
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Followers</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {followers}
              </div>
            </div>
            {/* Following */}
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUserFriends className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Following</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {following}
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaCodepen className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Public Repos</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_repos}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaStore className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Public Gists</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_gists}
              </div>
            </div>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default User;
