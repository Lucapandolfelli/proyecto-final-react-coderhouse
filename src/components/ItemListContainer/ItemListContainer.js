import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../utils/products.mock.js";

const ItemListContainer = ({ sectionTitle }) => {
  const [listProducts, setListProducts] = useState([]);
  const { categoryId } = useParams();
  const filterByCategoryId = products.filter(
    (product) => product.categoryId == categoryId
  );

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryId) {
        if (filterByCategoryId.length > 0) {
          resolve(filterByCategoryId);
        } else {
          resolve([]);
        }
      } else {
        resolve(products);
      }
    });
  });

  useEffect(() => {
    getProducts
      .then((res) => setListProducts(res))
      .catch((err) => console.log(err));
  }, [listProducts, setListProducts]);

  return (
    <section className="item-list-container">
      <h2 className="item-list-container__title">
        {sectionTitle ? `${sectionTitle}` : "Productos"}
      </h2>
      <div className="item-list-container__grid">
        {listProducts.length > 0 ? (
          <ItemList products={listProducts} />
        ) : (
          <p>No se han encontrado productos de esta categoría.</p>
        )}
      </div>
    </section>
  );
};

export default ItemListContainer;
