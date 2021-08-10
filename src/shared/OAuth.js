export const CLIENT_ID = "72761c9499060c628af879190efc0daa";

export const REDIRECT_URI = "http://localhost:3000/login/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const NAVER_CLIENT_ID = "COz_jZPTrucNpJ32nyzf";

export const NAVER_REDIRECT_URI = "http://localhost:3000/login/naver/callback";

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&response_type=code`;
