const Button = ({fetchNew, setFetchNew }) => {
  return (
    <div className="btn-container">
      <button
        className="btn"
        onClick={() => {
          setFetchNew(!fetchNew);
        }}
      >
        New activity
      </button>
    </div>
  );
};

export default Button;
