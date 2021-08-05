//빈칸 체크
function RequireRule(value) {
  const require = /.+/;
  return require.test(value);
}

//첫자리 Number 체크
function CantStartNumber(value) {
  const cntStartNum = /^\d/;
  return cntStartNum.test(value);
}

// 최소길이 체크
function MinimumLengthLimit(limit) {
  const MinLengthLimit = new RegExp(`(.){${limit}}`);
  return MinLengthLimit.test(limit);
}

//인증번호 숫자6자리
function authNumberCheck(AuthNumber) {
  const authNum = /^\d{6}$/;
  return authNum.test(AuthNumber);
}

//닉네임 체크
function nicknameCheck(nickname) {
  const nickCheck = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{1,9}$/;
  return nickCheck.test(nickname);
}

// 이메일 체크
function EmailCheck(email) {
  const emailCheck =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return emailCheck.test(email);
}

// 패스워드 알파벳, 숫자, 특수문자 조합 8자리 이상 체크
function CheckPassword(pwd) {
  const checkPwd =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~`!@#$%\^&*()-+=])[A-Za-z\d~`!@#$%\^&*()-+=]{8,}$/;
  return checkPwd.test(pwd);
}

// 연락처 체크
function CheckPhoneNumber(value) {
  const checkPhoneNumber = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
  return checkPhoneNumber.test(value);
}

const CheckValidation = {
  RequireRule,
  CantStartNumber,
  MinimumLengthLimit,
  authNumberCheck,
  nicknameCheck,
  EmailCheck,
  CheckPassword,
  CheckPhoneNumber,
};

export { CheckValidation };
