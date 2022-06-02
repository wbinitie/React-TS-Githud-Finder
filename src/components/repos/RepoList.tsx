import React from "react";
import { RepoItem } from "../../models/models";
import RepoSingle from "./RepoSingle";
interface RepoProp {
  repos: RepoItem[];
}

const RepoList: React.FC<RepoProp> = ({ repos }) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <RepoSingle key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
