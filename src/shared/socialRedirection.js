import React from "react";
import Spinner from "../shared/Spinner_social";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/User_module";

export const KakaoRedirection = (props) => {
  const dispatch = useDispatch();

  const code = new URL(window.location.href).searchParams.get("code");

  React.useEffect(async () => {
    console.log(code);
    await dispatch(userActions.kakaoLogin(code));
  }, []);

  return <Spinner />;
};

export const NaverRedirection = (props) => {
  const dispatch = useDispatch();

  const code = new URL(window.location.href).searchParams.get("code");

  React.useEffect(async () => {
    console.log(code);
    await dispatch(userActions.naverLogin(code));
  }, []);

  return <Spinner />;
};
