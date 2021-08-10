import { createSlice } from "@reduxjs/toolkit";
import { getTourInfo, getOneTour } from "../async/detail";

const initialState = {
  isLoading: false,
  tourList: [],
  whatElse: [],
  detailInfo: [],
  trash: [],
  error: null,
};

const detailSlice = createSlice({
  name: "detail",
  initialState: initialState,
  reducers: {
    addTourList: (state, action) => {
      state.tourList.course = action.payload;
    },
    addTrash: (state, action) => {
      state.trash = action.payload;
    },
    emptyTrash: (state, action) => {
      state.trash = [];
    },
  },
  extraReducers: {
    [getTourInfo.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getTourInfo.fulfilled]: (state, action) => {
      state.tourList = action.payload.data[0];
      state.whatElse = action.payload.data[1];
      state.isLoading = false;
      state.error = null;
    },
    [getTourInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    [getOneTour.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getOneTour.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.detailInfo = action.payload;
    },
    [getOneTour.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default detailSlice;
