import React, { useState } from "react";

import UserList from "../components/users/UserList";
import UserSearch from "../components/users/UserSearch";
import Welcome from "./Welcome";

function Home() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      {visible ? <Welcome setVisible={setVisible} /> : <UserSearch />}
      <UserList />
    </div>
  );
}

export default Home;
