import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IFilterState {
  release_year: number;
  genre: string;
  sort_by: string;
  vote_average: number;
}

const initialState: IFilterState = {
  release_year: new Date().getFullYear(),
  genre: "",
  sort_by: "",
  vote_average: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setYearState: (state, action: PayloadAction<number>) => {
      state.release_year = action.payload;
    },
    setGenreState: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setSortState: (state, action: PayloadAction<string>) => {
      state.sort_by = action.payload;
    },
    setRatingState: (state, action: PayloadAction<number>) => {
      state.vote_average = action.payload;
    },
  },
});

export const { setYearState, setGenreState, setSortState, setRatingState } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
