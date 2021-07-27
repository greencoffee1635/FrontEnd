import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

// pages
import Home from "../pages/Home";
import Detail from "../pages/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={Detail} />
        {/* 옵션화면 Route */}
      </BrowserRouter>
    </>
  );
}

export default App;
