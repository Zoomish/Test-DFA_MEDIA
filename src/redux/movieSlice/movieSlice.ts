import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IMovieState {
  authState: boolean;
}

const initialState: IMovieState = {
  authState: false,
};

export const movieSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMovieState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
  },
});

export const { setMovieState } = movieSlice.actions;
export const authReducer = movieSlice.reducer;
