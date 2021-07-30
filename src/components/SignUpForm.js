import React from "react";
import styled from "styled-components";

function SignUpForm(props) {
  return (
    <Container>
      <FormWrap>
        <InformWrap>
          <MainTitle>회원가입</MainTitle>
        </InformWrap>
        <SimilarInformWrap>
          <InformWrap>
            <InformTitle>이메일</InformTitle>
            <TextBox
              className="textBox"
              label="e-mail"
              type="text"
              maxLength="30"
              placeholder="example@goTomorrow.com"
              // _onChange={(e) => {
              //   setId(e.target.value);
              // }}
            />
          </InformWrap>
          <InformWrap>
            <InformTitle>닉네임</InformTitle>
            <TextBox
              className="textBox"
              label="e-mail"
              type="text"
              maxLength="30"
              placeholder="10자 이내"
              // _onChange={(e) => {
              //   setId(e.target.value);
              // }}
            />
          </InformWrap>
        </SimilarInformWrap>
        <SimilarInformWrap>
          <InformWrap>
            <InformTitle>비밀번호</InformTitle>
            <TextBox
              className="textBox"
              label="password"
              type="text"
              maxLength="16"
              placeholder="8자리 이상 입력하세요."
              // _onChange={(e) => {
              //   setId(e.target.value);
              // }}
            />
          </InformWrap>
          <InformWrap>
            <InformTitle>비밀번호 확인</InformTitle>
            <TextBox
              className="textBox"
              label="password"
              type="text"
              maxLength="16"
              placeholder="비밀번호 확인"
              // _onChange={(e) => {
              //   setId(e.target.value);
              // }}
            />
          </InformWrap>
        </SimilarInformWrap>
        <SimilarInformWrap>
          <InformWrap>
            <InformTitle>휴대폰 번호</InformTitle>
            <TextBox
              className="textBox"
              label="password"
              type="text"
              maxLength="16"
              placeholder="휴대폰 번호 ('-' 제외)"
              // _onChange={(e) => {
              //   setId(e.target.value);
              // }}
            />
          </InformWrap>
          <InformWrap>
            <InformTitle>인증번호</InformTitle>
            <TextBox
              className="textBox"
              label="password"
              type="text"
              maxLength="16"
              placeholder="인증번호"
              // _onChange={(e) => {
              //   setId(e.target.value);
              // }}
            />
          </InformWrap>
        </SimilarInformWrap>
        <BtnWrap>
          <SignUpBtn>동의하고 회원가입</SignUpBtn>
          <AgreeText>
            <AgreeLink>이용약관,</AgreeLink>
            <AgreeLink>개인정보 수집 및 이용,</AgreeLink>
            <AgreeLink>개인정보 제공</AgreeLink>내용을 확인하였고 동의합니다.
          </AgreeText>
        </BtnWrap>
      </FormWrap>
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
const FormWrap = styled.div`
  width: 268px;
  margin: 10px auto;
  padding: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InformWrap = styled.div`
  width: 268px;
  height: 74px;
`;

const MainTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  color: var(--main-color);
  display: block;
  position: relative;
  left: 0px;
`;

const SimilarInformWrap = styled.section`
  margin-bottom: 30px;
`;

const InformTitle = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #d4d4d4;
`;

const TextBox = styled.input`
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

const BtnWrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SignUpBtn = styled.button`
  width: 268px;
  height: 40px;
  border: none;
  font-weight: 400;
  border-radius: 30px;
  background-color: var(--main-color);
  font-size: 16px;
  color: var(--white);
  margin-bottom: 17px;
`;
const AgreeText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;
const AgreeLink = styled.span`
  text-decoration: underline;
  margin-right: 5px;
  cursor: pointer;
`;

export default SignUpForm;
