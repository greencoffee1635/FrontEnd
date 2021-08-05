export const CLIENT_ID = "72761c9499060c628af879190efc0daa";

export const REDIRECT_URI = "http://localhost:3000/login/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
