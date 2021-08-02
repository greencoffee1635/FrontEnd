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
    [getTourInfo.fulfilled]: (state, actions) => {
      console.log(actions);
    },
  },
});

export default detailSlice;
