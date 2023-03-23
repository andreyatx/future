import { FC, FormEvent, useState } from "react";
import { Outlet } from "react-router-dom";
import { api } from "../../api";
import { Select } from "../../components/Select";
import styles from "./SearchPage.module.css";
import SearchIcon from "../../assets/SearchIcon.svg";
import { OPTIONS, SEARCH } from "./constants";

export const SearchPage: FC = () => {
  const [query, setQuery] = useState();

  api.get(
    `/books/v1/volumes?q=flowers+inauthor:keyes&key=${process.env.REACT_APP_API_KEY}`
  );

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("submitted");
  };

  const handleInputChange = () => {};

  return (
    <div className={styles.searchContainer}>
      <h1>{SEARCH.HEADING}</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.searchField}>
          <input
            type="search"
            placeholder="Поиск..."
            autoFocus
            className={styles.searchBar}
          />
          <button type="submit" className={styles.btnSearch}>
            <img src={SearchIcon} alt="search" className={styles.searchIcon} />
            {SEARCH.FIND}
          </button>
        </div>
        <div className={styles.selectContainer}>
          <Select name={SEARCH.CATEGORIES} options={OPTIONS.CATEGORIES} />
          <Select name={SEARCH.SORTING} options={OPTIONS.SORTING} />
        </div>
      </form>

      <Outlet />
    </div>
  );
};
