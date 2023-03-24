import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { booksThunks } from "../../store/features/books/booksThunks";
import { useAppDispatch } from "../../store/hooks";
import styles from "./BookPage.module.css";

export const BookPage: FC = () => {
  const { bookid } = useParams();
  const dispatch = useAppDispatch();
  const [book, setBook] = useState();

  const fetchBook = async () => {
    if (bookid) {
      const response = await dispatch(booksThunks.getBookById(bookid)).unwrap();
      // setBook(response);
      console.log(response.volumeInfo);
    }
  };
  fetchBook();

  return (
    <div className={styles.container}>
      <div className={styles.left}>left</div>
      <div className={styles.right}>right</div>
    </div>
  );
};
