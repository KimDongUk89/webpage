const Scheme = (props) => {
  const head = props.scheme.map((item) => <th>{item}</th>);

  return (
    <>
      <thead>
        <tr key={'column'}>{head}</tr>
      </thead>

      <tfoot>
        <tr key={'column'}>{head}</tr>
      </tfoot>
    </>
  );
};

export default Scheme;
