import React from "react";
import styled from "styled-components";
import naver from "../images/naver.png";
import kakao from "../images/kakao.png";
import email from "../images/email.png";

const LoginModal = (props, { close }) => {
  return (
    <Container
    // onClick={() => {
    //   close();
    // }}
    >
      <FormWrap>
        <TitleWrap>
          <MainTitle>내일 당장 떠나요!(로고예정)</MainTitle>
          <SubTitle>일상이 여행인 당신을 위해~!</SubTitle>
        </TitleWrap>
        <btnWrap>
          <LinkBtn className="kakaoBtn" href="">
            <SocialLogo src={kakao} />
            <LogoText className="kakaoText">카카오 로그인하기</LogoText>
          </LinkBtn>
          <LinkBtn className="naverBtn" href="">
            <SocialLogo src={naver} />
            <LogoText>네이버 로그인하기</LogoText>
          </LinkBtn>
          <LinkBtn className="emailBtn" href="">
            <SocialLogo className="Email" src={email} />
            <LogoText>이메일 로그인하기</LogoText>
          </LinkBtn>
        </btnWrap>
        <LoginSignUpWrap>
          <p>아직 회원이 아니신가요?</p>
          <LoginSignUpBtn>회원가입</LoginSignUpBtn>
        </LoginSignUpWrap>
      </FormWrap>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  // opacity: 0.4;
  height: 100vh;
  width: 100vw;
  z-index: 600;
`;

const FormWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 380px;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  z-index: 610;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    width: 280px;
  }
`;

const TitleWrap = styled.section`
  display: inline-block;
  text-align: center;
  margin-bottom: 20px;
`;

const MainTitle = styled.p`
  font-size: 24px;
  line-height: 20px;
  letter-spacing: -0.015em;
  color: black;
  margin: 20px 0;
`;

const SubTitle = styled.p`
  font-size: 18px;
  line-height: 8px;
  letter-spacing: -0.015em;
  color: var(--main-color);
`;

const btnWrap = styled.section`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 15px;
`;

const LinkBtn = styled.a`
  display: flex;
  justify-content: space-between;
  font-style: none;
  max-width: 282px;
  height: 40px;
  align-items: center;
  border-radius: 20px;
  margin: 0 auto 16px;
  cursor: pointer;
  padding: 0 30px 0 16px;
  text-decoration: none;
  &.kakaoBtn {
    background-color: #fce000;
  }
  &.naverBtn {
    background-color: #00c63b;
  }
  &.emailBtn {
    background-color: #dc4e41;
  }
`;

const SocialLogo = styled.img`
  position: relative;
  top: -2px;
  width: 30px;
  height: 30px;
  &.Email {
    width: 20px;
    height: 20px;
    margin: 5px;
  }
`;
const LogoText = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: var(--white);
  &.kakaoText {
    color: black;
  }
`;

const LoginSignUpWrap = styled.section`
  font-size: 12px;
  color: #393939;
  margin-top: 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.63px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LoginSignUpBtn = styled.p`
  text-decoration: underline;
  cursor: pointer;
  margin-left: 4px;
`;

export default LoginModal;
