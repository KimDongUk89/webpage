import { Link } from "react-router-dom";

const LearnerTableData = (props)=>{



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
          <Link to="/learner-rewirte" class="btn btn-outline-primary btn-xs">수정</Link>
          <button class="btn btn-outline-danger btn-xs">삭제</button>
        </td>
      </tr>
  );
};

export default LearnerTableData;