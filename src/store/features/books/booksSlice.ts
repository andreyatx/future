import { RootState } from "./../../store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  bookList: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    test: (state) => {
      console.log(state.isLoading);
    },
  },
});

export const booksActions = booksSlice.actions;
export const booksReducer = booksSlice.reducer;

export const booksSelectors = {
  all: (state: RootState) => state.books,
};
