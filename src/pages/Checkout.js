const Checkout = () => {
  return (
    <main className="site-page section">
      <section className="container">
        <h1>Checkout</h1>
        <form className="checkout-form">
          <div className="checkout-form__info">
            <div>
              <input
                type="text"
                id="first_name"
                name="first_name"
                required
                placeholder="Nombre"
              />
              <input
                type="text"
                id="second_name"
                name="second_name"
                required
                placeholder="Segundo nombre"
              />
            </div>
          </div>
          <input
            type="email"
            required
            name="email"
            id="email"
            placeholder="Email"
          />
          <div>
            <select name="country" required id="country">
              <option value="argentina" selected>
                Argentina
              </option>
              <option value="brasil">Brasil</option>
              <option value="chile">Chile</option>
              <option value="uruguay">Uruguay</option>
              <option value="bolivia">Bolivia</option>
              <option value="paraguay">Paraguay</option>
            </select>
            <input
              type="text"
              required
              id="postal_code"
              name="postal_code"
              placeholder="Postal Code"
            />
          </div>
          <input type="tel" name="phone" id="phone" />
          <div className="checkout-form__payments">
            <input
              type="text"
              required
              id="credit_card"
              name="credit_card"
              placeholder="Credit Card"
            />
            <div>
              <input
                type="text"
                required
                id="security_code"
                name="security_code"
                placeholder="Security Code"
              />
              <input
                type="date"
                required
                name="expiration_date"
                id="expiration_date"
                placeholder="Expiration Date"
              />
            </div>
            <button type="submit">Finalizar compra</button>
          </div>
        </form>
        <article className="checkout-order"></article>
      </section>
    </main>
  );
};

export default Checkout;
