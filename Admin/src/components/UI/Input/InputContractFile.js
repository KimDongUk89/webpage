const InputContractFile=(props) => {
    return (
        <>
            <h6 className="m-0 font-weight-bold text-primary">강의 계약서</h6>
            <input
            type="file"
            defaultValue={props.contract_file}
            onChange={props.onChange}
            name="file" />
        </>
    )
}

export default InputContractFile;