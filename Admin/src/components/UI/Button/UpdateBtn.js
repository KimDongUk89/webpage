import { Link } from "react-router-dom";
const UpdateBtn = (props) => {
  return (
    <Link
      to={`/${props.user}-rewrite/${props.id}`}
      className="btn btn-outline-primary btn-xs"
    >
      수정
    </Link>
  );
};
export default UpdateBtn;
