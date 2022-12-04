import React from "react";

function RepoList({ repos }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Top Repos</h2>
        {repos.map((repo) => (
          <h2>{repo.name}</h2>
        ))}
      </div>
    </div>
  );
}

export default RepoList;
