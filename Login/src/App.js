import React, { useState, useEffect } from "react";
import MainPage from "./Pages/MainPage";
import "./App.css";
import { call, signout } from "./service/ApiService";
import Loading from "./Loading";

const App = () => {
  const [state, setState] = useState({ 
    items: [],
    loading: true, //로딩중
  });

  // componentDidMount 대신 userEffect 사용
  useEffect(() => {
    call("/main", "GET", null).then((response) =>
      setState({ items: response.data, loading: false })
    );
  }, []); // '/'로 접속할때마다 실행됨.


  // 3. props로 넘겨주기
  return (
  <div className="App">
    {state.loading ? <Loading /> : 
        <div>
            <MainPage data={state}/>
        </div>
    }
  
  </div>
  )
};

export default App;
