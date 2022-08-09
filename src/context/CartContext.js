import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  const countTotalShop = (price, quantity) => {
    setTotalPrice((totalPrice + price) * quantity);
  };

  const removeItemOfCart = (prod_id) => {
    setCartProducts((prevState) =>
      prevState.filter((item) => item.id !== prod_id)
    );
  };

  const data = {
    cartProducts,
    addProductToCart,
    setTotalPrice,
    totalPrice,
    countTotalShop,
    removeItemOfCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;

export { CartContext };
