import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CategoryList from "../components/CategoryList/CategoryList";

const Categories = () => {
  return (
    <main className="site-page section">
      <section className="container">
        <CategoryList />
        <hr className="line" />
        <ItemListContainer sectionTitle="Productos de category" />
      </section>
    </main>
  );
};

export default Categories;
