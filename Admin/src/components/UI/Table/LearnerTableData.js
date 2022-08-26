import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ShowPwBtn from "../Button/ShowPwBtn";
import DeleteBtn from "../Button/DeleteBtn";
import UpdateBtn from "../Button/UpdateBtn";

const LearnerTableData = (props)=>{
  const history = useNavigate();
  const [showPwd, isShowPwd] = useState(false);

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

  const onShowPwd = () => {
    isShowPwd(!showPwd);
  };

  if(props.data.id===0){
    return null;
  }

  return (
      <tr key={props.data.id}>
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
        <td>{props.data.birthday}</td>
        <td>{props.data.tel}</td>
        <td>{props.data.email}</td>
        <td>{props.data.etc}</td>
        <td>
          <UpdateBtn user="learner" id={props.data.id} />
          <DeleteBtn onClick={del} />
        </td>
      </tr>
  );
};

export default LearnerTableData;