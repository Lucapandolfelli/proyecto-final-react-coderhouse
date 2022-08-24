import "./Item.scss";
import { Link } from "react-router-dom";
import { changePriceFormat } from "../../helpers";

const Item = ({ data, category }) => {
  const { id, title, price, thumbnail, amountOfFees } = data;
  return (
    <Link to={`/item/${id}`}>
      <article className="product-card line">
        <div className="product-card__image">
          <img src={thumbnail} alt={title} />
          <Link to={`/category/${category.id}`}>
            <span>{category.name}</span>
          </Link>
        </div>
        <div className="product-card__content">
          <h3>{title}</h3>
          <span>{changePriceFormat(price)}</span>
          <p>
            <span>en {amountOfFees}x sin interés</span>
            de {changePriceFormat(Math.round(price / amountOfFees))}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Item;
