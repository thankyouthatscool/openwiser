import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isDrawerOpen: boolean;
  timeFormatString: string;
}

const initialState: UIState = {
  isDrawerOpen: false,
  timeFormatString: "H:mm",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsDrawerOpen: (store, { payload }: PayloadAction<boolean>) => {
      store.isDrawerOpen = payload;
    },
    setTimeFormatString: (store, { payload }: PayloadAction<string>) => {
      store.timeFormatString = payload;
    },
  },
});

export const { setIsDrawerOpen, setTimeFormatString } = uiSlice.actions;

export default uiSlice.reducer;
