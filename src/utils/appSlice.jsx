// import { createSlice } from "@reduxjs/toolkit";

// const appSlice = createSlice({
//   name: "app",

//   initialState: {
//     open: false,
//     video: [],
//     category: "All",
//     searchSuggestion: [],
//     viewCount: "",
//   },
//   reducers: {
//     toggleSlider: (state) => {
//       state.open = !state.open;
//     },
//     setHomeVideo: (state, action) => {
//       state.video = action.payload;
//     },
//     setCategory: (state, action) => {
//       state.category = action.payload;
//     },
//     setSearchSuggestion: (state, action) => {
//       state.searchSuggestion = action.payload;
//     },
//     setViewCount: (state, action) => {
//       state.viewCount = action.payload;
//     },
//   },
// });

// export const {
//   toggleSlider,
//   setHomeVideo,
//   setCategory,
//   setSearchSuggestion,
//   setViewCount
// } = appSlice.actions;
// export default appSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",

  initialState: {
    open: false,
    video: [],
    category: "All",
    searchSuggestion: [],
    viewCount: "",
  },
  reducers: {
    toggleSlider: (state) => {
      state.open = !state.open;
    },
    setHomeVideo: (state, action) => {
      state.video = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchSuggestion: (state, action) => {
      state.searchSuggestion = action.payload;
    },
    setViewCount: (state, action) => {
      state.viewCount = action.payload;
    },
  },
});

export const {
  toggleSlider,
  setHomeVideo,
  setCategory,
  setSearchSuggestion,
  setViewCount,
} = appSlice.actions;
export default appSlice.reducer;
