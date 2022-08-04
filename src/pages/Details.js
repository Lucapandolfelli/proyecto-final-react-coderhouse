import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Details = () => {
  return (
    <main className="site-page section">
      <div className="container">
        <ItemDetailContainer />
        <hr className="line" />
        <ItemListContainer sectionTitle="Productos relacionados" />
      </div>
    </main>
  );
};

export default Details;
