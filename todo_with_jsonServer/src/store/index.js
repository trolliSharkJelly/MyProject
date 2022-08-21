import { configureStore, createSlice } from "@reduxjs/toolkit";

const uploadSlice = createSlice({
  name: "upload",
  initialState: { isUpload: false },
  reducers: {
    uploadBefore(state) {
      state.isUpload = false;
    },
    uploadAfter(state) {
      state.isUpload = true;
    },
  },
});

// 스토어
const store = configureStore({ reducer: uploadSlice.reducer });

export const uploadAction = uploadSlice.actions;

export default store;
