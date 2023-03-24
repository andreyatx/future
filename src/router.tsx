import { createBrowserRouter } from "react-router-dom";
import { BookList } from "./pages/BookList/BookList";
import { BookPage } from "./pages/BookPage/BookPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";

export enum Paths {
  Home = "/",
  BookList = "/search-results",
  Book = "/book/:bookid",
}

export const router = createBrowserRouter([
  {
    element: <SearchPage />,
    path: Paths.Home,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <BookList />,
        path: Paths.BookList,
      },
      {
        element: <BookPage />,
        path: Paths.Book,
      },
    ],
  },
]);
