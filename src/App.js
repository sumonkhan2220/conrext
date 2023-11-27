import React from "react";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import UsersProvider from "./context/UserContext";

const App = () => {
  return (
    <UsersProvider>
      <div>
        <NewUser />
        <Users />
      </div>
    </UsersProvider>
  );
};

export default App;

// 1. create context
// 2. provide the context
// 3. use the context
