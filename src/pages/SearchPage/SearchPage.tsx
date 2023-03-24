import { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Paths } from "../../router";
import { SEARCH } from "./SearchForm/constants";
import { SearchForm } from "./SearchForm/SearchForm";
import styles from "./SearchPage.module.css";

export const SearchPage: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.searchContainer}>
        <h1
          onClick={() => {
            navigate(Paths.Home);
            window.location.reload();
          }}
          className={styles.heading}
        >
          {SEARCH.HEADING}
        </h1>

        <SearchForm />
      </div>
      <Outlet />
    </>
  );
};
