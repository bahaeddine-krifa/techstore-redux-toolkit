import { createSlice } from '@reduxjs/toolkit';

// 1. État initial avec récupération depuis localStorage
const initialState = {
  items: JSON.parse(
    localStorage.getItem('techstore_cart')
  ) || [],

  totalCount: 0,
  totalPrice: 0
};

// 2. Recalculer les totaux et sauvegarder
const recalculateTotals = (state) => {

  state.totalCount = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  state.totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  localStorage.setItem(
    'techstore_cart',
    JSON.stringify(state.items)
  );
};

// Recalculer les totaux au premier chargement
recalculateTotals(initialState);

// 3. Création du Slice
export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {

    // Ajouter un produit
    addItem: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }

      recalculateTotals(state);
    },

    // Diminuer ou supprimer un produit
    removeItem: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload
      );

      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }

      recalculateTotals(state);
    },

    // Vider le panier
    clearCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;

      localStorage.setItem(
        'techstore_cart',
        JSON.stringify(state.items)
      );
    }
  }
});

// 4. Exporter les actions
export const {
  addItem,
  removeItem,
  clearCart
} = cartSlice.actions;

// 5. Exporter le reducer
export default cartSlice.reducer;
