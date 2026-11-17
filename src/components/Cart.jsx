import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import {
  addItem,
  removeItem,
  clearCart,
  applyPromoCode
} from '../redux/cartSlice';

export default function Cart() {
  
  // Récupérer dispatch
  const dispatch = useDispatch();

  const [promoCode, setPromoCode] = useState('');

  // Lire les données du panier depuis Redux
  const { items, totalCount, totalPrice, discountPercent } = useSelector(
    (state) => state.cart
  );

  const discountAmount = totalPrice * discountPercent / 100;

  const finalPrice = totalPrice - discountAmount;

  const handleApplyPromo = () => {
    dispatch(applyPromoCode(promoCode));
  };


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

      <div className="promo-section">
        <h3>Code Promo</h3>

        <input
          type="text"
          placeholder="Entrez votre code promo"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />

        <button onClick={handleApplyPromo}>
          Appliquer
        </button>
      </div>
      {discountPercent > 0 && (
        <div className="discount-result">
          <p>
            Remise ({discountPercent}%) :
            -{discountAmount.toFixed(2)} DT
          </p>

          <h3>
            Total après remise : {finalPrice.toFixed(2)} DT
          </h3>
        </div>
      )}
    </div>
  );
}
