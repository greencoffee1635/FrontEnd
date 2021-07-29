import React from "react";

//css
import "../css/signup.scss";

function SignUpForm(props) {
  return (
    <div className="container">
      <div className="FormWrap">
        <div className="informWrap">
          <h1 className="MainTitle">회원가입</h1>
        </div>
        <section className="similarInformWrap">
          <div className="informWrap">
            <label className="informTitle">이메일</label>
            <input
              className="textBox"
              label="e-mail"
              type="text"
              maxLength="30"
              placeholder="example@goTomorrow.com"
              // _onChange={(e) => {
              //   setId(e.target.value);
              // }}
            />
          </div>
          <div className="informWrap">
            <label className="informTitle">닉네임</label>
            <input
              className="textBox"
              label="e-mail"
              type="text"
              maxLength="30"
              placeholder="10자 이내"
              // _onChange={(e) => {
              //   setId(e.target.value);
              // }}
            />
          </div>
        </section>
        <section className="similarInformWrap">
          <div className="informWrap">
            <label className="informTitle">비밀번호</label>
            <input
              className="textBox"
              label="password"
              type="text"
              maxLength="16"
              placeholder="8자리 이상 입력하세요."
              // _onChange={(e) => {
              //   setId(e.target.value);
              // }}
            />
          </div>
          <div className="informWrap">
            <label className="informTitle">비밀번호 확인</label>
            <input
              className="textBox"
              label="password"
              type="text"
              maxLength="16"
              placeholder="비밀번호 확인"
              // _onChange={(e) => {
              //   setId(e.target.value);
              // }}
            />
          </div>
        </section>
        <section className="similarInformWrap">
          <div className="informWrap">
            <label className="informTitle">휴대폰 번호</label>
            <input
              className="textBox"
              label="password"
              type="text"
              maxLength="16"
              placeholder="휴대폰 번호 ('-' 제외)"
              // _onChange={(e) => {
              //   setId(e.target.value);
              // }}
            />
          </div>
          <div className="informWrap">
            <label className="informTitle">인증번호</label>
            <input
              className="textBox"
              label="password"
              type="text"
              maxLength="16"
              placeholder="인증번호"
              // _onChange={(e) => {
              //   setId(e.target.value);
              // }}
            />
          </div>
        </section>
        <div className="btnWrap">
          <button className="signUpBtn">동의하고 회원가입</button>
          <p className="agreeText">
            <span className="useTerm">이용약관,</span>
            <span className="CollectionTerm">개인정보 수집 및 이용,</span>
            <span className="offerTerm">개인정보 제공</span>내용을 확인하였고
            동의합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
