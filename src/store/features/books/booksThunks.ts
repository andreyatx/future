import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api";

export type SearchQuery = {
  searchText: string;
  category: string;
  sort: string;
};

const getBooks = createAsyncThunk("books/get", async (data: SearchQuery) => {
  const maxResults = 30;
  const searchText = data.searchText;
  const orderBy = data.sort;
  const subject = data.category;

  api.get(
    `/books/v1/volumes?q=${searchText}&orderBy=${orderBy}&key=${process.env.REACT_APP_API_KEY}&subject=${subject}&maxResults=${maxResults}`
  );
});

export const booksThunks = { getBooks };
