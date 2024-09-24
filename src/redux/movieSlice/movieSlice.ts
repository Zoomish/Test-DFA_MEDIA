import { TMovieFull, TMovieShort } from "@/utils/typesFromBackend";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IMovieState {
  movie: TMovieFull;
  movies: TMovieShort[];
  searchedMovies: TMovieShort[];
  filteredMovies: TMovieShort[];
}

const initialState: IMovieState = {
  movie: {} as TMovieFull,
  movies: [],
  searchedMovies: [],
  filteredMovies: [],
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
      state.filteredMovies = action.payload;
      state.searchedMovies = action.payload;
    },
    setSearchedMoviesState: (
      state,
      action: PayloadAction<Array<TMovieShort>>
    ) => {
      state.searchedMovies = action.payload;
    },
    setFilteredMoviesState: (
      state,
      action: PayloadAction<Array<TMovieShort>>
    ) => {
      state.filteredMovies = action.payload;
    },
  },
});

export const {
  setMovieState,
  setMoviesState,
  setSearchedMoviesState,
  setFilteredMoviesState,
} = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
