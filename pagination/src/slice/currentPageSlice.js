import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.value = action.payload;
    },
    setPrevGroup: (state) => {
      state.value -= 5;
    },
    setNextGroup: (state) => {
      state.value += 5;
    },
  },
});

export const { setCurrentPage, setPrevGroup, setNextGroup } =
  currentPageSlice.actions;
export default currentPageSlice.reducer;
