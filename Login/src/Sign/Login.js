import React, { useState } from "react";
import { signin } from "../service/ApiService";
import useInput  from "../hooks/useInput"


const Login = () => {
    const Id = useInput('');
    const Password = useInput('');


  const handleSubmit = (event) => {
    event.preventDefault();
    
    // ApiService의 signin 메서드를 사용 해 로그인.
    signin({ id: Id.value, password: Password.value });   //id, pw 전부다 String
  }

  return (
    <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">

                                    
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                    <div className="card-body">

                                       
                                       <form noValidate onSubmit={handleSubmit}>

                                            
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="id" type="text" placeholder="name@example.com" name="id" {...Id}/>
                                                <label htmlFor="inputEmail">ID</label>
                                            </div>
                                           
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="password" type="password" placeholder="Password" name="password" {...Password}/>
                                                <label htmlFor="inputPassword">비밀번호</label>
                                            </div>
                                            


                                            

                                            <div className="d-flex align-items-center justify-content-end mt-4 mb-0">
                                                

                                                
                                                <input className="btn btn-primary" type="submit" value="Login"></input>
                                                
                                            </div>
                                        </form>
                                        

                                    </div>

                                    
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><a href="/signup">Sign up</a></div>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    </div>
  );
};


export default Login;
