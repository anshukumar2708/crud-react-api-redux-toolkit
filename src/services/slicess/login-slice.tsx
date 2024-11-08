import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postData } from "../api";

export const loginApi = createAsyncThunk("login", postData);

const initialState = {
  profile: {},
  loading: false,
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginApi.fulfilled, (state, action) => {
      console.log("action", action);
      state.loading = false;
      state.profile = action.payload;
      // if (action.payload.accessToken) {
      //   localStorage.setItem("token", action.payload.accessToken);
      // }
    });
    builder.addCase(loginApi.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred";
      console.log(action);
    });
  },
});

export default loginSlice.reducer;
