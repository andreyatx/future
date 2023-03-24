import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { BookPage } from "./pages/BookPage/BookPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BookList } from "./pages/BookList/BookList";

export enum Paths {
  Home = "/",
  BookList = "/search-results",
  Book = "/book/:bookid",
}

const router = createBrowserRouter([
  {
    element: <SearchPage />,
    path: Paths.Home,
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
