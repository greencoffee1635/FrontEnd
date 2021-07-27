import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

// pages
import Home from "../pages/Home";

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
