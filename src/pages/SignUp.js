import React from "react";

//css
import "../css/signup.scss";

//component
import SignUpForm from "../components/SignUpForm";
import DetailHeader from "../shared/DetailHeader";

function SignUp(props) {
  return (
    <React.Fragment>
      <DetailHeader />
      <SignUpForm />
    </React.Fragment>
  );
}

export default SignUp;
