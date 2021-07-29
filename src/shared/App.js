import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

// pages
import Home from "../pages/Home"
import { Option01, Option02, Option03, Option04, Option05, Option06_0, Option06_1} from "../pages/Option";
import option01 from "../components/option/option01"
import option02 from "../components/option/option02"
import option03 from "../components/option/option03"
import option04 from "../components/option/option04"

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/option01" component={Option01}/>
        <Route exact path="/option02" component={Option02}/>
        <Route exact path="/option03" component={Option03}/>
        <Route exact path="/option04" component={Option04}/>
        <Route exact path="/option05" component={Option05}/>
        <Route exact path="/option06_0" component={Option06_0}/>
        <Route exact path="/option06_1" component={Option06_1}/> */}
        <Route exact path="/option01" component={option01}/>
        <Route exact path="/option02" component={option02}/>
        <Route exact path="/option03" component={option03}/>
        <Route exact path="/option04" component={option04}/>
      </BrowserRouter>
    </>
  );
}

export default App;
