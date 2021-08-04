import React from "react";
import naver from "../images/naver.png";
import kakao from "../images/kakao.png";
import email from "../images/email.png";

//css
import "../css/loginModal.scss";

const LoginModal = (props, { close }) => {
  const { LoginModalClose, history } = props;

  return (
    <div
      className="container"
      // onClick={() => {
      //   close();
      // }}
    >
      <div className="formWrap">
        <button onClick={LoginModalClose}>X</button>
        <section className="titleWrap">
          <p className="mainTitle">내일 당장 떠나요!(로고예정)</p>
          <p className="subTitle">일상이 여행인 당신을 위해~!</p>
        </section>
        <section className="btnWrap">
          <a className="kakaoBtn" href="">
            <img className="socialLogo" src={kakao} />
            <p>카카오 로그인하기</p>
          </a>
          <a className="naverBtn" href="">
            <img className="socialLogo" src={naver} />
            <p>네이버 로그인하기</p>
          </a>
          <a
            className="emailBtn"
            href=""
            onClick={() => {
              history.push("/login");
            }}
          >
            <img className="socialLogo Email" src={email} />
            <p>이메일 로그인하기</p>
          </a>
        </section>
        <section className="LoginSignUpWrap">
          <p className="LoginSignUpText">아직 회원이 아니신가요?</p>
          <p
            className="LoginSignUpBtn"
            onClick={() => {
              history.push("/join");
            }}
          >
            회원가입
          </p>
        </section>
      </div>
    </div>
  );
};

export default LoginModal;
