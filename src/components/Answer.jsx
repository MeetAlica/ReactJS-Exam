const Answer = ({ correct, onClick, text }) => {
  const backgroundColor =
    correct == true ? "green" : correct == false ? "red" : "transparent";

  return (
    <div onClick={onClick} style={{ backgroundColor }}>
      <p>{text}</p>
    </div>
  );
};

export default Answer;
