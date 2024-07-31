import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    setMessage: (state, action) => {
      state.messages.slice(10, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { setMessage } = chatSlice.actions;
export default chatSlice.reducer;
