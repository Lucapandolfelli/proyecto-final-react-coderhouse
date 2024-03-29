import "./Checkout.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "../components/Cart/Cart";
import Success from "../components/Success/Success";
import db from "../utils/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Checkout = () => {
  const { cartProducts, totalPrice, clearCart } = useContext(CartContext);

  const [success, setSuccess] = useState();

  const [order, setOrder] = useState({
    items: cartProducts.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
      };
    }),
    buyer: {},
    total: totalPrice,
  });

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    postal_code: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const pushFormData = async (newOrder) => {
    const orderCollection = collection(db, "orders");
    const orderSnapshot = await addDoc(orderCollection, newOrder);
    setSuccess(orderSnapshot.id);
    console.log("orden cargada:", orderSnapshot);
    clearCart();
  };

  const submitUserInfo = (e) => {
    e.preventDefault();
    pushFormData({ ...order, buyer: formData });
  };

  return (
    <main className="site-page section">
      <section className="container">
        {/* <h1>Carrito</h1> */}
        {success ? (
          <Success orderId={success} />
        ) : (
          <div className="checkout">
            <form className="checkout-form" onSubmit={submitUserInfo}>
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
                      id="first_name"
                      name="first_name"
                      required={true}
                      placeholder="Pepito"
                      value={formData.first_name}
                      onChange={handleChange}
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
                      value={formData.last_name}
                      onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                      value={formData.country}
                      onChange={handleChange}
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
                      value={formData.postal_code}
                      onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
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
                      id="security_code"
                      name="security_code"
                      placeholder="000"
                    />
                  </div>
                  <div>
                    <label htmlFor="expiration_date">
                      Fecha de vencimiento
                    </label>
                    <input
                      type="text"
                      name="expiration_date"
                      id="expiration_date"
                      /* pattern="\d{1,2}/\d{1,2}/\d{4}" */
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
              {cartProducts.length > 0 ? (
                <Cart />
              ) : (
                <div className="empty-cart">
                  <p>Tu carrito está vacío</p>
                  <div>
                    <span>¿No sabés qué comprar?</span>
                    <Link to="/productos">Encontrá tus productos</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
      {console.log(order)}
    </main>
  );
};

export default Checkout;
