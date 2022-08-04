import "./ItemDetail.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
  const {
    title,
    price,
    thumbnail,
    categoryId,
    category,
    description,
    stock,
    amountOfFees,
  } = data;

  const [quantitySelected, setQuantitySelected] = useState(0);

  return (
    <>
      <article className="item-detail">
        <div className="item-detail__image">
          <img src={thumbnail} alt={title} />
          <Link to={`/category/${categoryId}`}>
            <span className="item-detail__image--category">{category}</span>
          </Link>
          <div className="item-detail__image--description">
            <h3>Descripción</h3>
            <p>{description}</p>
          </div>
          <div className="item-detail__image--share">
            <h3>Compartir</h3>
            <ul>
              <a href="" target="_blank">
                <li>
                  <i className="fa-brands fa-facebook"></i>
                </li>
              </a>
              <a href="" target="_blank">
                <li>
                  <i className="fa-brands fa-instagram"></i>
                </li>
              </a>
              <a href="" target="_blank">
                <li>
                  <i className="fa-brands fa-twitter"></i>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="item-detail__info">
          <h2 className="item-detail__info--title">{title}</h2>
          <span className="item-detail__info--price">${price}</span>
          {/* .toLocaleString("es-AR", {
              currency: "ARS",
              style: "currency",
              maximumSignificantDigits: 3
            }) */}
          <div className="item-detail__info--payments">
            <p>
              <span>
                <i className="fa-solid fa-credit-card"></i> {amountOfFees}{" "}
                cuotas sin interés
              </span>
              de{" "}
              {Math.round(price / amountOfFees).toLocaleString("es-AR", {
                currency: "ARS",
                style: "currency",
              })}
            </p>
            <p>
              <span>
                <i className="fa-solid fa-money-bill-1-wave"></i> 10% de
                descuento
              </span>
              pagando en efectivo o con transferencia
            </p>
            <a href="">Ver más detalles</a>
          </div>
          {quantitySelected > 0 ? (
            <>
              <button className="btn">
                <Link to="/cart">Terminar compra</Link>
              </button>
              <button className="btn">
                <Link to="/productos">Seguir comprando</Link>
              </button>
            </>
          ) : (
            <ItemCount
              stock={stock}
              initial={1}
              quantitySelected={setQuantitySelected}
            />
          )}
          <div className="item-detail__info--shipping">
            <hr className="line" />
            <p>
              <span>
                <i className="fa-solid fa-truck"></i> Envío gratis
              </span>
              superando los $6.000
            </p>
            <div>
              <input type="text" placeholder="Tu código postal" />
              <button>Calcular</button>
            </div>
            <a
              href="https://www.correoargentino.com.ar/formularios/cpa"
              target="_blank"
            >
              No sé mi código
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ItemDetail;
