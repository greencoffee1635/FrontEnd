import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

// pages
import Home from "../pages/Home";
import Option01 from "../pages/Option01";
import Option02 from "../pages/Option02";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        {/* 옵션화면 Route */}
      </BrowserRouter>
    </>
  );
}

export default App;
