import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/User_module";
import styled from "styled-components";
import Swal from "sweetalert2";

function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    if (email === "" || pwd === "") {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "모든 항목을 입력해주세요!",
        showConfirmButton: false,
        timer: 1400,
      });
    } else {
      dispatch(userActions.loginDB(email, pwd));
    }
  };

  return (
    <Container>
      <LoginFormWrap>
        <LoginInformWrap>
          <LoginMainTitle>로그인</LoginMainTitle>
        </LoginInformWrap>

        <LoginSimilarInformWrap>
          <LoginInformWrap>
            <LoginTitle>이메일</LoginTitle>
            <LoginInputBox
              className="LoginInputBox"
              label="e-mail"
              type="text"
              maxLength="40"
              placeholder="이메일을 입력해주세요"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </LoginInformWrap>

          <LoginInformWrap>
            <LoginTitle>비밀번호</LoginTitle>
            <LoginInputBox
              className="LoginInputBox"
              label="password"
              type="password"
              maxLength="16"
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </LoginInformWrap>

          <BtnWrap>
            <LoginBtn onClick={login}>이메일 로그인</LoginBtn>
          </BtnWrap>

          <FindPwWrap>
            <TextLink>비밀번호 찾기</TextLink>
          </FindPwWrap>
        </LoginSimilarInformWrap>

        <SignupTextWrap>
          <p className="signupText">회원이 아니신가요?</p>
          <SignupTextBtn
            onClick={() => {
              window.location.href = "/join";
            }}
          >
            회원가입
          </SignupTextBtn>
        </SignupTextWrap>
      </LoginFormWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8.4rem auto;
`;

const LoginFormWrap = styled.div`
  width: 520px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LoginInformWrap = styled.div`
  width: 100%;
`;

const LoginMainTitle = styled.h1`
  font-size: 35px;
  font-weight: 700;
  color: #121212;
  text-align: center;
`;

const LoginSimilarInformWrap = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LoginTitle = styled.h1`
  font-size: 21px;
  font-weight: 400;
  color: #909090;
  margin-left: 10px;
`;

const LoginInputBox = styled.input`
  width: 100%;
  height: 50px;
  font-size: 21px;
  color: #484848;
  margin-top: 20px;
  padding-left: 25px;
  box-sizing: border-box;
  border-bottom: 1px solid #e2e2e2;
  border-left: none;
  border-right: none;
  border-top: none;
  cursor: pointer;
  &::placeholder {
    color: #e2e2e2;
    font-weight: 500;
  }
  &:focus {
    outline: none;
    border-color: var(--main-color);
    &::placeholder {
      color: transparent;
    }
  }
`;

const FindPwWrap = styled.div`
  font-size: 18px;
  color: #909090;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 70px;
  border: none;
  font-size: 21px;
  font-weight: 600;
  border-radius: 35px;
  background-color: #e2e2e2;
  color: var(--white);
  &:hover {
    cursor: pointer;
    background-color: var(--main-color);
  }
`;

const SignupTextWrap = styled.div`
  color: #909090;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const SignupTextBtn = styled.div`
  text-decoration: underline;
  color: #1dc6d1;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin-left: 5px;
`;

const TextLink = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default LoginForm;
