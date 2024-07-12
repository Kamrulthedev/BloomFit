import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  tagTypes: ["FitNess"],
  endpoints: (builder) => ({
    getFIt: builder.query({
      query: () => ({
        method: "/POST",
        url: "/fit",
      }),
      providesTags: ["FitNess"],
    }),
  }),
});

export const { useGetFItQuery } = baseApi;
