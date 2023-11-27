import { useContext } from "react";
import { UsersContext } from "../context/UserContext";

export const useUsersContexts = () => {
  return useContext(UsersContext);
};
