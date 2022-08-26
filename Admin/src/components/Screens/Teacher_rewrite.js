import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import InputID from "../UI/Input/InputID";
import useInput from "../../hooks/useInput";
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
import InputIdentification from "../UI/Input/InputIdentification";
import InputContractFile from "../UI/Input/InputContractFile";

const Teacher_rewrite = () =>{
    const { id } = useParams();
    const data = useFetch(`http://localhost:3001/teacher?id=${id}`)[0];
    const history = useNavigate();

    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [identification_num, setIdentification_num] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [contract_file, setContract_file] = useState("");
    const [etc, setEtc] = useState("");


    useEffect(() => {
        setName(data?.name);
        setGender(data?.gender);
        setIdentification_num(data?.identification_num);
        setTel(data?.tel);
        setEmail(data?.email);
        setContract_file(data?.lecture_contract);
        setEtc(data?.etc);
      }, [
        data?.name,
        data?.gender,
        data?.identification_num,
        data?.tel,
        data?.email,
        data?.lecture_contract,
        data?.etc,
      ]);

    function onSubmitHandler(event){
        event.preventDefault();
        
        fetch(`http://localhost:3001/teacher/${data?.id}`,{
            method : "PUT",
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                teacher_code : data?.teacher_code,
                id : id,
                password : password,
                name : name,
                gender : gender,
                identification_num:identification_num,
                tel : tel,
                email : email,
                lecture_contract : contract_file,
                etc : etc,
            }),
        }).then((res) =>{
            res.json();
        }).then((data) => {
            alert("수정이 완료되었습니다.");
            history(`/teacher`);
        });
    }

    return (
        <form onSubmit={onSubmitHandler}>
          <div className="container-fluid px-4">
            <h1 className="mt-4">강의자 수정</h1>

            <div className="card-body">
                <InputTeacherCode 
                    mode={"rewrite"}
                    teacher_code={data?.teacher_code}
                />
                <br />
                <InputID
                    mode={"rewrite"}
                    id={data?.id}
                />
                <br /><br />
                <InputPassword 
                    onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                />
                <br /><br />

                <InputName 
                    name={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <br />
                <InputGender
                    selected={gender}
                    onChange={(e) => {
                        setGender(e.target.value);
                    }}
                />
                <br /><br />
                <InputIdentification 
                    identification_num={identification_num}
                    onChange={(e) => {
                        setIdentification_num(e.target.value);
                    }}
                />
                <br />
                <InputTel 
                    tel={tel}
                    onChange={(e) => {
                        setTel(e.target.value);
                    }}
                />
                <br /><br />
                <InputEmail
                    email={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <br /><br />
                <InputContractFile
                    contract_file={contract_file}
                    onChange={(e) => {
                        setContract_file(e.target.value);
                    }}
                />
                <br /><br />
                <InputEtc 
                    etc={etc}
                    onChange={(e) => {
                        setEtc(e.target.value);
                    }}
                />
                <br /><br />
                <SaveBtn />
                <CancelBtn
                    props={'teacher'}
                />
            </div>
          </div>
        </form>
      );
};

export default Teacher_rewrite;