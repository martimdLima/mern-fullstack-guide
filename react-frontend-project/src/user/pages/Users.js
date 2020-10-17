import React from "react";

import UsersList from "../components/UsersList";

// Stateful Component

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "dummy-user-1",
      image: "https://avatars0.githubusercontent.com/u/51063238?s=460&v=4",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
