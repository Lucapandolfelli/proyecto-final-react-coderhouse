import "./Checkout.scss";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "../components/Cart/Cart";

const Checkout = () => {
  const { cartProducts, setTotalPrice, totalPrice, removeItemOfCart } =
    useContext(CartContext);

  return (
    <main className="site-page section">
      <section className="container">
        <h1>Checkout</h1>
        <div className="checkout">
          <form className="checkout-form">
            <p className="checkout-form__title">
              <span>1</span>
              Información personal
            </p>
            <div className="checkout-form__info">
              <div className="checkout-form__group">
                <div>
                  <label htmlFor="first_name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required={true}
                    placeholder="Pepito"
                  />
                </div>
                <div>
                  <label htmlFor="second_name">Apellido</label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    required={true}
                    placeholder="Perez"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  required={true}
                  name="email"
                  id="email"
                  placeholder="pepito@gmail.com"
                />
              </div>
              <div className="checkout-form__group">
                <div>
                  <label htmlFor="country">Pais</label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    required={true}
                    placeholder="Argentina"
                  />
                </div>
                <div>
                  <label htmlFor="postal_code">Codigo postal</label>
                  <input
                    type="text"
                    required={true}
                    id="postal_code"
                    name="postal_code"
                    placeholder="1823"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone">Telefono</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required={true}
                  placeholder="Número de teléfono"
                />
              </div>
            </div>
            <p className="checkout-form__title">
              <span>2</span>
              Información de pago
            </p>
            <div className="checkout-form__payments">
              <div>
                <label htmlFor="credit_card">Tarjeta de credito</label>
                <input
                  type="text"
                  required={true}
                  id="credit_card"
                  name="credit_card"
                  placeholder="0000 - 0000 - 0000 - 0000"
                />
              </div>
              <div className="checkout-form__group">
                <div>
                  <label htmlFor="security_code">Codigo de seguridad</label>
                  <input
                    type="text"
                    required={true}
                    id="security_code"
                    name="security_code"
                    placeholder="000"
                  />
                </div>
                <div>
                  <label htmlFor="expiration_date">Fecha de vencimiento</label>
                  <input
                    type="text"
                    required={true}
                    name="expiration_date"
                    id="expiration_date"
                    pattern="\d{1,2}/\d{1,2}/\d{4}"
                    placeholder="00 / 00 / 0000"
                  />
                </div>
              </div>
              <button type="submit" className="checkout-form__payments--btn">
                Finalizar compra
              </button>
            </div>
          </form>
          <div className="checkout-order">
            {cartProducts.length > 0 ? <Cart /> : <p>Carrito vacio</p>}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
