import "./counter.css";

const Counter = ({ title, number, eventColor }) => {
  return (
    <div className="counter">
      <p className="counter-number" style={{ backgroundColor: eventColor }}>
        {number}
      </p>
      <p className="counter-text">{title}</p>
    </div>
  );
};

export default Counter;
