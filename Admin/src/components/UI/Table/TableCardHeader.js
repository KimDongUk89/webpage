import { Link } from "react-router-dom";

const TableCardHeader = (props) => {
  return (
    <div className="card-header">
      <div className="d-flex align-items-center justify-content-between mt-2 mb-0 col-xs">
        <div>
          <i className="fas fa-table me-1"></i> {props.name}
        </div>

        <div className="justify-content-end">
          <Link to={`/${props.type}-create`} id="Add" className="btn btn-primary btn-xs">
            추가
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TableCardHeader;
