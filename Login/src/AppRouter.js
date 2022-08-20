import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Sign/Login";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import SignUp from "./Sign/SignUp";
import MainPage from "./Pages/MainPage";



const AppRouter = () => {
  return (

    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
              
            
            <Route path="/" element={<App />} />

            <Route path="/signup" element={<SignUp />} />
            
           
              
            
          </Routes>
        </div>
        
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
