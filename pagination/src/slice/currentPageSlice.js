import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.value = action.payload + 1;
    },
  },
});

export const { setCurrentPage } = currentPageSlice.actions;
export default currentPageSlice.reducer;
