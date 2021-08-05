import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { actionCreators as userActions } from "../redux/modules/User_module";
import Swal from "sweetalert2";
import { CheckValidation as checkVal } from "../shared/validation";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const nickNameCheck = useSelector((state) => state.user.nickNameCheck);
  const phoneAuthCheck = useSelector((state) => state.user.phoneAuthCheck);
  const phoneAuthConfirm = useSelector((state) => state.user.phoneAuthConfirm);
  const phoneAuth = useSelector((state) => state.user.phoneAuth);

  const emailInfo = useRef();
  const nickNameInfo = useRef();
  const pwdInfo = useRef();
  const pwdConfirmInfo = useRef();
  const phoneNumberInfo = useRef();
  const authNumberInfo = useRef();

  const [emailInfoText, setEmailInfoText] = React.useState(null);
  const [nickNameInfoText, setNicknameInfoText] = React.useState(null);
  const [pwdInfoText, setPwdInfoText] = React.useState(null);
  const [pwdConfirmText, setpwdConfirmText] = React.useState(null);
  const [phoneNumberInfoText, setPhoneNumberInfoText] = React.useState(null);
  const [authNumberInfoText, setAuthNumberInfoText] = React.useState(null);

  const [email, setEmail] = React.useState("");
  const [nickName, setNickname] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdConfirm, setpwdConfirm] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [authNumber, setAuthNumber] = React.useState("");

  const CheckValidEmail = () => {
    if (!checkVal.RequireRule(email)) {
      setEmailInfoText("이메일을 입력해주세요.");
      emailInfo.current.style.color = "red";
      emailInfo.current.style.display = "flex";
      return;
    }
    if (!checkVal.EmailCheck(email)) {
      setEmailInfoText("이메일 형식에 맞춰서 입력해주세요.");
      emailInfo.current.style.color = "red";
      return;
    }
    if (email.search(/\s/) !== -1) {
      setEmailInfoText("띄어쓰기 없이 입력해주세요.");
      emailInfo.current.style.color = "red";
      return;
    }
    setEmailInfoText("");
    emailInfo.current.style.display = "flex";
  };

  const emailConfirm = () => {
    if (emailInfoText !== "") {
      return;
    }
    dispatch(userActions.emailConfirm(email));
  };

  const CheckValidNickName = () => {
    if (!checkVal.RequireRule(nickName)) {
      setNicknameInfoText("닉네임을 입력해주세요.");
      nickNameInfo.current.style.color = "red";
      nickNameInfo.current.style.display = "flex";
      return;
    }
    if (!checkVal.nicknameCheck(nickName)) {
      setNicknameInfoText("1글자 이상 8글자 이하로 정해주세요.");
      nickNameInfo.current.style.color = "red";
      nickNameInfo.current.style.display = "flex";
      return;
    }
    setNicknameInfoText("");
    nickNameInfo.current.style.display = "flex";
    return;
  };

  const nickNameConfirm = () => {
    if (nickNameInfoText !== "") {
      return;
    }
    dispatch(userActions.nickNameConfirm(nickName));
  };

  const CheckValidPwd = () => {
    if (!checkVal.RequireRule(pwd)) {
      setPwdInfoText("비밀번호를 입력하세요.");
      pwdInfo.current.style.color = "red";
      pwdInfo.current.style.display = "flex";
      return;
    }
    if (!checkVal.CheckPassword(pwd)) {
      setPwdInfoText("8글자 이상, 영문+숫자+특수문자로 입력하세요.");
      pwdInfo.current.style.color = "red";
      pwdInfo.current.style.display = "flex";
      return;
    }
    setPwdInfoText("");
    pwdInfo.current.style.display = "flex";
    return;
  };

  const ValidPwdCheck = () => {
    if (!checkVal.RequireRule(pwd)) {
      setpwdConfirmText("비밀번호를 입력하세요.");
      pwdConfirmInfo.current.style.color = "red";
      pwdConfirmInfo.current.style.display = "flex";
      return;
    }
    if (pwd !== pwdConfirm) {
      setpwdConfirmText("비밀번호가 다릅니다. 다시 입력하세요.");
      pwdConfirmInfo.current.style.color = "red";
      pwdConfirmInfo.current.style.display = "flex";
      return;
    }
    setpwdConfirmText("");
    pwdConfirmInfo.current.style.display = "flex";
    pwdConfirmInfo.current.style.color = "none";
    return;
  };

  const CheckValidPhoneNumber = () => {
    if (!checkVal.CheckPhoneNumber(phoneNumber)) {
      setPhoneNumberInfoText("01012341234형태로 입력해주세요.");
      phoneNumberInfo.current.style.color = "red";
      phoneNumberInfo.current.style.display = "flex";
      return;
    }
    setPhoneNumberInfoText("");
    phoneNumberInfo.current.style.color = "none";
    return;
  };

  const CheckAuthPhoneNumber = () => {
    if (authNumber === "") {
      setAuthNumberInfoText("인증번호를 입력해주세요.");
      authNumberInfo.current.style.color = "red";
      authNumberInfo.current.style.display = "flex";
      return;
    }

    if (document.getElementById("authPhoneNumberInput").value.length < 6) {
      setAuthNumberInfoText("인증번호를 모두 입력해주세요.");
      authNumberInfo.current.style.color = "red";
      authNumberInfo.current.style.display = "flex";
      return;
    }

    setAuthNumberInfoText("");
    pwdConfirmInfo.current.style.color = "none";
    return;
  };

  // 핸드폰번호 미입력시 버튼 비활성화
  const CheckRequestNumber = (e) => {
    document.getElementById("PhoneNumberInput").value.length > 11
      ? (document.getElementById("phoneNumberRequest").disabled = false)
      : (document.getElementById("phoneNumberRequest").disabled = true);
  };

  const phoneNumberRequest = () => {
    if (phoneNumberInfoText !== "") {
      return;
    }
    dispatch(userActions.phoneAuthRequest(phoneNumber));
  };

  // 인증번호 미입력시 버튼 비활성화
  const CountAuthNumber = (e) => {
    setAuthNumber(e.target.value);
    document.getElementById("authPhoneNumberInput").value.length > 5
      ? (document.getElementById("AuthConfirm").disabled = false)
      : (document.getElementById("AuthConfirm").disabled = true);
  };

  const AuthConfirm = () => {
    if (authNumberInfoText !== "") {
      return;
    }
    dispatch(userActions.phoneAuthConfirm(phoneNumber, authNumber));
  };

  const signup = () => {
    if (
      email === "" ||
      nickName === "" ||
      pwd === "" ||
      pwdConfirm === "" ||
      phoneNumber === "" ||
      authNumber === ""
    ) {
      Swal.fire({
        position: "center-right",
        icon: "info",
        title: "모든 항목을 입력해주세요!",
        showConfirmButton: false,
        timer: 1400,
      });
      return;
    }

    if (nickNameCheck === false) {
      setNicknameInfoText("닉네임 중복확인이 완료되지 않았습니다.");
      Swal.fire({
        position: "center-right",
        icon: "info",
        title: "닉네임 중복확인이 완료되지 않았습니다!",
        showConfirmButton: false,
        timer: 1400,
      });
      return;
    }

    // if (phoneAuthCheck === false) {
    //   Swal.fire({
    //     position: "center-right",
    //     icon: "info",
    //     title: " 핸드폰 인증이 완료되지 않았습니다!",
    //     showConfirmButton: false,
    //     timer: 1400,
    //   });
    //   return;
    // }

    if (
      emailInfoText !== "" ||
      nickNameInfoText !== "" ||
      pwdInfoText !== "" ||
      pwdConfirmText !== "" ||
      phoneNumberInfoText !== "" ||
      authNumberInfoText !== ""
    ) {
      console.log("hh");
      return;
    }

    dispatch(
      userActions.signupDB(email, nickName, pwd, pwdConfirm, phoneNumber)
    );
  };

  return (
    <Container>
      <FormWrap>
        <TitlelWrap>
          <MainTitle>회원가입</MainTitle>
        </TitlelWrap>
        <SimilarInformWrap>
          <InformWrap>
            <InformTitle>이메일</InformTitle>
            <TextBox
              className="textBox"
              label="e-mail"
              type="text"
              maxLength="30"
              placeholder="example@goTomorrow.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onBlur={CheckValidEmail}
            />
            <ConfirmEmailBtn onClick={emailConfirm}>중복확인</ConfirmEmailBtn>
            <InfoText ref={emailInfo}>{emailInfoText}</InfoText>
          </InformWrap>
          <InformWrap>
            <InformTitle>닉네임</InformTitle>
            <TextBox
              className="textBox"
              label="nickname"
              type="text"
              maxLength="30"
              placeholder="10글자 미만"
              onChange={(e) => {
                setNickname(e.target.value);
              }}
              onBlur={CheckValidNickName}
            />
            <ConfirmNicknameBtn onClick={nickNameConfirm}>
              중복확인
            </ConfirmNicknameBtn>
            <InfoText ref={nickNameInfo}>{nickNameInfoText}</InfoText>
          </InformWrap>
        </SimilarInformWrap>
        <SimilarInformWrap>
          <InformWrap>
            <InformTitle>비밀번호</InformTitle>
            <TextBox
              className="textBox"
              label="password"
              type="password"
              maxLength="16"
              placeholder="영문/숫자/특수문자 포함 8글자 이상"
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              onBlur={CheckValidPwd}
            />
            <InfoText ref={pwdInfo}>{pwdInfoText}</InfoText>
          </InformWrap>
          <InformWrap>
            <InformTitle>비밀번호 확인</InformTitle>
            <TextBox
              className="textBox"
              label="passwordCheck"
              type="password"
              maxLength="16"
              placeholder="비밀번호 확인"
              onChange={(e) => {
                setpwdConfirm(e.target.value);
              }}
              onBlur={ValidPwdCheck}
            />
            <InfoText ref={pwdConfirmInfo}>{pwdConfirmText}</InfoText>
          </InformWrap>
        </SimilarInformWrap>
        <SimilarInformWrap>
          <InformWrap>
            <InformTitle>휴대폰 번호</InformTitle>
            <TextBox
              className="textBox"
              id="PhoneNumberInput"
              label="phoneNumber"
              type="text"
              minLength="12"
              maxLength="13"
              placeholder="휴대폰 번호 ('-' 제외)"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              onBlur={CheckValidPhoneNumber}
            />
            <RequestAuthBtn
              id="phoneNumberRequest"
              onClick={phoneNumberRequest}
              disabled=""
            >
              인증요청
            </RequestAuthBtn>
            <InfoText ref={phoneNumberInfo}>{phoneNumberInfoText}</InfoText>
          </InformWrap>
          <InformWrap>
            <InformTitle>인증번호</InformTitle>
            <TextBox
              className="textBox"
              id="authPhoneNumberInput"
              label="confirmNumber"
              type="text"
              maxLength="6"
              placeholder="인증번호"
              onChange={(e) => {
                setAuthNumber(e.target.value);
              }}
              onBlur={CheckAuthPhoneNumber}
            />
            <ConfirmAuthBtn id="AuthConfirm" onClick={AuthConfirm} disabled="">
              인증확인
            </ConfirmAuthBtn>
            <InfoText ref={authNumberInfo}>{authNumberInfoText}</InfoText>
          </InformWrap>
        </SimilarInformWrap>
        <BtnWrap>
          <SignUpBtn onClick={signup}>동의하고 회원가입</SignUpBtn>
          <AgreeText>
            <AgreeLink>이용약관,</AgreeLink>
            <AgreeLink>개인정보 수집 및 이용,</AgreeLink>
            <AgreeLink>개인정보 제공</AgreeLink>내용을 확인하였고 동의합니다.
          </AgreeText>
        </BtnWrap>
      </FormWrap>
    </Container>
  );
};

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

const TitlelWrap = styled.div`
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
`;

const SimilarInformWrap = styled.section`
  position: relative;
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

const InfoText = styled.p`
  margin-top: 5px;
  display: none;
  font-size: 12px;
  color: var(--main-color);
`;

const ConfirmEmailBtn = styled.button`
  position: absolute;
  top: 28px;
  right: 5px;
  width: 60px;
  height: 20px;
  border: none;
  font-weight: 500;
  font-size: 13px;
  color: #1dc6d1;
  background: transparent;
`;

const RequestAuthBtn = styled.button`
  position: absolute;
  top: 27px;
  right: 5px;
  width: 60px;
  height: 20px;
  border: none;
  font-weight: 500;
  font-size: 13px;
  color: #1dc6d1;
  background: transparent;
`;

const ConfirmAuthBtn = styled.button`
  position: absolute;
  bottom: 27px;
  right: 5px;
  width: 60px;
  height: 20px;
  border: none;
  font-weight: 500;
  font-size: 13px;
  color: #1dc6d1;
  background: transparent;
`;

const ConfirmNicknameBtn = styled.button`
  position: absolute;
  top: 102px;
  right: 5px;
  width: 60px;
  height: 20px;
  border: none;
  font-weight: 500;
  font-size: 13px;
  color: #1dc6d1;
  background: transparent;
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
