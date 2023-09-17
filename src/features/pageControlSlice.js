import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offSetY: 0,
  widthScreen: null
};

export const pageControl = createSlice({
  name: "pageControl",
  initialState,
  reducers: {
    setOffSetY: (state, action) => {
      state.offSetY = action.payload;
    },
    setWidthScreen: (state, action) => {
      state.widthScreen = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { offSetY, widthScreen, setOffSetY, setWidthScreen } = pageControl.actions;

export default pageControl.reducer;
