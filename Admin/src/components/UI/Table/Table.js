import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { DataTable } from "simple-datatables";
import useFetch from "../../../hooks/useFetch";
import LearnerTableData from "./LearnerTableData";
import Scheme from "./Scheme";

const Table = (props) => {

  const words = useFetch(`http://localhost:3001/learner`);
  console.log(words)


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
          {words.map(data=>(<LearnerTableData data={data} />))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;