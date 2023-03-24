import { BookProps } from "./../../../components/Book/Book";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api";

export type SearchQuery = {
  searchText: string;
  category: string;
  sort: string;
  startIndex: number;
};

const getBooks = createAsyncThunk("books/get", async (data: SearchQuery) => {
  const maxResults = 30;
  const searchText = data.searchText;
  const orderBy = data.sort;
  const subject = data.category;
  const startIndex = data.startIndex;

  const searchQuery = `/books/v1/volumes?q=${searchText}&orderBy=${orderBy}&key=${process.env.REACT_APP_API_KEY}&subject=${subject}&maxResults=${maxResults}&startIndex=${startIndex}`;

  const response = await api.get(searchQuery);

  return response.data;
});

const loadMoreBooks = createAsyncThunk(
  "books/loadmore",
  async (data: SearchQuery) => {
    const maxResults = 30;
    const searchText = data.searchText;
    const orderBy = data.sort;
    const subject = data.category;
    const startIndex = data.startIndex;
    const searchQuery = `/books/v1/volumes?q=${searchText}&orderBy=${orderBy}&key=${process.env.REACT_APP_API_KEY}&subject=${subject}&maxResults=${maxResults}&startIndex=${startIndex}`;

    const response = await api.get(searchQuery);

    return response.data;
  }
);

const getBookById = createAsyncThunk("books/bookid", async (id: string) => {
  const query = `/books/v1/volumes/${id}?key=${process.env.REACT_APP_API_KEY}`;
  const response = await api.get(query);

  return response.data as BookProps;
});

export const booksThunks = { getBooks, getBookById, loadMoreBooks };
