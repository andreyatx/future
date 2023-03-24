import { FC, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookProps } from "../../components/Book/Book";
import { Loader } from "../../components/Loader/Loader";
import { booksThunks } from "../../store/features/books/booksThunks";
import { useAppDispatch } from "../../store/hooks";
import styles from "./BookPage.module.css";
import bookIcon from "../../assets/BookIcon.svg";

export const BookPage: FC = () => {
  const { bookid } = useParams();
  const dispatch = useAppDispatch();
  const [book, setBook] = useState<BookProps | null>(null);
  const imageLinks = book?.volumeInfo.imageLinks;
  const imageLinksMap = imageLinks ? (
    <img
      src={book?.volumeInfo.imageLinks.thumbnail}
      alt="book thumbnail"
      className={styles.thumbnail}
    />
  ) : (
    <img src={bookIcon} alt="book thumbnail" className={styles.thumbnail} />
  );

  const categories = book?.volumeInfo.categories;
  const categoriesMap = categories ? (
    <div className={styles.categories}>
      {categories.map((category) => {
        return <span key={category}>{category}</span>;
      })}
    </div>
  ) : null;

  const title = book?.volumeInfo.title;

  const authors = book?.volumeInfo.authors;
  const authorsMap = authors ? (
    <div className={styles.authors}>
      {authors.map((author) => {
        return <span key={author}>{author}</span>;
      })}
    </div>
  ) : null;

  const description = book?.volumeInfo.description ? (
    <div
      className={styles.description}
      dangerouslySetInnerHTML={{ __html: book?.volumeInfo.description }}
    ></div>
  ) : null;

  const fetchBook = useCallback(async () => {
    if (bookid) {
      const response = await dispatch(booksThunks.getBookById(bookid)).unwrap();
      setBook(response);
      return response.volumeInfo;
    }
  }, [bookid, dispatch]);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);
  console.log("book", book);

  if (!book) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>{imageLinksMap}</div>

      <div className={styles.right}>
        <div className={styles.about}>
          {categoriesMap}

          <span className={styles.title}>{title ? title : "no title"}</span>

          {authorsMap}

          {description}
        </div>
      </div>
    </div>
  );
};
