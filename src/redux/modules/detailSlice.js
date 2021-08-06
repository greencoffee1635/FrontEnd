import { createSlice } from "@reduxjs/toolkit";
import { getTourInfo } from "../async/detail";

const initialState = {
  isLoading: false,
  tourList: [],
  error: null,
};

const detailSlice = createSlice({
  name: "detail",
  initialState: initialState,
  reducers: {
    addTourList: (state, action) => {
      state.tourList = action.payload;
    },
  },
  extraReducers: {
    [getTourInfo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTourInfo.fulfilled]: (state, action) => {
      state.tourList = action.payload.data;
      state.isLoading = false;
    },
    [getTourInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default detailSlice;
