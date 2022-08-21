import { createStore } from "redux";

// 리듀서
const uploadReducer = (state = { isUpload: false }, action) => {
  if (action.type === "uploadBefore") {
    return { isUpload: false };
  }

  if (action.type === "uploadAfter") {
    return { isUpload: true };
  }

  return state;
};

// 스토어
const store = createStore(uploadReducer);

export default store;
