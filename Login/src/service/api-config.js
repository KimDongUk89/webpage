export const ACCESS_TOKEN = "ACCESS_TOKEN"; //acessToken
export const REFRESH_TOKEN = "REFRESH_TOKEN"; // refreshToken

export const SIGNIN_URL = "/auth/signin" //로그인 url
export const SIGNUP_URL = "/auth/signup" //회원가입 url



let backendHost;

const hostname = window && window.location && window.location.hostname;


//현재 브라우저의 도메인이 localhost인경우..
if (hostname === "localhost") {
  backendHost = "http://localhost:3000";
}
else{
  backendHost = "117.17.102.143:8001";
}

export const API_BASE_URL = `${backendHost}`; //BackEnd url
