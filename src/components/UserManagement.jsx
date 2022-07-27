import React, { createContext, useEffect, useState } from "react";
import Register from "./Register/Register";
import UserManager from "./UserManager/UserManager";
import { useSelector, useDispatch } from "react-redux";

const UserContext = createContext();
// console.log(userContext);

export default function UserManagement() {
  const selectorList = useSelector((state) => state.userReducers);
  const [editUser, setEditUser] = useState({});
  useEffect(() => {
    setEditUser(editUser === "" ? {} : selectorList.selectedUser);
  }, [selectorList]);
  // console.log(editUser);
  return (
    <UserContext.Provider value={editUser}>
      <div className="w-75 mx-auto mt-5">
        <Register />
        <UserManager />
      </div>
    </UserContext.Provider>
  );
}

export { UserContext };
