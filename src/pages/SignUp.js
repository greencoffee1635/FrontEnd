import React from "react";

//component
import SignUpForm from "../components/SignUpForm";
import DetailHeader from "../shared/DetailHeader";

function SignUp(props) {
  return (
    <React.Fragment>
      <DetailHeader {...props} />
      <SignUpForm />
    </React.Fragment>
  );
}

export default SignUp;