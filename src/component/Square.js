const Square = ({ onClick, value }) => {
  return (
    <button className="btn btn-primary square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
