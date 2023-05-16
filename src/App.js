
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './css/styles.css';
import './css/normalize.css'
import ItemDetailContainer from './components/ItemsDetailContainer/ItemsDetailContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer 
        greeting={'Bienvenido a la tienda de tu sueños'}
      />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
