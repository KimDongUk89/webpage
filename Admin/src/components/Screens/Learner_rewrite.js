import Table from "../UI/Table/Table";
import TableCard from "../UI/Table/TableCard";
import TableCardHeader from "../UI/Table/TableCardHeader";
import { LEARNER_SCHEME } from "../Data/UserTitle"
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";


const Learner_rewrite = () =>{
    const {id} = useParams();
    const data = useFetch(`http://localhost:3001/learner?id=${id}`)[0];
    const [selected, setSeleted] = useState('');

    useEffect(()=>{
        setSeleted(data?.gender);
    }, [data?.gender]);

    const handleChange = e=>{
        if(selected==='남'){
            setSeleted('여');
        }else{
            setSeleted('남');
        }
    }

    return (
        <main>
          <div className="container-fluid px-4">
            <h1 className="mt-4">학습자 수정</h1>

            <div className="card-body">
                <h6 className="m-0 font-weight-bold text-primary">ID</h6>
                <input type="text" className="form-control" name="learner_id" defaultValue={data?.id} style={{width:"300px"}} readOnly /><br />

                <h6 className="m-0 font-weight-bold text-primary">비밀번호</h6>
                <input type="password" className="form-control" id="Pwd" placeholder="비밀번호" name="password"
                   maxLength="16" required="required"
                   pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$"
                   style={{width:"300px", display:"inline-block"}}></input>
                <span style={{display:"inline-block"}}>(최소 8자리에서 최대 16자리까지 숫자, 영문, 특수문자 각 1개 이상 포함)</span><br /><br />

                <h6 className="m-0 font-weight-bold text-primary">이름</h6>
                <input type="text" className="form-control" id="Lname" name="lname" defaultValue={data?.name} maxLength="10" required="required" style={{width:"300px"}} /><br />

                <h6 className="m-0 font-weight-bold text-primary">성별</h6>
                <input type="radio" name="Gender" value="남" checked={selected==='남'} onChange={handleChange} />남 
                <input type="radio" name="Gender" value="여" checked={selected==='여'} onChange={handleChange} />여<br /><br />

                <h6 className="m-0 font-weight-bold text-primary">생일</h6>
                <input type="date" name="birthday" style={{width:"300px"}} /><br /><br />

                <h6 className="m-0 font-weight-bold text-primary">전화번호</h6>
                <input type="tel" className="form-control" pattern="^[0-9]+$" style={{width:"300px", display:"inline-block"}} name="Tel" />
                <span style={{display:"inline-block"}}>( '-' 없이 입력해주세요.)</span><br /><br />

                <h6 className="m-0 font-weight-bold text-primary">Email</h6>
                <input type="text" className="form-control" name="email" id="Email" style={{width:"300px", display:"inline-block"}} /><br /><br />

                <h6 className="m-0 font-weight-bold text-primary">기타</h6>
                <textarea name="etc" cols="37" rows="10" ></textarea><br /><br />

                <button id="Save" type="submit" className="btn btn-primary btn-xs">
                저장
                </button>
                <button type="button" id="Cancel" className="btn btn-danger btn-xs">
                취소
                </button>
            </div>
          </div>
        </main>
      );
};

export default Learner_rewrite;