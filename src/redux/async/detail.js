import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTourInfo = createAsyncThunk(
  "detail/info",
  async (data, thunkAPI) => {
    const response = await axios({
      url: "https://initserver.herokuapp.com/detail/category?cat2=C0114&lat=37.6383101&lng=127.0218905&areaCode=1,2&contentType=25",
      method: "get",
    });

    return response.data;
  }
);
