import React, { createContext, useEffect, useState } from "react";
import Register from "./Register/Register";
import UserManager from "./UserManager/UserManager";
// import { useSelector, useDispatch } from "react-redux";

// const UserContext = createContext();
// console.log(userContext);

export default function UserManagement() {
  return (
    <div className="w-75 mx-auto mt-5">
      <Register />
      <UserManager />
    </div>
  );
}

