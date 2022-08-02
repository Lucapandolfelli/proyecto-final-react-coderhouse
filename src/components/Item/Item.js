import "./Item.scss";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  const { id } = data;
  return (
    <Link to={`/item/${id}`}>
      <article className="product-card">
        <div className="product-card__image">
          <img src={data.thumbnail} alt={data.title} />
        </div>
        <div className="product-card__content">
          <h4>{data.price}</h4>
          <span>{data.category}</span>
        </div>
      </article>
    </Link>
  );
};

export default Item;
