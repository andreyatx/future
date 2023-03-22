import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { BookPage } from "./pages/BookPage/BookPage";

export enum Paths {
  Home = "/",
  Book = "/:bookid",
}

const router = createBrowserRouter([
  {
    element: <SearchPage />,
    path: "/",
    children: [
      {
        element: <BookPage />,
        path: "/book/:bookid",
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
