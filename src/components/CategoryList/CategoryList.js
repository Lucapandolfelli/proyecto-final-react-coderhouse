import "./CategoryList.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const categoriesCollection = collection(db, "categories");
    const categoriesSnapshot = await getDocs(categoriesCollection);
    const categoriesList = categoriesSnapshot.docs.map((doc) => {
      let category = doc.data();
      category.id = doc.id;
      return category;
    });
    setCategories(categoriesList);
    return categoriesList;
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="category-list">
      <ul className="category-list__container">
        {categories.map((category) => {
          return (
            <Link to={`/category/${category.id}`} key={category.id}>
              <li className="category-list__container--item">
                {category.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
