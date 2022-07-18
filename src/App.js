import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
    return (
        <>
            <Navbar />
            <ItemListContainer sectionTitle="Productos populares" />
        </>
    );
}

export default App;
