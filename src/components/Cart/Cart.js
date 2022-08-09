import "./Cart.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { changePriceFormat } from "../../helpers";

const Cart = () => {
  const { cartProducts, totalPrice } = useContext(CartContext);

  const tax = 5;

  const addTax = (tax) => {
    return Math.round((totalPrice * tax) / 100);
  };

  const total = totalPrice + addTax(tax);

  return (
    <article className="cart">
      <p className="cart__title">Tu orden</p>
      <div className="cart__list">
        <ul>
          {cartProducts.map((product) => {
            return <ItemCart product={product} />;
          })}
        </ul>
      </div>
      <div className="cart__total">
        <div className="cart__total--group">
          <p>Total de la compra</p>
          <span>{changePriceFormat(totalPrice)}</span>
        </div>
        <div className="cart__total--group">
          <p>Impuesto estimado ({tax}%)</p>
          <span>{changePriceFormat(addTax(tax))}</span>
        </div>
        <div className="cart__total--group total">
          <p>Total</p>
          <span>{changePriceFormat(total)}</span>
        </div>
      </div>
    </article>
  );
};

export default Cart;
