import { configureStore } from "@reduxjs/toolkit";
import Pagination from "./Slices/Pagination";
import SearchItem from "./Slices/SearchItems";

// import slice

export const store = configureStore({
  reducer: {
    pagination: Pagination,
    searchItems: SearchItem,
  },
});
