import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTourInfo = createAsyncThunk(
  "detail/data",
  async (data, thunkAPI) => {
    const response = await axios({
      url: "https://initserver.herokuapp.com/detail/search",
      method: "post",
      data: {
        category: ["C0113", "C0114"],
        areaCode: [1, 2],
        lat: 37.6403324,
        lng: 126.9380102,
        contentType: 25,
      },
    });

    // console.log("detail", response.data);

    return response.data;
  }
);
