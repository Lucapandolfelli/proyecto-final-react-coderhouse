import "./ItemDetailContainer.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../utils/products.mock.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const foundProduct = products.find((product) => product.id == id);
    setProductData(foundProduct);
  }, []);

  return (
    <>
      <section className="item-detail-container">
        <ItemDetail data={productData} />
      </section>
      <ItemListContainer sectionTitle="Productos relacionados" />
    </>
  );
};

export default ItemDetailContainer;
