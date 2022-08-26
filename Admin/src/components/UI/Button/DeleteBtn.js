const CancelBtn = (props) => {
  return (
    <button onClick={props.onClick} className="btn btn-outline-danger btn-xs">
      삭제
    </button>
  );
};
export default CancelBtn;
