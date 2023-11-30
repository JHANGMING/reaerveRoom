import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//裡面要帶三個參數
export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      /* 因為有設定baseUrl的關係，不用填寫完整的 API 網址。
      當呼叫該Function時，是去 https://jsonplaceholder.typicode.com/posts 取得資料 */
      query: () => "posts", // https://jsonplaceholder.typicode.com/posts
    }),
  }),
});

export const { useGetAllPostsQuery } = postsApi;