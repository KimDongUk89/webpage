import { Link } from "react-router-dom";



const ShowPwBtn = (props) => {
  return (
    <>
      {props.showPwd === false 
      ? (
        <span className="password">*****</span>
      ) 
      : (
        props.password
      )}

      <br />

      <button className="btn btn-sm btn-outline-info" onClick={props.onClick}>
        {props.showPwd === false ? "보기" : "숨기기"}
      </button>
    </>
  );
};
export default ShowPwBtn;
