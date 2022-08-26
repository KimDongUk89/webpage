import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteBtn from "../Button/DeleteBtn";
import UpdateBtn from "../Button/UpdateBtn";

const LectureTableData = (props)=>{
  const history = useNavigate();

  function del(){
    if(window.confirm('삭제 하겠습니까?')){
      fetch(`http://localhost:3001/contract/${props.data.id}`,{
        method:'DELETE',
      }).then(res=>{
        if(res.ok){
          props.data.id = 0;
          history(`/Lecture-contract`);
        }
      })
    }
  }

  if(props.data.id===0){
    return null;
  }

  return (
      <tr key={props.data.id}>
        <td>{props.data.teacher_code}</td>
        <td>{props.data.name}</td>
        <td>{props.data.contract_name}</td>
        <td>{props.data.contract_file}</td>
        <td>{props.data.contract_date}</td>
        <td>{props.data.correction_date}</td>
        <td>{props.data.lecture_time}</td>
        <td>
          <UpdateBtn user={'contract'} id={props.data.teacher_code} />
          <DeleteBtn onClick={del} />
        </td>
      </tr>
  );
};

export default LectureTableData;