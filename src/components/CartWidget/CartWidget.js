import "./CartWidget.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useContext(CartContext);
  return (
    <button className="cart-widget">
      <i className="fa-solid fa-cart-shopping"></i>
      {totalProducts !== 0 && <span>{totalProducts}</span>}
    </button>
  );
};

export default CartWidget;
