const InputContractDate = (props) => {
    return (
      <>
        <h6 className="m-0 font-weight-bold text-primary">계약일자</h6>
        <input
          type="date"
          name="contract_date"
          style={{ width: "300px" }}
          defaultValue={props.contract_date}
          onChange={props.onChange}
        />
      </>
    );
  };
  export default InputContractDate;
  