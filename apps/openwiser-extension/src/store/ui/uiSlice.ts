import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isDrawerOpen: boolean;
}

const initialState: UIState = {
  isDrawerOpen: true,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsDrawerOpen: (store, { payload }: PayloadAction<boolean>) => {
      store.isDrawerOpen = payload;
    },
  },
});

export const { setIsDrawerOpen } = uiSlice.actions;

export default uiSlice.reducer;
