import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

// pages
import Home from "../pages/Home";
import Option01 from "../pages/Option01";
import Option02 from "../pages/Option02";
import Detail from "../pages/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        {/* 옵션화면 Route */}
        <Route exact path="/detail" component={Detail} />
      </BrowserRouter>
    </>
  );
}

export default App;
