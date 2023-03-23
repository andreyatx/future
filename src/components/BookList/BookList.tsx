import { FC } from "react";
import { booksSelectors } from "../../store/features/books/booksSlice";
import { useAppSelector } from "../../store/hooks";
import { Book, BookProps } from "./Book/Book";
import styles from "./BookList.module.css";

export const BookList: FC = () => {
  const { bookList, totalBooks } = useAppSelector(booksSelectors.all);

  if (totalBooks === 0) {
    return (
      <div className={styles.noBooksFound}>Не найдено книг по запросу</div>
    );
  }

  return (
    <>
      {totalBooks ? (
        <div className={styles.booksFound}>Found {totalBooks} results </div>
      ) : null}

      <div className={styles.bookList}>
        {bookList.map((book: BookProps) => {
          return (
            <Book key={book.id} id={book.id} volumeInfo={book.volumeInfo} />
          );
        })}
      </div>
    </>
  );
};
