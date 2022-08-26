import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import InputTeacherCode from "../UI/Input/InputTeacherCode";
import InputContractName from "../UI/Input/InputContractName";
import InputContractDate from "../UI/Input/InputContractDate";
import InputLectureTime from "../UI/Input/InputLectureTime";
import InputContractFile from "../UI/Input/InputContractFile";

export default function Contract_create(){
    const history = useNavigate();

    const [teacher_code, setTeacher_code] = useState("");
    const [name, setName] = useState("");
    const [contract_name, setContract_name] = useState("");
    const [contract_date, setContract_date] = useState("");
    const [lecture_time, setLecture_time] = useState(0);
    const [contract_file, setContract_file] = useState("");

    function onSubmitHandler(e){
        e.preventDefault();
        fetch(`http://localhost:3001/contract/`,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                teacher_code:teacher_code,
                name:name,
                contract_name:contract_name,
                contract_date:contract_date,
                correction_date : "",
                lecture_time:lecture_time,
                contract_file:contract_file
            }),
        }).then(res =>{
            if(res.ok){
                alert('생성이 완료되었습니다.');
                history(`/Lecture-contract`);
            }
        })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="container-fluid px-4">
            <h1 className="mt-4">강의 계약서 추가</h1><br />

            <div className="card-body">
                <InputTeacherCode
                    mode = {'create'}
                    onChange={(e) => {
                        setTeacher_code(e.target.value);
                    }}
                />
                <br />
                <InputName
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <br />
                <InputContractName 
                    onChange={(e) => {
                        setContract_name(e.target.value);
                    }}
                />
                <br />

                <InputContractDate
                    onChange={(e) => {
                        setContract_date(e.target.value);
                    }}
                />
                <br /><br />
                <InputLectureTime 
                    onChange={(e) => {
                        setLecture_time(e.target.value);
                    }}
                />
                <br /><br />
                <InputContractFile
                    onChange={(e) => {
                        setContract_file(e.target.value);
                    }}
                />
                <br /><br />
                
                <SaveBtn />
                <CancelBtn props={'Lecture-contract'} />
            </div>
            </div>
        </form>
    );
};