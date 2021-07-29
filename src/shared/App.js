import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

// pages
import Home from "../pages/Home";
import Option01 from "../pages/Option01";
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
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/join" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/loginModal" component={LoginModal} />
        {/* 옵션화면 Route */}
      </BrowserRouter>
    </>
  );
}

export default App;
