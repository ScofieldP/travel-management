import React, { useState } from "react";
import Axios from "axios";
import Router from "./Router";

import { UserContextProvider } from "./context/userContext";
import "./App.css";
import Navbar from "./components/misc/Navbar";

Axios.defaults.withCredentials = true;
function App() {
  const [openNavbar, setOpenNavbar] = useState(true);
  return (
    <UserContextProvider>
      <div className="App">
        <div className="container-flex">
          <div
            className={openNavbar ? "set-with-navbar" : "set-with-navbar open"}
          >
            <Navbar openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
          </div>
          <div
            className={openNavbar ? "set-with-router" : "set-with-router-open"}
          >
            <Router />
          </div>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
