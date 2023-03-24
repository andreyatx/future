import { ChangeEvent, FormEvent } from "react";
import { Select } from "../../../components/Select/Select";
import { SEARCH, OPTIONS } from "./constants";
import SearchIcon from "../../../assets/SearchIcon.svg";
import styles from "./SearchForm.module.css";
import { booksThunks } from "../../../store/features/books/booksThunks";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  booksActions,
  booksSelectors,
} from "../../../store/features/books/booksSlice";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../..";

export const SearchForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentQuery } = useAppSelector(booksSelectors.all);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate(Paths.BookList);
    dispatch(booksThunks.getBooks(currentQuery));
    dispatch(booksActions.nextPage());
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    dispatch(booksActions.setCurrentQuery({ ...currentQuery, [name]: value }));
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
          defaultValue={currentQuery.searchText}
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
          value={currentQuery.category}
        />

        <Select
          onChange={handleInputChange}
          title={SEARCH.SORTING}
          options={OPTIONS.SORTING}
          name="sort"
          value={currentQuery.sort}
        />
      </div>
    </form>
  );
};
