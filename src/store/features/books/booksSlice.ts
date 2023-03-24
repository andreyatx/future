import { booksThunks, SearchQuery } from "./booksThunks";
import { RootState } from "./../../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OPTIONS } from "../../../pages/SearchPage/SearchForm/constants";
import { BookProps } from "../../../components/Book/Book";

type BookRequest = {
  items: BookProps[];
  totalItems: number;
};

type booksState = {
  currentQuery: SearchQuery;
  isLoading: boolean;
  totalBooks: number | null;
  bookList: BookProps[];
};

const initialQuery: SearchQuery = {
  searchText: "",
  category: OPTIONS.CATEGORIES[0],
  sort: OPTIONS.SORTING[0],
  startIndex: 0,
};

const initialState = {
  currentQuery: initialQuery,
  isLoading: false,
  totalBooks: null,
  bookList: [],
} as booksState;

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentQuery.startIndex += 30;
    },
    setCurrentQuery: (state, { payload }) => {
      state.currentQuery = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(booksThunks.getBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      booksThunks.getBooks.fulfilled,
      (state, { payload }: PayloadAction<BookRequest>) => {
        state.bookList.push(...(payload.items as BookProps[]));
        state.totalBooks = payload.totalItems;

        state.isLoading = false;
      }
    );
  },
});

export const booksActions = booksSlice.actions;
export const booksReducer = booksSlice.reducer;

export const booksSelectors = {
  all: (state: RootState) => state.books,
};
