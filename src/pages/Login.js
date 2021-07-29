import React from "react";

//css
import "../css/signup.scss";

//component
import LoginForm from "../components/LoginForm";
import DetailHeader from "../shared/DetailHeader";

function SignUp(props) {
  return (
    <React.Fragment>
      <DetailHeader {...props} />
      <LoginForm />
    </React.Fragment>
  );
}

export default SignUp;
