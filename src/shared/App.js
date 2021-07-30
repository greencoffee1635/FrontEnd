import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

// pages
import Home from "../pages/Home";

import Option01 from "../components/option/Option01";
import option02 from "../components/option/option02";
import option03 from "../components/option/option03";
import option04 from "../components/option/option04";
import Detail from "../pages/Detail";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import LoginModal from "../components/LoginModalForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/option01" component={Option01} />
        <Route exact path="/option02" component={option02} />
        <Route exact path="/option03" component={option03} />
        <Route exact path="/option04" component={option04} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/join" component={SignUp} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/loginModal" component={LoginModal} /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
