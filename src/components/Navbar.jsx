import { useSelector,useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

export default function Navbar() {

  // Récupérer le thème depuis Context API
  const theme = useSelector((state) => state.theme.mode);
  const totalCount = useSelector((state) => state.cart.totalCount);

  const dispatch = useDispatch();


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
          onClick={() => dispatch(toggleTheme())}
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
