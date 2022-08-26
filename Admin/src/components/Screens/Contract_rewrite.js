import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
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
import InputContractDate from "../UI/Input/InputContractDate";
import InputLectureTime from "../UI/Input/InputLectureTime";
import InputContractFile from "../UI/Input/InputContractFile";
import InputContractName from "../UI/Input/InputContractName";


const Contract_rewrite = () =>{
    const {teacher_code} = useParams();
    
    const data = useFetch(`http://localhost:3001/contract?teacher_code=${teacher_code}`)[0];
    const history = useNavigate();
    const [isLoading, setisLoading] = useState(false);
    const [name, setName] = useState("");
    const [contract_name, setContract_name] = useState("");
    const [contract_date, setContract_date] = useState("");
    const [contract_file, setContract_file] = useState("");
    const [lecture_time, setLecture_time] = useState("");

    useEffect(() => {
        setName(data?.name);
        setContract_name(data?.contract_name);
        setContract_date(data?.contract_date);
        setContract_file(data?.contract_file);
        setLecture_time(data?.lecture_time);
    },[
        data?.name,
        data?.contract_name,
        data?.contract_date,
        data?.contract_file,
        data?.lecture_time,
    ]);
   
    function onSubmitHandler(e){
        e.preventDefault();

        fetch(`http://localhost:3001/contract/${data?.id}`,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                teacher_code:data?.teacher_code,
                name : name,
                contract_name : contract_name,
                contract_date : contract_date,
                correction_data:'',
                lecture_time :lecture_time,
                contract_file:contract_file
            }),
        }).then(res =>{
            alert("수정이 완료되었습니다.");
            history(`/lecture-contract`);
        });
    }

    return (
        <form onSubmit={onSubmitHandler}>
          <div className="container-fluid px-4">
            <h1 className="mt-4">강의 계약서 수정</h1>

            <div className="card-body">
                <InputTeacherCode
                    mode={'rewrite'}
                    teacher_code={teacher_code}
                />
                <br />
                <InputName 
                    name={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <br />
                <InputContractName 
                    contract_name={contract_name}
                    onChange={(e) => {
                        setContract_name(e.target.value);
                    }}
                />
                <br />
                <InputContractDate 
                    contract_date = {contract_date}
                    onChange={(e) => {
                        setContract_date(e.target.value);
                    }}
                />
                <br /><br />
                <InputLectureTime 
                    lecture_time = {lecture_time}
                    onChange={(e) => {
                        setLecture_time(e.target.value);
                    }}
                />
                <br /><br />
                <InputContractFile 
                    contract_file = {contract_file}
                    onChange={(e) => {
                        setContract_file(e.target.value);
                    }}
                />
                <br /><br />
                <SaveBtn />
                <CancelBtn 
                    props={'lecture-contract'}
                />
            </div>
          </div>
        </form>
      );
};

export default Contract_rewrite;