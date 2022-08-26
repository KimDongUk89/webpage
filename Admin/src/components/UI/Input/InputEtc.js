const InputID = (props) => {
  return (
    <>
      <h6 className="m-0 font-weight-bold text-primary">기타</h6>
      <textarea
        name="etc"
        cols="37"
        rows="10"
        defaultValue={props.etc}
        onChange={props.onChange}
      ></textarea>
    </>
  );
};

export default InputID;
