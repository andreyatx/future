import { FC } from "react";
import { Outlet } from "react-router-dom";
import { BookList } from "../../components/BookList/BookList";
import { SEARCH } from "./SearchForm/constants";
import { SearchForm } from "./SearchForm/SearchForm";
import styles from "./SearchPage.module.css";

export const SearchPage: FC = () => {
  return (
    <>
      <div className={styles.searchContainer}>
        <h1>{SEARCH.HEADING}</h1>
        <SearchForm />
      </div>
      <Outlet />
      <BookList />
    </>
  );
};
