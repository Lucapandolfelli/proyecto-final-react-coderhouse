import "./ItemCart.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { changePriceFormat } from "../../helpers";

const ItemCart = ({ product }) => {
  const { totalPrice, setTotalPrice, removeItemOfCart } =
    useContext(CartContext);

  const handleRemoveButton = (product) => {
    removeItemOfCart(product);
    setTotalPrice(totalPrice - product.price * product.quantity);
  };

  return (
    <li className="item-cart" key={product.id}>
      <div className="item-cart__card">
        <div className="item-cart__image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="item-cart__info">
          <div>
            <p>{product.title}</p>
            <small>Cantidad: {product.quantity}</small>
          </div>
          <span>{changePriceFormat(product.price * product.quantity)}</span>
        </div>
      </div>
      <button
        className="item-cart__button"
        onClick={() => handleRemoveButton(product)}
      >
        Eliminar producto
      </button>
    </li>
  );
};

export default ItemCart;
