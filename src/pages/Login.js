import React from "react";

//css
import "../css/signup.scss";

//component
import LoginForm from "../components/LoginForm";
import Header from "../shared/Header";

function SignUp(props) {
  return (
    <React.Fragment>
      <Header page="main" />
      <LoginForm />
    </React.Fragment>
  );
}

export default SignUp;
