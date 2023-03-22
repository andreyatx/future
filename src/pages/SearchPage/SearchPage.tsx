import { FC } from "react";
import { Outlet } from "react-router-dom";
import { api } from "../../api";
import { Select } from "../../components/Select";
import styles from "./SearchPage.module.css";

const HEADING = "Search for books";
const CATEGORIES = "Categories";
const SORTING = "Sorting by";

const CATEGORIES_OPTIONS = [
  "all",
  "art",
  "biography",
  "computers",
  "history",
  "medical",
  "poetry",
];

const SORTING_OPTIONS = ["relevance", "newest"];

export const SearchPage: FC = () => {
  api.get(
    `/books/v1/volumes?q=flowers+inauthor:keyes&key=${process.env.REACT_APP_API_KEY}`
  );
  return (
    <div className={styles.searchContainer}>
      <h1>{HEADING}</h1>
      <input type="search" className={styles.searchBar} />
      <div className={styles.selectContainer}>
        <Select name={CATEGORIES} options={CATEGORIES_OPTIONS} />
        <Select name={SORTING} options={SORTING_OPTIONS} />
      </div>
      <Outlet />
    </div>
  );
};
