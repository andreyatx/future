import { booksThunks } from "./booksThunks";
import { RootState } from "./../../store";
import { createSlice } from "@reduxjs/toolkit";

type booksState = {
  isLoading: boolean;
  totalBooks: number | null;
  bookList: [];
};

const initialState = {
  isLoading: false,
  totalBooks: null,
  bookList: [],
} as booksState;

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    test: (state) => {
      console.log(state.isLoading);
    },
  },
  extraReducers(builder) {
    builder.addCase(booksThunks.getBooks.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(booksThunks.getBooks.fulfilled, (state, { payload }) => {
      state.bookList = payload.items;
      state.totalBooks = payload.totalItems;
      console.log("payload", payload);

      state.isLoading = false;
    });
  },
});

export const booksActions = booksSlice.actions;
export const booksReducer = booksSlice.reducer;

export const booksSelectors = {
  all: (state: RootState) => state.books,
};
