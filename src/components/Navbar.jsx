import { useSelector } from 'react-redux';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {

  // Récupérer le thème depuis Context API
  const { theme, toggleTheme } = useTheme();

  // Récupérer le nombre d'articles depuis Redux
  const totalCount = useSelector(
    (state) => state.cart.totalCount
  );

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>
          TechStore <span className="badge-mern">MERN S6</span>
        </h2>
      </div>

      <div className="nav-actions">

        <button
          className="btn-theme-toggle"
          onClick={toggleTheme}
        >
          {theme === 'light' ? '🌙 Mode Sombre' : '☀️ Mode Clair'}
        </button>

        <div className="cart-badge">
          🛒 <span className="badge-count">{totalCount}</span>
        </div>

      </div>
    </nav>
  );
}
