import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./slice/roomSlice"
import { postsApi } from "./api/apiSlice";

export const store= configureStore({
  reducer:{
    room:roomReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(postsApi.middleware),
})