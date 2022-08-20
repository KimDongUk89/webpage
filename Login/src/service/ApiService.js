import {
    ACCESS_TOKEN, 
    REFRESH_TOKEN, 
    SIGNIN_URL,  // 로그인 url
    SIGNUP_URL,  //회원가입 url
    API_BASE_URL //백엔드 서버 주소
}
from  "./api-config"

//API 호출 함수
export const call = (api, method, request) => {
  let headers = new Headers({
    "Content-Type": "application/json",
    'Accept': 'application/json'
  });//헤더 설정

  // 로컬 스토리지에서 ACCESS TOKEN 가져와서 헤더에 추가함
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (accessToken) {
    headers.append("Authorization", "Bearer " + accessToken);
  } 

  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };

  if (request) {
    // GET method
    options.body = JSON.stringify(request);
  } //body추가

  //API통신
  return fetch(options.url, options)
    .then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          // response.ok가 true이면 정상적인 리스폰스를 받은것, 아니면 에러 리스폰스를 받은것.
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch((error) => {
      // 추가된 부분
      console.log(error.status);
      console.log(options);
      
      if (error.status === 403) {
        window.location.href = "/login"; // redirect
      }
      else if (!error.status) { //error == undefined
        window.location.href = "/login"; // redirect
      }
      else if (error.status === 401) { 
        //acessToken만료되서 토큰 갱신을 수행함
        //localStorage에 있는 refreshToken을 전송하여 새로운 acessToken 받음
        // window.location.href = "/login"; // redirect
      }
      
      return Promise.reject(error);
    });
}

//로그인
export const signin = (userDTO) => {
  return call(SIGNIN_URL, "POST", userDTO).then((response) => {
    if (response.data) {

      // refresh token은 local storage에 저장하고, 
      // access token은 cookie에 저장함
      localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);  //localStorage에 AcessToken저장
      localStorage.setItem(REFRESH_TOKEN, response.data.refreshToken); //localStorage에 RefreshToken저장
    
      // 작업 완료 되면 페이지 이동(새로고침)
      window.location.href = "/"; //App.js
    }
  });
}


//로그아웃
export const signout = () => {
  localStorage.removeItem(ACCESS_TOKEN)
  localStorage.removeItem(REFRESH_TOKEN)
  window.location.href = "/login";
}

//회원가입
export const signup = (userDTO) => {
  return call(SIGNUP_URL,"POST",userDTO).then((response) => {
      // 계정 생성 성공 시 login페이지로 리디렉트
      window.location.href = "/login";
    }
  )
}

//오늘 날짜 가져오는 함수
export const today = () => {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '-' + month  + '-' + day;

    return dateString
}