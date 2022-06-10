import React, { createContext, useEffect, useState } from "react";
import Axios from "axios";

import domain from "../util/domain";
const UserContext = createContext();

function UserContextProvider(props) {
  const [user, setUser] = useState(undefined);
  const [userPhone, setUserPhone] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);
  const [userRole, setUserRole] = useState(undefined);
  const [userNameOfRoom, setUserNameOfRoom] = useState(undefined);
  const [userSalary, setUserSalary] = useState(undefined);
  const [userDecentralize, setUserDecentralize] = useState(undefined);
  const [userId, setUserId] = useState(undefined);

  async function getUser() {
    const token = !localStorage.token ? "" : JSON.parse(localStorage.token);
    const userRes = await Axios.get(
      domain + `/founder/loggedIn/${token.data.token}`
    );
    setUser(userRes.data ? userRes.data.Fdr_fullName : null);
    setUserPhone(userRes.data ? userRes.data.phoneNumber : null);
    setUserEmail(userRes.data ? userRes.data.Fdr_email : null);
    setUserRole(userRes.data ? userRes.data.role : null);
    setUserNameOfRoom(userRes.data ? userRes.data.nameOfRoom : null);
    setUserSalary(userRes.data ? userRes.data.salary : null);
    setUserDecentralize(userRes.data ? userRes.data.decentralize : null);
    setUserId(userRes.data ? userRes.data.Fdr_id : null);
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <UserContext.Provider
      value={{
        userPhone,
        userEmail,
        userRole,
        userNameOfRoom,
        userSalary,
        user,
        userDecentralize,
        getUser,
        userId,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
export { UserContextProvider };
