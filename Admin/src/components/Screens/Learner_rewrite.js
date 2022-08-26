import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useInput from "../../hooks/useInput";
import { useEffect, useState } from "react";
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

const Learner_rewrite = () => {
  const { id } = useParams();
  const history = useNavigate();
  const data = useFetch(`http://localhost:3001/learner?id=${id}`)[0];
  //Get방식

  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [etc, setEtc] = useState("");

  useEffect(() => {
    setGender(data?.gender);
    setName(data?.name);
    setEmail(data?.email);
    setTel(data?.tel);
    setBirthday(data?.birthday);
    setEtc(data?.etc);
  }, [
    data?.gender,
    data?.name,
    data?.email,
    data?.tel,
    data?.birthday,
    data?.etc,
  ]);

  function onSubmit(event) {
    event.preventDefault();

    fetch(`http://localhost:3001/learner/${data?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        password: password,
        name: name,
        gender: gender,
        birthday: birthday,
        tel: tel,
        email: email,
        etc: etc,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        alert("수정이 완료되었습니다.");
        history("/learner");
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="container-fluid px-4">
        <h1 className="mt-4">학습자 수정</h1>

        <div className="card-body">
          <InputID id={data?.id} />
          <br /><br />
          <InputPassword 
            Password={password}
            onChange={(e) =>{
                setPassword(e.target.value);
            }}
           />
          <br />
          <br />
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
          <br />
          <br />
          <InputBirthday
            Birthday={birthday}
            onChange={(e) => {
              setBirthday(e.target.value);
            }}
          />
          <br />
          <br />
          <InputTel
            tel={tel}
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
          <br />
          <br />
          <InputEmail
            email={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <InputEtc
            etc={etc}
            onChange={(e) => {
              setEtc(e.target.value);
            }}
          />
          <br />
          <br />
          <SaveBtn />
          <CancelBtn 
            props={'learner'}
            />
        </div>
      </div>
    </form>
  );
};

export default Learner_rewrite;
