import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface SearchItem {
  item: string;
}

const initialState: SearchItem = {
    item:""
}
export const SearchItem = createSlice({
  name: "SearchItem",
  initialState,
  reducers: {
    setSearchItems: (state, action:PayloadAction<string>) => {
      state.item = action.payload;
    },
   
  },
});

export const { setSearchItems } =
SearchItem.actions;

export default SearchItem.reducer;
