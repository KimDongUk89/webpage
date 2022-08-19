const TableCardHeader = (props) => {
  return (
    <div className="card-header">
      <div className="d-flex align-items-center justify-content-between mt-2 mb-0 col-xs">
        <div>
          <i className="fas fa-table me-1"></i> {props.name}
        </div>

        <div className="justify-content-end">
          <button id="Add" className="btn btn-primary btn-xs">
            추가
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableCardHeader;
