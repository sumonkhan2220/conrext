import React from "react";
import User from "./User";
import { useUsersContexts } from "../hooks/useUsersContexts";

const Users = () => {
  const { users } = useUsersContexts();
  return (
    <section className="users">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default Users;
