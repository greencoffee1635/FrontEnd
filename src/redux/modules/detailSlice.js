import { createSlice } from "@reduxjs/toolkit";
import { getTourInfo } from "../async/detail";

const initialState = {
  isFetching: false,
  tourList: [],
  error: null,
};

const detailSlice = createSlice({
  name: "detail",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getTourInfo.pending]: (state, action) => {
      state.isFetching = true;
    },
    [getTourInfo.fulfilled]: (state, action) => {
      state.tourList = action.payload.data;
      state.isFetching = false;
    },
  },
});

export default detailSlice;
