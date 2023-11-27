import React, { useState } from "react";
import { useUsersContexts } from "../hooks/useUsersContexts";

const NewUser = () => {
  const { setUsers } = useUsersContexts();
  const [username, setUsername] = useState("");
  const handleuserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: username };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUsername("");
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleuserNameChange}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
