
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './css/styles.css';
import './css/normalize.css'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer 
        greeting={'Bienvenido a la tienda de tu sueños'}
      />
    </div>
  );
}

export default App;
