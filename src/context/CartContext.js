import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (product) => {
    let isInCart = cartProducts.find((cartItem) => cartItem.id === product.id);
    if (!isInCart) {
      setTotalProducts(totalProducts + product.quantity);
      setCartProducts([...cartProducts, product]);
    }
  };

  const countTotalShop = (price, quantity) => {
    setTotalPrice((totalPrice + price) * quantity);
  };

  const removeItemOfCart = (product) => {
    setCartProducts(
      (prevState) => prevState.filter((item) => item.id !== product.id),
      setTotalProducts(totalProducts - product.quantity),
      setTotalPrice(totalPrice - product.price * product.quantity)
    );
  };

  const clearCart = () => {
    setCartProducts([]);
    setTotalPrice(0);
    setTotalProducts(0);
  };

  const data = {
    cartProducts,
    addProductToCart,
    setTotalPrice,
    totalPrice,
    countTotalShop,
    removeItemOfCart,
    totalProducts,
    clearCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;

export { CartContext };
