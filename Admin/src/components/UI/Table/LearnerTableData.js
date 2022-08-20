import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LearnerTableData = (props)=>{
  const history = useNavigate();

  function del(){
    if(window.confirm('삭제 하겠습니까?')){
      fetch(`http://localhost:3001/learner/${props.data.id}`,{
        method:'DELETE',
      }).then(res=>{
        if(res.ok){
          props.data.id = 0;
          history(`/learner`);
        }
      })
    }
  }

  return (
      <tr key={props.data.id}>
        <td>{props.data.id}</td>
        <td>{props.data.password}</td>
        <td>{props.data.name}</td>
        <td>{props.data.gender}</td>
        <td>{props.data.birthday}</td>
        <td>{props.data.tel}</td>
        <td>{props.data.email}</td>
        <td>{props.data.etc}</td>
        <td>
          <Link to={`/Learner-rewrite/${props.data.id}`} className="btn btn-outline-primary btn-xs">수정</Link>
          <button onClick={del} className="btn btn-outline-danger btn-xs">삭제</button>
        </td>
      </tr>
  );
};

export default LearnerTableData;