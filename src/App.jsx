import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

import { useSelector } from 'react-redux';

import './App.css';

function App() {

  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className={`app ${theme}`}>

      <Navbar />

      <main className="main-content">

        <h1>Bienvenue sur TechStore</h1>

        <p className="welcome-text">
          Découvrez nos produits informatiques.
        </p>

        <ProductList />

        <Cart />

      </main>

    </div>
  );
}

export default App;
