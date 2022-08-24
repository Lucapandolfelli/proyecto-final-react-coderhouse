import "./ItemList.scss";
import Item from "../Item/Item";

const ItemList = ({ products, category }) => {
  return (
    <>
      {products.map((product) => {
        return <Item key={product.id} data={product} category={category} />;
      })}
    </>
  );
};

export default ItemList;
