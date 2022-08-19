import Table from "../UI/Table/Table";
import TableCard from "../UI/Table/TableCard";
import TableCardHeader from "../UI/Table/TableCardHeader";
import { TEARNER_SCHEME } from "../Data/UserTitle"


const Teacher = () => {
  return (
    <main>
      <div className="container-fluid px-4">
        <h1 className="mt-4">강의자 관리</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item">
            <a href="index.html">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">강의자 관리</li>
        </ol>

        <TableCard className="mb-4">
          <TableCardHeader name="강의자" />
          <Table scheme={TEARNER_SCHEME} />
        </TableCard>

        {/* <div style="height: 20vh"></div> */}
        <div className="card mb-4">
          <div className="card-body">
            When scrolling, the navigation stays at the top of the page. This is
            the end of the static navigation demo.
          </div>
        </div>
      </div>
    </main>
  );
};

export default Teacher;
