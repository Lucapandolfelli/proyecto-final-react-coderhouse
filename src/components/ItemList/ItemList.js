import "./ItemList.scss";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return <Item key={product.id} data={product} />;
      })}
    </>
  );
};

export default ItemList;
