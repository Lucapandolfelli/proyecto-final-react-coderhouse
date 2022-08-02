import "./ItemDetail.scss";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  return (
    <article className="item-detail">
      <div className="item-detail__image">
        <img src={data.thumbnail} alt={data.title} />
      </div>
      <div className="item-detail__info">
        <Link to={`/category/:id`}>
          <span className="item-detail__info--category">{data.category}</span>
        </Link>
        <h2 className="item-detail__info--title">{data.title}</h2>
        <span className="item-detail__info--price">{data.price}</span>
        <p className="item-detail__info--description">{data.description}</p>
      </div>
    </article>
  );
};

export default ItemDetail;
