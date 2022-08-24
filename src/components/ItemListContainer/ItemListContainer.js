import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const ItemListContainer = ({ sectionTitle }) => {
  const [listProducts, setListProducts] = useState([]);
  const [category, setCategory] = useState({});

  const { categoryId } = useParams();

  const getProducts = async () => {
    const productsCollection = collection(db, "products");
    const productsSnapshot = await getDocs(productsCollection);
    const productsList = productsSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return productsList;
  };

  const getProductsByCategory = async (id) => {
    const q = query(
      collection(db, "products"),
      where("categoryId", "==", parseInt(id, 10))
    );
    const productsByCategorySnapshot = await getDocs(q);
    const productsList = productsByCategorySnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return productsList;
  };

  const getCategoryById = async (id) => {
    const categoriesCollection = collection(db, "categories");
    const categoriesSnapshot = await getDocs(categoriesCollection);
    const categoriesList = categoriesSnapshot.docs.map((doc) => {
      let category = doc.data();
      category.id = doc.id;
      return category;
    });
    return categoriesList.find((item) => item.id === id);
  };

  useEffect(() => {
    if (!categoryId) {
      getProducts()
        .then((res) => setListProducts(res))
        .catch((err) => console.log(err));
    } else {
      getCategoryById(categoryId)
        .then((res) => setCategory(res))
        .catch((err) => console.log(err));
      getProductsByCategory(categoryId)
        .then((res) => setListProducts(res))
        .catch((err) => console.log(err));
    }
  }, [categoryId]);

  return (
    <section className="item-list-container">
      <h2 className="item-list-container__title">
        {sectionTitle ? `${sectionTitle}` : "Productos"}
      </h2>
      <div className="item-list-container__grid">
        {listProducts.length > 0 ? (
          <ItemList products={listProducts} category={category} />
        ) : (
          <p>No se han encontrado productos de esta categoría.</p>
        )}
      </div>
    </section>
  );
};

export default ItemListContainer;
