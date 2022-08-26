import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputTeacherCode from "../UI/Input/InputTeacherCode";
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
import InputSsnum from "../UI/Input/InputSsnum";
import DuplicateBtn from "../UI/Button/DuplicateBtn";
import InputIdentification from "../UI/Input/InputIdentification";
import InputContractFile from "../UI/Input/InputContractFile";


export default function Teacher_create(){
    const history = useNavigate();

    const [teacher_code, setTeacher_code] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [selected, setSelected] = useState("");
    const [identification_num, setIdentification_num] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [lecture_contract, setLecture_contract] = useState("");
    const [etc, setEtc] = useState("");

    const [isDuplicated, setIsDuplicated] = useState(true);

    function onSubmitHandler(e){
        e.preventDefault();
        if(!isDuplicated){
            fetch(`http://localhost:3001/teacher/`,{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    teacher_code : teacher_code,
                    id : id,
                    password : password,
                    name : name,
                    gender : gender,
                    identification_num:identification_num,
                    tel : tel,
                    email : email,
                    lecture_contract : lecture_contract,
                    etc : etc
                }),
            }).then(res =>{
                if(res.ok){
                    alert('생성이 완료되었습니다.');
                    history(`/teacher`);
                }
            });
        } else{
            alert("아이디 중복확인해주세요");
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="container-fluid px-4">
            <h1 className="mt-4">강의자 추가</h1><br />

            <div className="card-body">
                <InputTeacherCode 
                    mode={"create"}
                    onChange={(e) => {
                        setTeacher_code(e.target.value);
                    }}
                />
                <br />
                <InputID
                    mode={"create"}
                    onChange={(e) => {
                        setId(e.target.value);
                    }}
                />
                <DuplicateBtn
                    props={'teacher'}
                    id={id}
                    setIsDuplicated={setIsDuplicated}
                    />
                <br /><br />

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
                <br /><br />
                <InputIdentification
                    onChange={(e) => {
                        setIdentification_num(e.target.value);
                    }}
                />
                <br />
                <InputTel
                    onChange={(e) => {
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
                <InputContractFile 
                    onChange={(e) => {
                        setLecture_contract(e.target.value);
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
                <CancelBtn props={'teacher'} />
            </div>
            </div>
        </form>
    );
};