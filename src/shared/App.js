import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

// pages
import Home from "../pages/Home";

import Option01 from "../components/option/Option01";
import Option02 from "../components/option/Option02";
import Option03 from "../components/option/Option03";
import Option04 from "../components/option/Option04";
import Detail from "../pages/Detail";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import LoginModal from "../components/LoginModalForm";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/option01" component={Option01} />
        <Route exact path="/option02" component={Option02} />
        <Route exact path="/option03" component={Option03} />
        <Route exact path="/option04" component={Option04} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/join" component={SignUp} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/loginModal" component={LoginModal} /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
