import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import products from "../../utils/products.mock.js";

const ItemListContainer = ({ sectionTitle }) => {
  const [listProducts, setListProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, [2000]);
  });

  useEffect(() => {
    getProducts
      .then((res) => setListProducts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="section">
      <h2 className="item-list-container__title">{sectionTitle}</h2>
      <div className="item-list-container__grid">
        <ItemList products={listProducts} />
      </div>
    </section>
  );
};

export default ItemListContainer;
