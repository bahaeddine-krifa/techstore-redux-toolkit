import { createSlice } from '@reduxjs/toolkit';

// 1. État initial : lecture du localStorage UNE SEULE FOIS au chargement
//    (même logique que l'ancien ThemeProvider, mais hors composant)
const initialState = {
  mode: localStorage.getItem('app_theme') || 'light', // 'light' | 'dark'
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Pas besoin de payload : on inverse simplement la valeur courante
    toggleTheme: (state) => {
      // Grâce à Immer, cette "mutation" produit un snapshot immuable
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      // Persistance (même pattern que le Défi 1 du panier)
      localStorage.setItem('app_theme', state.mode);
    },
    // Bonus : forcer un thème précis, ex. dispatch(setTheme('dark'))
    setTheme: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem('app_theme', state.mode);
    },
  },
});

// Créateurs d'actions générés automatiquement
export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;