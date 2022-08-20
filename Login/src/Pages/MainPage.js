import React, { useState } from "react";
import { signout } from "../service/ApiService";



const MainPage = ({props}) => {
  const [ user, setUser ] = useState(props.data);

  return(
    <div>
      <h1>MainPage.. {user}</h1>
      <div>
          <button type='button' onClick={ signout }>Logout</button>
      </div>
    </div>

  );
  
};

export default MainPage;
