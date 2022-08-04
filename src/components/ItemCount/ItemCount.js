import "./ItemCount.scss";
import { useState } from "react";

const ItemCount = ({ stock, initial, quantitySelected }) => {
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

  const onAdd = () => {
    quantitySelected(counter);
  };

  return (
    <div className="counter-item">
      <div className="counter">
        <button onClick={decrease}>-</button>
        <span>{counter}</span>
        <button onClick={increase}>+</button>
      </div>
      <span>{`${stock} productos disponibles`}</span>
      <button className="btn" onClick={onAdd}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default ItemCount;
