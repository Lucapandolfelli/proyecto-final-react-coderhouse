import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategoryById } from "../helpers";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Categories = () => {
  const { categoryId } = useParams();
  const [categoryName, setCategoryName] = useState({});

  useEffect(() => {
    getCategoryById(categoryId)
      .then((res) => setCategoryName(res))
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <main className="site-page section">
      <section className="container">
        <CategoryList />
        <hr className="line" />
        <ItemListContainer sectionTitle={`Categoría: ${categoryName.name}`} />
      </section>
    </main>
  );
};

export default Categories;
