import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ShowPwBtn from "../Button/ShowPwBtn";
import UpdateBtn from "../Button/UpdateBtn";
import DeleteBtn from "../Button/DeleteBtn";

const TeacherTableData = (props)=>{
  const history = useNavigate();
  const [showPwd, isShowPwd] = useState(false);

  function del(){
    if(window.confirm('삭제 하겠습니까?')){
      fetch(`http://localhost:3001/teacher/${props.data.id}`,{
        method:'DELETE',
      }).then(res=>{
        if(res.ok){
          props.data.id = 0;
          history(`/teacher`);
        }
      })
    }
  }

  if(props.data.id===0){
    return null;
  }

  const onShowPwd = () => {
    isShowPwd(!showPwd);
  };

  return (
      <tr key={props.data.id}>
        <td>{props.data.teacher_code}</td>
        <td>{props.data.id}</td>
        <td align="right">
          <ShowPwBtn 
            showPwd={showPwd}
            password={props.data.password}
            onClick={onShowPwd}
          />
        </td>
        <td>{props.data.name}</td>
        <td>{props.data.gender}</td>
        <td>{props.data.identification_num}</td>
        <td>{props.data.tel}</td>
        <td>{props.data.email}</td>
        <td>{props.data.lecture_contract}</td>
        <td>{props.data.etc}</td>
        <td>
          <UpdateBtn user={'teacher'} id={props.data.id} />
          <DeleteBtn onClick={del} />
        </td>
      </tr>
  );
};

export default TeacherTableData;