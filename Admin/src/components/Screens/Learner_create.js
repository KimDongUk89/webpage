import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import DuplicateBtn from "../UI/Button/DuplicateBtn";
import InputID from "../UI/Input/InputID";
import InputPassword from "../UI/Input/InputPassword";
import InputName from "../UI/Input/InputName";
import InputBirthday from "../UI/Input/InputBirthday";
import InputEmail from "../UI/Input/InputEmail";
import InputTel from "../UI/Input/InputTel";
import InputEtc from "../UI/Input/InputEtc";
import SaveBtn from "../UI/Button/SaveBtn";
import CancelBtn from "../UI/Button/CancelBtn";
import InputGender from "../UI/Input/InputGender";

export default function Learner_create(){
    const history = useNavigate();

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [selected, setSelected] = useState("");
    const [birthday, setBirthday] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [etc, setEtc] = useState("");
    
    const [isDuplicated, setIsDuplicated] = useState(true);
    
    function onSubmitHandler(e){
        e.preventDefault();
        //중복체크
        if(!isDuplicated){
            fetch(`http://localhost:3001/learner/`, {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify({
                    id : id,
                    password : password,
                    name : name,
                    gender : gender,
                    birthday : birthday,
                    tel : tel,
                    email : email,
                    etc : etc
                }),
            }).then((res) =>{
                if(res.ok){
                    alert("생성이 완료되었습니다.");
                    history(`/learner`);
                }
            });
        } else{
            alert("아이디 중복확인해주세요");
        }
    }

    
    return (
        <form onSubmit={onSubmitHandler} >
            <div className="container-fluid px-4">
            <h1 className="mt-4">학습자 추가</h1><br />

            <div className="card-body">
                <InputID 
                    mode={"create"} 
                    onChange={(e) => {
                        setId(e.target.value);
                      }}
                    />
                <DuplicateBtn 
                    props={'learner'}
                    id={id}
                    setIsDuplicated={setIsDuplicated}
                    /><br /><br />
                
                <InputPassword 
                    onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                />
                <br /><br />
                <InputName
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <br />
                <InputGender 
                    selected = {selected}
                    onChange={(e) => {
                        setGender(e.target.value);
                        setSelected(e.target.value);
                    }}
                />
                
                <InputBirthday 
                    onChange={(e) => {
                        setBirthday(e.target.value);
                    }}    
                />
                <br /><br />

                <InputTel
                    onChange={(e) =>{
                        setTel(e.target.value);
                    }}
                />
                <br /><br />

                <InputEmail
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <br /><br />
                
                <InputEtc
                    onChange={(e) => {
                        setEtc(e.target.value);
                    }}
                />
                <br /><br />
                <SaveBtn />
                <CancelBtn props={'learner'}/>
            </div>
            </div>
        </form>
    );
};