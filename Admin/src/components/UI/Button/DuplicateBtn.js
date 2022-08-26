import { useState } from "react";

const DuplicateBtn = (props) => {
    const [isDuplicated, setIsDuplicated] = useState(true);
    const onCheckDuplicate = () =>{
        fetch(`http://localhost:3001/${props.props}/${props.id}`).then(res=>{
            if(res.status===404){
                props.setIsDuplicated(false);
                alert("사용 가능한 ID입니다.");
            } else{
                props.setIsDuplicated(true);
                alert("중복된 ID입니다.");
            }
        }
        );
    };

    return (
        <button type="button" className="btn btn-outline-primary" onClick={onCheckDuplicate}>중복확인</button>
        
    );
}

export default DuplicateBtn;