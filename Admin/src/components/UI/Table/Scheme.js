const Scheme = (props) => {
  const head = props.scheme.map((item) => <th>{item}</th>);

  return (
    <>
      <thead>
        <tr>{head}</tr>
      </thead>

      <tfoot>
        <tr>{head}</tr>
      </tfoot>
    </>
  );
};

export default Scheme;
