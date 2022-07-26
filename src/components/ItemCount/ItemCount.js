import "./ItemCount.scss";
import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial);

  const increase = () => {
    setCounter(counter + 1);
    if (counter === stock) {
      setCounter(stock);
    }
  };

  const decrease = () => {
    setCounter(counter - 1);
    if (counter === initial) {
      setCounter(initial);
    }
  };

  return (
    <div className="counter-item">
      <h4>Counter</h4>
      <div className="counter">
        <button onClick={decrease}>-</button>
        <span>{counter}</span>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;
