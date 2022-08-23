import "./ItemDetailContainer.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../utils/products.mock.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import db from "../../utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  const getProductById = async () => {
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);
    let product = docSnapshot.data();
    product.id = docSnapshot.id;
    return product;
  };

  /* const getProduct = new Promise((resolve, reject) => {
    setInterval(() => {
      resolve(products);
    });
  }); */

  useEffect(() => {
    getProductById().then((res) => setProductData(res));
  }, [id]);

  return (
    <section className="item-detail-container">
      <ItemDetail data={productData} />
    </section>
  );
};

export default ItemDetailContainer;
