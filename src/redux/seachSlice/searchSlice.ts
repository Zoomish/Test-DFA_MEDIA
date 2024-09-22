import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface ISearchState {
  search: string;
}

const initialState: ISearchState = {
  search: ''
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchState: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearchState } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
