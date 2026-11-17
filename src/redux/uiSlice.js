import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  visible: false
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,

  reducers: {
    // Afficher une notification
    showToast: (state, action) => {
      state.message = action.payload;
      state.visible = true;
    },

    // Masquer la notification
    hideToast: (state) => {
      state.message = '';
      state.visible = false;
    }
  }
});

export const { showToast, hideToast } = uiSlice.actions;

export default uiSlice.reducer;
