import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice.jsx";
import chatReducer from "./chatSlice.jsx";
const store = configureStore({
  reducer: {
    app: appReducer,
    chat: chatReducer,
  },
});

export default store;
