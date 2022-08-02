import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <main className="site-page">
        <div className="container">
          <ItemListContainer sectionTitle="Productos populares" />
        </div>
      </main>
    </>
  );
};

export default Home;
