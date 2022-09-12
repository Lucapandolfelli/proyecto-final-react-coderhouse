import "./ItemNotFound.scss";

const ItemNotFound = () => {
  return (
    <div className="item-not-found">
      <div className="item-not-found__image">
        <img src="/assets/icons/sad-emoji.svg" alt="Item not found" />
      </div>
      <div className="item-not-found__text">
        <p>No se han encontrado productos de esta categoría.</p>
      </div>
    </div>
  );
};

export default ItemNotFound;
