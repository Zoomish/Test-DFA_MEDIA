import { TMovieFull, TMovieShort } from "@/utils/typesFromBackend";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IMovieState {
  movie: TMovieFull;
  movies: TMovieShort[];
  searchedMovies: TMovieShort[];
}

const initialState: IMovieState = {
  movie: {} as TMovieFull,
  movies: [],
  searchedMovies: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieState: (state, action: PayloadAction<TMovieFull>) => {
      state.movie = action.payload;
    },
    setMoviesState: (state, action: PayloadAction<Array<TMovieShort>>) => {
      state.movies = action.payload;
    },
    setsearchedMoviesState: (state, action: PayloadAction<Array<TMovieShort>>) => {
      state.searchedMovies = action.payload;
    },
  },
});

export const { setMovieState } = movieSlice.actions;
export const { setMoviesState } = movieSlice.actions;
export const { setsearchedMoviesState } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
