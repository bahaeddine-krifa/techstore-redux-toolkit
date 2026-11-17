import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

// Catalogue des produits
const PRODUCTS = [
  {
    id: 1,
    name: 'Ecran UltraWide 4K 34"',
    price: 850,
    category: 'Affichage'
  },
  {
    id: 2,
    name: 'Clavier Mecanique RGB',
    price: 180,
    category: 'Peripherique'
  },
  {
    id: 3,
    name: 'Souris Sans Fil Ergonomique',
    price: 95,
    category: 'Accessoire'
  },
  {
    id: 4,
    name: 'Casque Haute Fidelite ANC',
    price: 320,
    category: 'Audio'
  }
];

export default function ProductList() {

  // Récupérer la fonction dispatch
  const dispatch = useDispatch();

  return (
    <div className="product-section">

      <h2>Nos produits</h2>

      <div className="product-grid">

        {PRODUCTS.map((product) => (

          <div key={product.id} className="product-card">

            <span className="product-category">
              {product.category}
            </span>

            <h3>{product.name}</h3>

            <p className="product-price">
              {product.price} DT
            </p>

            <button
              className="btn-add"
              onClick={() => dispatch(addItem(product))}
            >
              + Ajouter au panier
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}
