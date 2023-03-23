import { ChangeEvent, FormEvent, useState } from "react";
import { Select } from "../../../components/Select/Select";
import { SEARCH, OPTIONS } from "./constants";
import SearchIcon from "../../../assets/SearchIcon.svg";
import styles from "./SearchForm.module.css";
import {
  booksThunks,
  SearchQuery,
} from "../../../store/features/books/booksThunks";
import { useAppDispatch } from "../../../store/hooks";

const initialQuery: SearchQuery = {
  searchText: "",
  category: OPTIONS.CATEGORIES[0],
  sort: OPTIONS.SORTING[0],
};

export const SearchForm = () => {
  const [query, setQuery] = useState<SearchQuery>(initialQuery);
  const dispatch = useAppDispatch();
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(booksThunks.getBooks(query));
    console.log("submitted", query);
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
