const InputTeacherCode = (props) => {
  return (
    <>
      <h6 className="m-0 font-weight-bold text-primary">강의자 코드</h6>
      {
        props.mode === "create"
        ? <input
          type="text"
          className="form-control"
          id="Teacher code"
          name="teacher_code"
          placeholder="강의자 코드"
          maxLength="16"
          onChange={props.onChange}
          style={{ width: "300px" }}
        />
      :
        <input
          type="text"
          className="form-control"
          id="Teacher code"
          defaultValue={props.teacher_code}
          name="teacher_code"
          readOnly
          placeholder="강의자 코드"
          maxLength="16"
          onChange={props.onChange}
          style={{ width: "300px" }}
        />
      
      }
    </>
  );
};

export default InputTeacherCode;
