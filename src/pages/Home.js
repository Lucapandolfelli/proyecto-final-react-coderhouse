import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Hero from "../components/Hero/Hero";
import CategoryList from "../components/CategoryList/CategoryList";

const Home = () => {
  return (
    <>
      <Hero />
      <main className="site-page section">
        <div className="container">
          <CategoryList />
          <hr className="line" />
          <ItemListContainer sectionTitle="Productos populares" />
        </div>
      </main>
    </>
  );
};

export default Home;
