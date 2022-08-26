import { useNavigate } from "react-router-dom";

const CancelBtn = (props) => {
  const history = useNavigate();
  function onCancle(){
    if(window.confirm('취소하겠습니까?')){
        history(`/${props.props}`);
    }
}
  return (
    <button type="button" id="Cancel" onClick={onCancle} className="btn btn-danger btn-xs">
      취소
    </button>
  );
};
export default CancelBtn;
