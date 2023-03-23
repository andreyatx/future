import React, { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../../api";
import { Select } from "../../../components/Select/Select";
import { SEARCH, OPTIONS } from "./constants";
import SearchIcon from "../../../assets/SearchIcon.svg";
import styles from "./SearchForm.module.css";

type SearchQuery = {
  searchText: string;
  category: string;
  sort: string;
};

const initialQuery: SearchQuery = {
  searchText: "",
  category: "",
  sort: "",
};

export const SearchForm = () => {
  const [query, setQuery] = useState<SearchQuery>(initialQuery);
  api.get(
    `/books/v1/volumes?q=flowers+inauthor:keyes&key=${process.env.REACT_APP_API_KEY}`
  );
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("submitted", query);
    setQuery(initialQuery);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setQuery({
      ...query,
      [name]: value,
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styles.searchField}>
        <input
          type="search"
          placeholder="Поиск..."
          autoFocus
          className={styles.searchBar}
          onChange={handleInputChange}
          defaultValue={query.searchText}
          name="searchText"
          required
        />
        <button type="submit" className={styles.btnSearch}>
          <img src={SearchIcon} alt="search" className={styles.searchIcon} />
          {SEARCH.FIND}
        </button>
      </div>
      <div className={styles.selectContainer}>
        <Select
          title={SEARCH.CATEGORIES}
          options={OPTIONS.CATEGORIES}
          onChange={handleInputChange}
          name="category"
          value={query.category}
        />

        <Select
          onChange={handleInputChange}
          title={SEARCH.SORTING}
          options={OPTIONS.SORTING}
          name="sort"
          value={query.sort}
        />
      </div>
    </form>
  );
};
