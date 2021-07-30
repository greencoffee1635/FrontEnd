import React from "react";
import styled from "styled-components";

function LoginForm(props) {
  return (
    <Container>
      <LoginFormWrap>
        <LoginInformWrap>
          <LoginMainTitle>로그인</LoginMainTitle>
        </LoginInformWrap>
        <LoginSimilarInformWrap>
          <LoginInformWrap>
            <LoginTitle>이메일</LoginTitle>
            <LoginTextBox
              className="LoginTextBox"
              label="e-mail"
              type="text"
              maxLength="40"
              placeholder="example@goTomorrow.com"
              // _onChange={(e) => {
              //   setId(e.target.value);
              // }}
            />
          </LoginInformWrap>
          <LoginInformWrap>
            <LoginTitle>패스워드</LoginTitle>
            <LoginTextBox
              className="LoginTextBox"
              label="password"
              type="text"
              maxLength="16"
              placeholder="8자리 이상 입력하세요."
              // _onChange={(e) => {
              //   setId(e.target.value);
              // }}
            />
          </LoginInformWrap>
          <FindIdPwWrap>
            <TextLink className="findId">아이디</TextLink>
            <span className="slash">/</span>
            <TextLink className="findPw">비밀번호 찾기</TextLink>
          </FindIdPwWrap>
        </LoginSimilarInformWrap>
        <BtnWrap>
          <LoginBtn>로그인</LoginBtn>
        </BtnWrap>
        <SignupTextWrap>
          <p className="signupText">회원이 아니신가요?</p>
          <SignupTextBtn>회원가입</SignupTextBtn>
        </SignupTextWrap>
      </LoginFormWrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginFormWrap = styled.div`
  width: 268px;
  margin: 10px auto;
  padding: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginInformWrap = styled.div`
  width: 268px;
  height: 74px;
`;
const LoginMainTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  color: var(--main-color);
`;
const LoginSimilarInformWrap = styled.section`
  margin-bottom: 30px;
`;
const LoginTitle = styled.h1`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #d4d4d4;
`;
const LoginTextBox = styled.input`
  width: 100%;
  height: 34px;
  border-radius: 4px;
  border-color: #ececec;
  background-color: #fff;
  box-sizing: border-box;
  padding-left: 10px;
  border: 1px solid;
  opacity: 0.2;
  cursor: pointer;
  &:focus {
    outline: none;
    opacity: 1;
    border-color: var(--main-color);
    &::placeholder {
      color: transparent;
    }
  }
`;
const FindIdPwWrap = styled.div`
  font-size: 12px;
  color: #393939;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 12px;
`;
const BtnWrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 15px;
`;
const LoginBtn = styled.button`
  width: 268px;
  height: 40px;
  border: none;
  font-weight: 400;
  border-radius: 30px;
  background-color: var(--main-color);
  font-size: 16px;
  color: var(--white);
  margin-bottom: 10px;

  /* @media screen and (max-width: 768px) {
    .signUpBtn {
      margin: 0 auto;
      width: 86vw;
      height: 7vh;
      position: absolute;
      bottom: 14vh;
      left: 0;
      right: 0;
      font-size: 20px;
      font-weight: 600;
    }
  } */
`;
const SignupTextWrap = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.63px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignupTextBtn = styled.div`
  text-decoration: underline;
  margin-left: 5px;
  cursor: pointer;
`;

const TextLink = styled.span`
  cursor: pointer;
`;

export default LoginForm;
