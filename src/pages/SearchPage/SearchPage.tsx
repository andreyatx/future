import { FC } from "react";
import { Outlet } from "react-router-dom";
import { BookList } from "../../components/BookList/BookList";
import { Loader } from "../../components/Loader/Loader";
import { booksSelectors } from "../../store/features/books/booksSlice";
import { useAppSelector } from "../../store/hooks";
import { SEARCH } from "./SearchForm/constants";
import { SearchForm } from "./SearchForm/SearchForm";
import styles from "./SearchPage.module.css";

export const SearchPage: FC = () => {
  const { isLoading, totalBooks } = useAppSelector(booksSelectors.all);
  return (
    <>
      <div className={styles.searchContainer}>
        <h1
          onClick={() => {
            window.location.reload();
          }}
          className={styles.heading}
        >
          {SEARCH.HEADING}
        </h1>

        <SearchForm />
      </div>
      <Outlet />
      {isLoading && !totalBooks ? <Loader /> : <BookList />}
    </>
  );
};
