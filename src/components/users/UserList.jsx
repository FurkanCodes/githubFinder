import React from "react";
import { useContext } from "react";
import Spinner from "../../pages/Spinner";
import UserItem from "../users/UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserList() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div>
        <h3 className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </h3>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserList;
