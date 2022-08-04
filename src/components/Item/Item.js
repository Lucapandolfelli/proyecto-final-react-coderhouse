import "./Item.scss";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  const { id, title, price, categoryId, category, thumbnail, amountOfFees } =
    data;
  return (
    <Link to={`/item/${id}`}>
      <article className="product-card line">
        <div className="product-card__image">
          <img src={thumbnail} alt={title} />
          <Link to={`/category/${categoryId}`}>
            <span>{category}</span>
          </Link>
        </div>
        <div className="product-card__content">
          <h3>{title}</h3>
          <span>${price}</span>
          <p>
            <span>en {amountOfFees}x sin interés</span>
            de{" "}
            {Math.round(price / amountOfFees).toLocaleString("es-AR", {
              currency: "ARS",
              style: "currency",
            })}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Item;
