const InputLectureTime=(props) => {
    return (
        <>
            <h6 className="m-0 font-weight-bold text-primary">강의시간</h6>
            <input 
             type="number" 
             name="lecture_time"
             defaultValue={props.lecture_time}
             onChange={props.onChange}
             style={{width:"300px"}} 
            />
        </>
    )
}

export default InputLectureTime;