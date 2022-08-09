import "./ItemDetailContainer.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../utils/products.mock.js";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  const getProduct = new Promise((resolve, reject) => {
    setInterval(() => {
      resolve(products);
    });
  });

  useEffect(() => {
    getProduct.then((res) =>
      res.some((item) => {
        if (item.id == id) {
          setProductData(item);
        }
      })
    );
  }, [id]);

  return (
    <section className="item-detail-container">
      <ItemDetail data={productData} />
    </section>
  );
};

export default ItemDetailContainer;
