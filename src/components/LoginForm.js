import React from "react";

//css
import "../css/login.scss";

function LoginForm(props) {
  return (
    <div className="container">
      <div className="loginFormWrap">
        <div className="loginInformWrap">
          <h1 className="LoginMainTitle">로그인</h1>
        </div>
        <section className="LoginSimilarInformWrap">
          <div className="loginInformWrap">
            <div className="loginTitle">이메일</div>
            <input
              className="LoginTextBox"
              label="e-mail"
              type="text"
              maxLength="40"
              placeholder="example@goTomorrow.com"
              // _onChange={(e) => {
              //   setId(e.target.value);
              // }}
            />
          </div>
          <div className="loginInformWrap">
            <div className="loginTitle">패스워드</div>
            <input
              className="LoginTextBox"
              label="password"
              type="text"
              maxLength="16"
              placeholder="8자리 이상 입력하세요."
              // _onChange={(e) => {
              //   setId(e.target.value);
              // }}
            />
          </div>
          <div className="findIdPwWrap">
            <span className="findId">아이디</span>
            <span className="slash">/</span>
            <span className="findPw">비밀번호 찾기</span>
          </div>
        </section>
        <div className="btnWrap">
          <button className="loginBtn">로그인</button>
        </div>
        <div className="signupTextWrap">
          <p className="signupText">회원이 아니신가요?</p>
          <span className="signupTextBtn">회원가입</span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
