import { FC } from "react";
import { BookProps, Book } from "../../components/Book/Book";
import { Loader } from "../../components/Loader/Loader";
import {
  booksActions,
  booksSelectors,
} from "../../store/features/books/booksSlice";
import { booksThunks } from "../../store/features/books/booksThunks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import styles from "./BookList.module.css";

export const BookList: FC = () => {
  const { bookList, totalBooks, currentQuery, isLoading, isLoadMore } =
    useAppSelector(booksSelectors.all);
  const dispatch = useAppDispatch();

  const loadMoreHandler = () => {
    dispatch(booksActions.nextPage());
    dispatch(booksThunks.loadMoreBooks(currentQuery));
  };

  if (isLoading && !isLoadMore) {
    return <Loader />;
  }

  if (totalBooks === 0) {
    return (
      <div className={styles.noBooksFound}>Не найдено книг по запросу</div>
    );
  }

  return (
    <>
      {totalBooks ? (
        <>
          <div className={styles.booksFound}>Found {totalBooks} results </div>
          <div className={styles.bookList}>
            {bookList.map((book: BookProps) => {
              return (
                <Book key={book.id} id={book.id} volumeInfo={book.volumeInfo} />
              );
            })}
          </div>
          <div className={styles.loadMore}>
            {isLoading ? (
              <Loader />
            ) : (
              <button
                onClick={() => loadMoreHandler()}
                className={styles.btnLoadMore}
              >
                Load more
              </button>
            )}
          </div>
        </>
      ) : null}
    </>
  );
};
