import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import themeReducer from './themeSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
    ui: uiReducer
  }
});
