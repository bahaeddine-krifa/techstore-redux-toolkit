import { useSelector, useDispatch } from 'react-redux';

import {
  addItem,
  removeItem,
  clearCart
} from '../redux/cartSlice';

export default function Cart() {

  // Lire les données du panier depuis Redux
  const { items, totalCount, totalPrice } = useSelector(
    (state) => state.cart
  );

  // Récupérer dispatch
  const dispatch = useDispatch();

  return (
    <div className="cart-card">

      <div className="cart-header">
        <h2>🛒 Mon Panier Redux</h2>

        {items.length > 0 && (
          <button
            className="btn-clear"
            onClick={() => dispatch(clearCart())}
          >
            Vider le panier
          </button>
        )}
      </div>

      {items.length === 0 ? (

        <p className="empty-cart">
          Le panier est actuellement vide.
        </p>

      ) : (

        <>

          {items.map((item) => (

            <div key={item.id} className="cart-row">

              <div className="cart-item-info">

                <strong>{item.name}</strong>

                <span>
                  {item.price} DT × {item.quantity}
                </span>

              </div>

              <div className="cart-controls">

                <button
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => dispatch(addItem(item))}
                >
                  +
                </button>

              </div>

            </div>

          ))}

          <div className="cart-summary">

            <p>
              Nombre total d'articles :
              <strong> {totalCount}</strong>
            </p>

            <p>
              Montant total :
              <strong> {totalPrice} DT</strong>
            </p>

          </div>

        </>

      )}

    </div>
  );
}
