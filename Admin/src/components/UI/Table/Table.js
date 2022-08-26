import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { DataTable } from "simple-datatables";
import useFetch from "../../../hooks/useFetch";
import LearnerTableData from "./LearnerTableData";
import TeacherTableData from "./TeacherTableData";
import LectureTableData from "./LectureTableData";
import Scheme from "./Scheme";

const Table = (props) => {

  const words = useFetch(`http://localhost:3001/${props.type}`);

  useEffect(() => {
    const datatablesSimple = document.getElementById("datatablesSimple");
    if (datatablesSimple) {
      new DataTable(datatablesSimple);
    }
  }, []);

  return (
    <div className="card-body">
      <table id="datatablesSimple">
        <Scheme scheme={props.scheme} />
        <tbody id="tuple">
        {
          props.type === 'learner'
          ? words.map(data=>(<LearnerTableData data={data} />))
          : (props.type === 'teacher'
              ? words.map(data=>(<TeacherTableData data={data} />))
              : words.map(data=>(<LectureTableData data={data} />))
            )
        }
          
        </tbody>
      </table>
    </div>
  );
};

export default Table;