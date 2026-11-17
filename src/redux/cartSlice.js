import { createSlice } from '@reduxjs/toolkit';

// 1. État initial du panier
const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0
};

// 2. Fonction pour recalculer les totaux
const recalculateTotals = (state) => {
  state.totalCount = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  state.totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
};

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

    // Diminuer la quantité ou supprimer le produit
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

    // Vider complètement le panier
    clearCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    }
  }
});

// 4. Exporter les actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// 5. Exporter le reducer
export default cartSlice.reducer;
