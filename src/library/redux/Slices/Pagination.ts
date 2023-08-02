import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface Pagination {
  page: number;
}

const initialState: Pagination = {
  page:1
}
export const Pagination = createSlice({
  name: "Pagination",
  initialState,
  reducers: {
    setPageCount: (state, action:PayloadAction<number>) => {
      state.page = action.payload;
    },
   
  },
});

export const { setPageCount } =
Pagination.actions;

export default Pagination.reducer;
